import React from "react";

import { Link } from "react-router-dom";

const links = [
  { title: "home", path: "/" },
  { title: "about", path: "/about" },
  { title: "login", path: "/login" },
];
const Navbar = () => {
  return (
    <div>
      {links.map((e) => {
        return (
          <div
            key={e.path}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Link style={{ textDecoration: "none" }} to={e.path}>
              {e.title}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Navbar;
