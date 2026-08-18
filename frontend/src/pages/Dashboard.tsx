import { useState, useEffect } from 'react';
import axios from 'axios';
import { Equipment } from '../types';
import './Dashboard.css';

export default function Dashboard() {
  const [equipments, setEquipments] = useState<Equipment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Esta función llama a tu Backend
  const fetchEquipments = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/equipment');
      setEquipments(response.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError('No se pudieron cargar los equipos. Asegúrate de que el backend esté encendido.');
      setLoading(false);
    }
  };

  // Se ejecuta al cargar la página
  useEffect(() => {
    fetchEquipments();
  }, []);

  if (loading) {
    return <div className="loading-state">Cargando equipos...</div>;
  }

  if (error) {
    return <div className="error-state">{error}</div>;
  }

  return (
    <div className="dashboard-container glass-panel">
      <div className="dashboard-header">
        <h2>Listado de Equipos</h2>
        <span className="badge">{equipments.length} Registrados</span>
      </div>

      <div className="table-responsive">
        <table className="equipment-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Marca</th>
              <th>Nº de Serie</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {equipments.length === 0 ? (
              <tr>
                <td colSpan={4} className="empty-state">No hay equipos registrados todavía.</td>
              </tr>
            ) : (
              equipments.map((eq) => (
                <tr key={eq.id}>
                  <td className="font-medium">{eq.name}</td>
                  <td>{eq.brand}</td>
                  <td className="text-mono">{eq.serialNumber}</td>
                  <td>
                    <span className={`status-badge ${eq.status.toLowerCase().replace(' ', '-')}`}>
                      {eq.status}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
