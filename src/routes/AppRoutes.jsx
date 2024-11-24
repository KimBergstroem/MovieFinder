import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RouteErrorBoundary from "@/routes/RouteErrorBoundary";
import ErrorBoundary from "@/routes/ErrorBoundary";
import Layout from "@/components/Layout/Layout";

const Home = lazy(() => import("@/pages/Home"));
const NotFound = lazy(() => import("@/pages/NotFound"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <RouteErrorBoundary />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

const AppRoutes = () => {
  return (
    <ErrorBoundary>
      <Suspense
        fallback={
          <div>
            <p>Laddar...</p>
          </div>
        }
      >
        <RouterProvider router={router} />
      </Suspense>
    </ErrorBoundary>
  );
};

export default AppRoutes;