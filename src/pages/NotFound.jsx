import { Link } from "react-router-dom";

const NotFound = () => (
  <div>
    <h1>404 - Page Not Found</h1>
    <p>Unfortunately, the page you are looking for does not exist.</p>
    <p>
      Go back to
      <Link to="/">home</Link>.
    </p>
  </div>
);

export default NotFound;
