import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
// Importaremos estas vistas en los siguientes pasos:
// import Dashboard from './pages/Dashboard';
// import Formulario from './pages/Formulario';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={
            <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
              <h2>Bienvenido al Inventario</h2>
              <p style={{ color: 'var(--text-secondary)' }}>Aquí irá la tabla de equipos en el próximo paso.</p>
            </div>
          } />
          <Route path="nuevo" element={
            <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
              <h2>Crear Equipo</h2>
              <p style={{ color: 'var(--text-secondary)' }}>Aquí irá el formulario.</p>
            </div>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
