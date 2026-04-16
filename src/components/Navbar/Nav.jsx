import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  HiHome, HiUser, HiCode, HiCube, HiStar,
  HiAcademicCap, HiPencil, HiMail, HiShare, HiDownload
} from "react-icons/hi";
import "./nav.css";

/* ── Section order: optimised for hiring manager scroll ── */
const navItems = [
  { id: "home",         label: "Home",        Icon: HiHome         },
  { id: "about",        label: "About",       Icon: HiUser         },
  { id: "projects",     label: "Work",        Icon: HiCube         }, // Projects + Experience
  { id: "skills",       label: "Skills",      Icon: HiCode         },
  { id: "achievements", label: "Wins",        Icon: HiStar         },
  { id: "education",    label: "Education",   Icon: HiAcademicCap  },
  { id: "thoughts",     label: "Dev Notes",   Icon: HiPencil       },
  { id: "contact",      label: "Contact",     Icon: HiMail         },
  { id: "follow",       label: "Follow",      Icon: HiShare        },
];

const Nav = ({ onScrollTo }) => {
  const [active,   setActive]   = useState("home");
  const [mobile,   setMobile]   = useState(window.innerWidth <= 850);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const r = () => setMobile(window.innerWidth <= 850);
    window.addEventListener("resize", r);
    return () => window.removeEventListener("resize", r);
  }, []);

  const go = (id) => { setActive(id); onScrollTo(id); setMenuOpen(false); };

  return (
    <>
      {/* Desktop sidebar */}
      {!mobile && (
        <nav className="nav">
          <div className="nav-logo-wrap">
            <img src="my_logo3.png" alt="logo" className="nav-logo"
              onError={e => e.target.style.display='none'} />
            <span className="nav-wordmark">Kuldeep<span>A</span>.</span>
          </div>

          <ul className="nav-menu">
            {navItems.map(({ id, label, Icon }) => (
              <li key={id} className={active === id ? "active" : ""}>
                <button onClick={() => go(id)}>
                  <Icon className="nav-icon" />
                  {label}
                </button>
              </li>
            ))}
          </ul>

          <div className="nav-bottom">
            <Link
              to="https://drive.google.com/file/d/1kU14QelhblMZNnAsFZeEhax2v5hOOltf/view?usp=sharing"
              target="_blank" className="nav-resume-btn"
            >
              <HiDownload /> Resume
            </Link>
          </div>
        </nav>
      )}

      {/* Mobile hamburger */}
      {mobile && (
        <button className="hamburger" onClick={() => setMenuOpen(p => !p)} aria-label="Toggle menu">
          <div className={`bar ${menuOpen ? "open" : ""}`} />
          <div className={`bar ${menuOpen ? "open" : ""}`} />
          <div className={`bar ${menuOpen ? "open" : ""}`} />
        </button>
      )}

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && mobile && (
          <motion.ul
            className="nav-mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {navItems.map(({ id, label }, i) => (
              <motion.li key={id}
                className={active === id ? "active" : ""}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -14 }}
                transition={{ delay: i * 0.04, duration: 0.16 }}
              >
                <button onClick={() => go(id)}>{label}</button>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;