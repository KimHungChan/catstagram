import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Catstagram</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/upload">Upload</Link>
        </li>
        {/* <li>
          <Link to="/users">Users</Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
