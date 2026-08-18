import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import type { Equipment } from '../types';
import './Formulario.css';

export default function Formulario() {
  const navigate = useNavigate();
  const { id } = useParams(); // Obtiene el ID si estamos en /editar/:id
  const isEditing = !!id; // Verdadero si hay un ID

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  // Estado para guardar lo que el usuario escribe
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    serialNumber: '',
    status: 'Operativo'
  });

  // Si estamos editando, traemos los datos actuales
  useEffect(() => {
    if (isEditing) {
      const fetchEquipment = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/api/equipment`);
          // Buscamos el equipo específico (podrías hacer un endpoint GET /:id en el backend para ser más óptimo)
          const eq = response.data.find((e: Equipment) => e.id === id);
          if (eq) {
            setFormData({
              name: eq.name,
              brand: eq.brand,
              serialNumber: eq.serialNumber,
              status: eq.status
            });
          }
        } catch (err) {
          setError('Error al cargar los datos del equipo.');
        }
      };
      fetchEquipment();
    }
  }, [id, isEditing]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Evita que la página recargue
    setLoading(true);
    setError('');

    try {
      if (isEditing) {
        // Hacemos el PUT para actualizar
        await axios.put(`http://localhost:3000/api/equipment/${id}`, formData);
      } else {
        // Hacemos el POST para crear
        await axios.post('http://localhost:3000/api/equipment', formData);
      }
      
      // Si todo sale bien, lo regresamos al dashboard
      navigate('/');
    } catch (err) {
      console.error(err);
      setError('Hubo un error al guardar el equipo. Inténtalo de nuevo.');
      setLoading(false);
    }
  };

  return (
    <div className="form-container glass-panel">
      <h2>{isEditing ? 'Editar Equipo' : 'Registrar Nuevo Equipo'}</h2>
      <p className="subtitle">
        {isEditing ? 'Modifica los datos del equipo seleccionado.' : 'Llena los datos para agregar un equipo al inventario.'}
      </p>

      {error && <div className="error-alert">{error}</div>}

      <form onSubmit={handleSubmit} className="equipment-form">
        <div className="form-group">
          <label htmlFor="name">Nombre del Equipo</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Ej. Laptop Thinkpad T14"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="brand">Marca</label>
            <input
              type="text"
              id="brand"
              name="brand"
              required
              placeholder="Ej. Lenovo"
              value={formData.brand}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="serialNumber">Número de Serie</label>
            <input
              type="text"
              id="serialNumber"
              name="serialNumber"
              required
              placeholder="Ej. SN-123456"
              value={formData.serialNumber}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="status">Estado Inicial</label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="Operativo">Operativo</option>
            <option value="En Mantenimiento">En Mantenimiento</option>
            <option value="Inoperativo">Inoperativo</option>
          </select>
        </div>

        <div className="form-actions">
          <button type="button" className="btn-secondary" onClick={() => navigate('/')}>
            Cancelar
          </button>
          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? 'Guardando...' : (isEditing ? 'Actualizar Equipo' : 'Guardar Equipo')}
          </button>
        </div>
      </form>
    </div>
  );
}
