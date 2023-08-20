import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav className="bg-amber-500">
        <ul>
          <li>
            <Link to="/colors">Colors</Link>
          </li>
          <li>
            <Link to="/">Index</Link>
          </li>
        </ul>
      </nav>

      <Outlet />

      <footer>Footer content</footer>
    </div>
  );
};

export default Layout;
