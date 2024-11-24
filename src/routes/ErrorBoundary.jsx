import { Component } from "react";
import { Link } from "react-router-dom";
import { ERROR } from "@/utils/validation";

class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error("Error details:", {
      error: error.message,
      componentStack: info.componentStack,
      timestamp: new Date().toISOString(),
    });
  }
  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>{ERROR.GENERAL}</h2>
          <p>{ERROR.SERVER}</p>
          <Link to="/">Go back to the home page</Link>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
