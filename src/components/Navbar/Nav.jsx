import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  HiHome, HiUser, HiCode, HiCube, HiStar,
  HiAcademicCap, HiPencil, HiMail, HiShare, HiDownload,
} from "react-icons/hi";
import "./nav.css";

const NAV_ITEMS = [
  { id: "home",         label: "Home",      Icon: HiHome        },
  { id: "about",        label: "About",     Icon: HiUser        },
  { id: "projects",     label: "Work",      Icon: HiCube        },
  { id: "skills",       label: "Skills",    Icon: HiCode        },
  { id: "achievements", label: "Wins",      Icon: HiStar        },
  { id: "education",    label: "Education", Icon: HiAcademicCap },
  { id: "thoughts",     label: "Dev Notes", Icon: HiPencil      },
  { id: "contact",      label: "Contact",   Icon: HiMail        },
  { id: "follow",       label: "Follow",    Icon: HiShare       },
];

/**
 * Nav receives two props from Display:
 *   onScrollTo(id)   — scroll to a section programmatically
 *   activeSection    — which section is currently in view (driven by IntersectionObserver)
 *
 * Nav does NOT maintain its own "active" state anymore.
 * Clicking a nav item calls onScrollTo; the scroll triggers
 * IntersectionObserver in Display, which updates activeSection,
 * which flows back here as a prop. Single source of truth.
 */
const Nav = ({ onScrollTo, activeSection = "home" }) => {
  const [mobile,   setMobile]   = useState(window.innerWidth <= 850);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setMobile(window.innerWidth <= 850);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* Close mobile menu whenever active section changes (user scrolled) */
  useEffect(() => {
    setMenuOpen(false);
  }, [activeSection]);

  const handleClick = (id) => {
    onScrollTo(id);
    /* Don't setActive here — let IntersectionObserver drive it via prop */
  };

  return (
    <>
      {/* ── Desktop sidebar ───────────────── */}
      {!mobile && (
        <nav className="nav" aria-label="Site navigation">
          <div className="nav-logo-wrap">
            <img
              src="my_logo3.png"
              alt="KA logo"
              className="nav-logo"
              onError={(e) => (e.target.style.display = "none")}
            />
            <span className="nav-wordmark">
              Kuldeep<span>A</span>.
            </span>
          </div>

          <ul className="nav-menu" role="list">
            {NAV_ITEMS.map(({ id, label, Icon }) => {
              const isActive = activeSection === id;
              return (
                <li key={id} className={isActive ? "active" : ""}>
                  <button
                    onClick={() => handleClick(id)}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <Icon className="nav-icon" aria-hidden />
                    {label}
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="nav-bottom">
            <Link
              to="https://drive.google.com/file/d/1kU14QelhblMZNnAsFZeEhax2v5hOOltf/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-resume-btn"
            >
              <HiDownload /> Resume
            </Link>
          </div>
        </nav>
      )}

      {/* ── Mobile hamburger ──────────────── */}
      {mobile && (
        <button
          className="hamburger"
          onClick={() => setMenuOpen((p) => !p)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <div className={`bar ${menuOpen ? "open" : ""}`} />
          <div className={`bar ${menuOpen ? "open" : ""}`} />
          <div className={`bar ${menuOpen ? "open" : ""}`} />
        </button>
      )}

      {/* ── Mobile full-screen overlay ────── */}
      <AnimatePresence>
        {menuOpen && mobile && (
          <motion.nav
            className="nav-mobile-overlay"
            aria-label="Mobile navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <ul role="list" style={{ listStyle: "none", padding: 0, margin: 0, display: "contents" }}>
              {NAV_ITEMS.map(({ id, label }, i) => {
                const isActive = activeSection === id;
                return (
                  <motion.li
                    key={id}
                    className={isActive ? "active" : ""}
                    initial={{ opacity: 0, x: -22 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -16 }}
                    transition={{ delay: i * 0.04, duration: 0.16 }}
                  >
                    <button
                      onClick={() => handleClick(id)}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {label}
                    </button>
                  </motion.li>
                );
              })}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;