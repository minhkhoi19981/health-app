import { PropsWithChildren, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import authStore, { AUTH } from "store/authStore";
import { PATH_ROUTE } from "~/utils/constants";

type Props = PropsWithChildren;

const ProtectedRoute: React.FC<Props> = ({ children }) => {
  const { pathname } = useLocation();
  const { user } = authStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === PATH_ROUTE.ABOUT_HEALTH) {
      return;
    }
    if (user.authed === AUTH.NOT_AUTHED || !user) {
      navigate("/login", { replace: true });
    }
  }, [navigate, user, pathname]);

  return children;
};

export default ProtectedRoute;
