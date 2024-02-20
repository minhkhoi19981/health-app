import { Suspense } from "react";
import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { Layout } from "~/components";
import HomePage from "pages/home";
import MyOwnRecordPage from "pages/my-own-record";
import AboutHealthPage from "~/pages/about-health";
import LoginPage from "pages/login";
import Page404 from "pages/404";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Suspense fallback={<div>...Loading</div>}>
          <Layout>
            <Outlet />
          </Layout>
        </Suspense>
      </ProtectedRoute>
    ),
    children: [
      { element: <HomePage />, index: true },
      { path: "my-own-record", element: <MyOwnRecordPage /> },
      { path: "about-health", element: <AboutHealthPage /> },
    ],
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
