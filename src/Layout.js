import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="flex-container-parent">
      <div className="flex-container-content">
        <div className="sidebar">
          <ul>
            <li>LOGO Needed Here</li>
            <li>
              <Link to="/index">Home</Link>
            </li>
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
        </div>

        <main className="container main">
          <Outlet />
        </main>
      </div>
      <div className="flex-container-footer">Footer content</div>
    </div>
  );
};

export default Layout;
