import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion
import "./nav.css";

const Nav = ({ onScrollTo }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 850); // Track screen size

  // Update isMobile on window resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 850);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavClick = (section) => {
    setActiveSection(section);
    onScrollTo(section);
    setMenuOpen(false);
  };

  return (
    <div className="nav">
      {/* Hamburger Menu for Mobile */}
      {isMobile && (
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        </div>
      )}

      {/* Sidebar for Desk
      top */}
      {!isMobile && (
        <>
         <img src="my_logo.png" className='logo' style={{width: "7vw", marginBottom:"20px"}} alt="" />
        <ul className="menu desktop">
          {["home", "about", "education", "skills", "projects", "contact", "follow"].map(
            (section) => (
              <li
                key={section}
                className={activeSection === section ? "active" : ""}
                onClick={() => handleNavClick(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </li>
            )
          )}
        </ul></>
      )}

      {/* Mobile Menu (Appears in the Middle) */}
      <AnimatePresence>
        {menuOpen && isMobile && (

          <motion.ul
            className="menu active"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: -200, x:-150 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <img src="my_logo.png" alt="" style={{width: "50px", marginBottom:"10px"}} />
            {["home", "about", "education", "skills", "projects", "contact", "follow"].map(
              (section, index) => (
                <motion.li
                  key={section}
                  className={activeSection === section ? "active" : ""}
                  onClick={() => handleNavClick(section)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: index * 0.1, duration: 0.2 }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </motion.li>
              )
            )}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Nav;
