import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RouteErrorBoundary from "@/routes/RouteErrorBoundary";
import ErrorBoundary from "@/routes/ErrorBoundary";
import Layout from "@/components/Layout/Layout";
import MovieDetail from "@/components/Movie/Detail";
import Loader from "@/components/ui/Loader";

const Home = lazy(() => import("@/pages/Home"));
const NotFound = lazy(() => import("@/pages/NotFound"));
const Contact = lazy(() => import("@/pages/Contact"));

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
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/movie/:id",
        element: <MovieDetail />,
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
      <Suspense fallback={<Loader />}>
        <RouterProvider router={router} />
      </Suspense>
    </ErrorBoundary>
  );
};

export default AppRoutes;
