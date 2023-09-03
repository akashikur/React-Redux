import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav>
        <h2>Dictinory App</h2>
        <div className="links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/history">History</NavLink>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
