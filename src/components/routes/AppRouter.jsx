import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Notes from "../../pages/Notes/Notes";
import Login from "../../pages/Login/Login";
import PrivateRoutes from "./PrivatRoutes";
import Note from "../../pages/Note/Note";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/notes/:title" element={<Note />} />
        <Route path="*" element={<Home />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Login />} />
    </Routes>
  );
};

export default AppRouter;
