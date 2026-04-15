// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion
// import "./nav.css";

// const Nav = ({ onScrollTo }) => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("home");
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 850); // Track screen size

//   // Update isMobile on window resize
//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth <= 850);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const handleNavClick = (section) => {
//     setActiveSection(section);
//     onScrollTo(section);
//     setMenuOpen(false);
//   };

//   return (
//     <div className="nav">
//       {/* Hamburger Menu for Mobile */}
//       {isMobile && (
//         <div className="hamburger" onClick={toggleMenu}>
//           <div className={`bar ${menuOpen ? "open" : ""}`}></div>
//           <div className={`bar ${menuOpen ? "open" : ""}`}></div>
//           <div className={`bar ${menuOpen ? "open" : ""}`}></div>
//         </div>
//       )}

//       {/* Sidebar for Desk
//       top */}
//       {!isMobile && (
//         <>
//          <img src="my_logo.png" className='logo' style={{width: "7vw", marginBottom:"20px"}} alt="" />
//         <ul className="menu desktop">
//           {["home", "about", "education", "skills", "projects", "achievements", "contact", "follow"].map(
//             (section) => (
//               <li
//                 key={section}
//                 className={activeSection === section ? "active" : ""}
//                 onClick={() => handleNavClick(section)}
//               >
//                 {section.charAt(0).toUpperCase() + section.slice(1)}
//               </li>
//             )
//           )}
//         </ul></>
//       )}

//       {/* Mobile Menu (Appears in the Middle) */}
//       <AnimatePresence>
//         {menuOpen && isMobile && (

//           <motion.ul
//             className="menu active"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: -200, x:-150 }}
//             exit={{ opacity: 0, y: 50 }}
//             transition={{ duration: 0.3, ease: "easeInOut" }}
//           >
//             <img src="my_logo.png" alt="" style={{width: "50px", marginBottom:"10px"}} />
//             {["home", "about", "education", "skills", "projects", "achievements", "contact", "follow"].map(
//               (section, index) => (
//                 <motion.li
//                   key={section}
//                   className={activeSection === section ? "active" : ""}
//                   onClick={() => handleNavClick(section)}
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: 10 }}
//                   transition={{ delay: index * 0.1, duration: 0.2 }}
//                 >
//                   {section.charAt(0).toUpperCase() + section.slice(1)}
//                 </motion.li>
//               )
//             )}
//           </motion.ul>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default Nav;
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  HiHome, HiUser, HiAcademicCap, HiCode, HiCube,
  HiStar, HiMail, HiShare, HiDownload
} from "react-icons/hi";
import "./nav.css";
import "../../global.css"; // adjust path as needed

const navItems = [
  { id: "home",         label: "Home",         Icon: HiHome },
  { id: "about",        label: "About",        Icon: HiUser },
  { id: "education",    label: "Education",    Icon: HiAcademicCap },
  { id: "skills",       label: "Skills",       Icon: HiCode },
  { id: "projects",     label: "Projects",     Icon: HiCube },
  { id: "achievements", label: "Achievements", Icon: HiStar },
  { id: "contact",      label: "Contact",      Icon: HiMail },
  { id: "follow",       label: "Follow",       Icon: HiShare },
];

const Nav = ({ onScrollTo }) => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 850);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 850);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavClick = (id) => {
    setActiveSection(id);
    onScrollTo(id);
    setMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Sidebar */}
      {!isMobile && (
        <nav className="nav">
          <div className="nav-logo-wrap">
            <img src="my_logo3.png" alt="logo" className="nav-logo" />
            {/* <span className="nav-wordmark">.<span></span></span> */}
          </div>

          <ul className="nav-menu">
            {navItems.map(({ id, label, Icon }) => (
              <li key={id} className={activeSection === id ? "active" : ""}>
                <button onClick={() => handleNavClick(id)}>
                  <Icon className="nav-icon" />
                  {label}
                </button>
              </li>
            ))}
          </ul>

          <div className="nav-bottom">
            <Link
              to="https://drive.google.com/file/d/1kU14QelhblMZNnAsFZeEhax2v5hOOltf/view?usp=sharing"
              target="_blank"
              className="nav-resume-btn"
            >
              <HiDownload />
              Resume
            </Link>
          </div>
        </nav>
      )}

      {/* Mobile Hamburger */}
      {isMobile && (
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <div className={`bar ${menuOpen ? "open" : ""}`} />
          <div className={`bar ${menuOpen ? "open" : ""}`} />
          <div className={`bar ${menuOpen ? "open" : ""}`} />
        </div>
      )}

      {/* Mobile Full Screen Menu */}
      <AnimatePresence>
        {menuOpen && isMobile && (
          <motion.div
            className="nav-mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <img src="my_logo.png" alt="logo" className="mobile-logo" />
            {navItems.map(({ id, label }, i) => (
              <motion.li
                key={id}
                className={activeSection === id ? "active" : ""}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ delay: i * 0.05, duration: 0.2 }}
              >
                <button onClick={() => handleNavClick(id)}>{label}</button>
              </motion.li>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;