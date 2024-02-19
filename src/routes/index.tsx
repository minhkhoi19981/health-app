import { Suspense, lazy } from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { Layout } from "~/components";

const LoginPage = lazy(() => import("pages/login"));
const HomePage = lazy(() => import("pages/home"));

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
]);

export { ProtectedRoute, router };
