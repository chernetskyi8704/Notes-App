import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Notes from "../../pages/Notes/Notes";
import Login from "../../pages/Login/Login";
import PrivateRoutes from "./PrivatRoutes";
import NotePage from "../../pages/NotePage/NotePage";

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
