import React, { useState } from "react";
import "./nav.css";

const Nav = ({ onScrollTo }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home"); // Track the active section

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavClick = (section) => {
    setActiveSection(section); // Update the active section
    onScrollTo(section); // Scroll to the selected section
  };

  return (
    <div className="nav">
      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
      </div>

      {/* Navigation Menu */}
      <ul className={menuOpen ? "menu active" : "menu"}>
        {["home", "about", "skills", "projects", "contact", "follow"].map(
          (section) => (
            <li
              key={section}
              className={activeSection === section ? "active" : ""}
              onClick={() => handleNavClick(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1).replace("_", " ")}
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Nav;
