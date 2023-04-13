import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import NotesPage from "../../pages/NotesPage/NotesPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import PrivateRoutes from "./PrivatRoutes";
import NotePage from "../../pages/NotePage/NotePage";
import RegistrationPage from "../../pages/RegistrationPage/RegistrationPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/notes/:title" element={<NotePage />} />
      </Route>
      <Route element={<Outlet />}>
        <Route index element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
