import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Notes from "../pages/Notes";
import Login from "../pages/Login";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/notes" element={<Notes />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default AppRouter;
