import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Notes from "../pages/Notes";
import Login from "../pages/Login";
import PrivateRoutes from "../components/routes/PrivatRoutes";
import NotePage from "../pages/NotePage";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/notes/:title" element={<NotePage />} />
        <Route path="*" element={<Home />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Login />} />
    </Routes>
  );
};

export default AppRouter;
