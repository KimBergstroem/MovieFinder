import { useRouteError, Link } from "react-router-dom";
import { ERROR } from "@/utils/validation";

const RouteErrorBoundary = () => {
  const error = useRouteError();

  let errorMessage = ERROR.GENERAL_ERROR;
  if (error.status === 404) {
    errorMessage = ERROR.NOT_FOUND_ERROR;
  } else if (error.message) {
    errorMessage = error.message;
  }

  return (
    <div className="error-container">
      <h1>Oh no! Something went wrong</h1>
      <p>{errorMessage}</p>
      <Link to="/">Go back to the home page</Link>
    </div>
  );
};

export default RouteErrorBoundary;
