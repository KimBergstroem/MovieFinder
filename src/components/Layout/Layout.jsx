import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </header>
      <main>
        <h1>Main Layout Content below</h1>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
