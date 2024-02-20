import { PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authStore, { AUTH } from "store/authStore";

type Props = PropsWithChildren;

const ProtectedRoute: React.FC<Props> = ({ children }) => {
  const { user } = authStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (user.authed === AUTH.NOT_AUTHED || !user) {
      navigate("/login", { replace: true });
    }
  }, [navigate, user]);

  return children;
};

export default ProtectedRoute;
