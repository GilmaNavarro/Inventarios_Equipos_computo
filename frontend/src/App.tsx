import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
// import Formulario from './pages/Formulario';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="nuevo" element={
            <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
              <h2>Crear Equipo</h2>
              <p style={{ color: 'var(--text-secondary)' }}>Aquí irá el formulario en el próximo paso.</p>
            </div>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
