import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Login from "./Login";
import Home from "./Home";
import ContactUs from "./ContactUs";
import { useSelector } from "react-redux";
import Admin from "../privateRoutes/Admin";

const AllRouters = () => {
  const { role } = useSelector((store) => store.authReducer);
  console.log(role);
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>

      <React.Fragment>
        <Route element={<Admin />}>
          <Route
            path="/about"
            element={
              <Admin>
                <About />
              </Admin>
            }
          ></Route>{" "}
        </Route>
      </React.Fragment>
      <Route path="/login" element={<Login />}></Route>
      <React.Fragment>
        <Route element={<Admin />}>
          <Route
            path="/contact"
            element={
              <Admin>
                <ContactUs />
              </Admin>
            }
          ></Route>
        </Route>
      </React.Fragment>
    </Routes>
  );
};

export default AllRouters;
