import { Suspense, lazy } from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

const Login = lazy(() => import("pages/login"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Suspense>
          <Outlet />
        </Suspense>
      </ProtectedRoute>
    ),
    children: [{ element: <div></div>, index: true }],
  },
  {
    path: "login",
    element: <Login />,
  },
]);

export { ProtectedRoute, router };
