import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import Home from "./Home";

const AllRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route
        path="/about"
        element={
          <PrivateRoute>
            <About />
          </PrivateRoute>
        }
      ></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
};

export default AllRouters;
