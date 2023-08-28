import { Outlet, Link } from 'react-router-dom';

import ProjectLogo from './assets/logos/suture-logo-accent.png';

const Layout = () => {
  return (
    <div className="flex-container-parent">
      <div className="flex-container-content">
        <div className="sidebar">
          <div className="logo">
            <Link to="/index">
              <img src={ProjectLogo} alt="Company Logo" />
            </Link>
          </div>
          <nav>
            <ul>
              <li>
                Design System
                <ul>
                  <li>
                    <Link to="/colors">Colors</Link>
                  </li>
                  <li>
                    <Link to="/typography">Typography</Link>
                  </li>
                </ul>
              </li>
              <li>
                Components
                <ul>
                  <li>
                    <Link to="/buttons">Buttons</Link>
                  </li>
                  <li>
                    <Link to="/forms">Forms</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>

        <main className="main">
          <Outlet />
        </main>
      </div>
      <div className="flex-container-footer">Footer content</div>
    </div>
  );
};

export default Layout;
