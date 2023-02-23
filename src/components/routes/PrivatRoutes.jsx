import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const PrivateRoutes = () => {
    const {isAuth} = React.useContext(AuthContext);
    const location = useLocation();

    return isAuth ? <Outlet /> : <Navigate to="/login" state={{from: location}} replace />
};

export default PrivateRoutes;