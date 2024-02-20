import { Suspense, lazy } from "react";
import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { Layout } from "~/components";

const LoginPage = lazy(() => import("pages/login"));
const HomePage = lazy(() => import("pages/home"));
const Page404 = lazy(() => import("pages/404"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Suspense>
          <Layout>
            <Outlet />
          </Layout>
        </Suspense>
      </ProtectedRoute>
    ),
    children: [{ element: <HomePage />, index: true }],
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "404",
    element: <Page404 />,
  },
  {
    path: "*",
    element: <Navigate to="/404" replace />,
  },
]);

export { ProtectedRoute, router };
