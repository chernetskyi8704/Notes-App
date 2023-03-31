import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import {useSelector} from "react-redux";

const PrivateRoutes = () => {
    const isAuth = useSelector(state => state.auth.isAuth);
    const location = useLocation();

    return isAuth ? <Outlet /> : <Navigate to="/login" state={{from: location}} replace />
};

export default PrivateRoutes;