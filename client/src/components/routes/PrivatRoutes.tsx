import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";
import { allAuthSettings } from "../../store/features/auth/authSlice";

const PrivateRoutes = () => {
  const { isAuth } = useAppSelector(allAuthSettings);
  const location = useLocation();

  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoutes;
