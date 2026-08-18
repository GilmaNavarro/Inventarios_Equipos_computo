import { Outlet, Link, useLocation } from 'react-router-dom';
import './Layout.css';

export default function Layout() {
  const location = useLocation();

  return (
    <div className="layout-container">
      <nav className="navbar glass-panel">
        <div className="navbar-content">
          <Link to="/" className="navbar-brand">
            <span className="icon">💻</span>
            <h1>Inventario</h1>
          </Link>
          
          <div className="navbar-links">
            <Link 
              to="/" 
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            >
              Dashboard
            </Link>
            <Link 
              to="/nuevo" 
              className={`nav-link btn-primary ${location.pathname === '/nuevo' ? 'active' : ''}`}
            >
              + Nuevo Equipo
            </Link>
          </div>
        </div>
      </nav>

      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}
