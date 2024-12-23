import React, { useState } from "react";
import "./nav.css";
import { Link } from "react-scroll";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="nav">
      <img src="logo3.png" alt="Logo" />

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
      </div>

      {/* Navigation Menu */}
      <ul className={menuOpen ? "menu active" : "menu"}>
        <li>
          <Link to="#" smooth={true} duration={500} onClick={toggleMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="#" smooth={true} duration={500} onClick={toggleMenu}>
            About
          </Link>
        </li>
        <li>
          <Link to="#" smooth={true} duration={500} onClick={toggleMenu}>
            Experience
          </Link>
        </li>
        <li>
          <Link to="#" smooth={true} duration={500} onClick={toggleMenu}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="#" smooth={true} duration={500} onClick={toggleMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
