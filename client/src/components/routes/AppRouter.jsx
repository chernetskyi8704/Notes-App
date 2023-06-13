import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import NotesPage from "../../pages/NotesPage/NotesPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import PrivateRoutes from "./PrivatRoutes";
import RegistrationPage from "../../pages/RegistrationPage/RegistrationPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/home" element={<HomePage />} />
      </Route>
      <Route element={<Outlet />}>
        <Route index element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
