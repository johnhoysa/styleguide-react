import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="flex-container-parent">
      <div className="flex-container-content">
        <div className="sidebar">
          <ul>
            <li>LOGO Needed</li>
            <li>About Page Needed?</li>
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
          </ul>
        </div>

        <div className="main">
          <Outlet />
        </div>
      </div>
      <div className="flex-container-footer">Footer content</div>
    </div>
  );
};

export default Layout;
