import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="container mx-auto">
      <header>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </header>
      <main>
        <h1>Hello World!</h1>
      </main>
    </div>
  );
};

export default Layout;
