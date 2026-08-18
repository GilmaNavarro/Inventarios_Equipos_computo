import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Formulario.css';

export default function Formulario() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  // Estado para guardar lo que el usuario escribe
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    serialNumber: '',
    status: 'Operativo'
  });

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
      // Hacemos el POST al backend con los datos del formulario
      await axios.post('http://localhost:3000/api/equipment', formData);
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
      <h2>Registrar Nuevo Equipo</h2>
      <p className="subtitle">Llena los datos para agregar un equipo al inventario.</p>

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
            {loading ? 'Guardando...' : 'Guardar Equipo'}
          </button>
        </div>
      </form>
    </div>
  );
}
