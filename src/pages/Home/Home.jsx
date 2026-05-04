import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter';
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import {
  SiNodedotjs, SiMongodb, SiPostgresql, SiDocker,
  SiApachekafka, SiRedis, SiJavascript,
  SiReact, SiPython,
} from "react-icons/si";
import "./home.css";


const badges = [
  { Icon: SiNodedotjs,   label: 'Node.js',    color: '#68a063', pos: { top: '8%',    left: '-22%'  } },
  { Icon: SiPostgresql,  label: 'PostgreSQL', color: '#336791', pos: { top: '24%',   right: '-22%' } },
  { Icon: SiMongodb,     label: 'MongoDB',    color: '#47a248', pos: { bottom: '32%',left: '-24%'  } },
  { Icon: SiJavascript,  label: 'JavaScript', color: '#f7df1e', pos: { top: '58%',   right: '-20%' } },
  { Icon: SiReact,       label: 'React.js',   color: '#61dafb', pos: { bottom: '10%',left: '-12%'  } },
  { Icon: SiPython,      label: 'Python',     color: '#3776ab', pos: { top: '4%',    right: '-10%' } },
];

/* ── Rotating focus tags ─────────────────── */
const focuses = [
  { text: 'Backend Development', color: '#00f5d4' },
  { text: 'APIs & Data Flow',    color: '#ff4e00' },
  { text: 'Problem Solving',     color: '#4a9eff' },
  { text: 'System Fundamentals', color: '#7b5ea7' },
];

const Home = ({ onScrollTo }) => {
  const [focusIdx, setFocusIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setFocusIdx(i => (i + 1) % focuses.length), 2600);
    return () => clearInterval(t);
  }, []);

  const cur = focuses[focusIdx];

  return (
    <div className="home">
      <div className="home-grid" />
      <div className="home-orb home-orb--c" />
      <div className="home-orb home-orb--o" />

      <div className="home-inner">
        {/* ── LEFT ────────────────────────── */}
        <div className="home-left">

          {/* Role line */}
          <div className="home-role-row">
            <span className="role-prefix">~/</span>
            <span className="role-txt">
              <Typewriter
                words={['Backend Developer', 'Software Engineer']}
                loop={Infinity}
                cursor
                cursorStyle="_"
                typeSpeed={80}
                deleteSpeed={55}
                delaySpeed={1800}
              />
            </span>
          </div>

          {/* Name */}
          <h1 className="home-name">
            <span className="hn-solid">Kuldeep</span>
            <span className="hn-outline">Agra<span className="hn-accent">hari</span></span>
          </h1>

          {/* Mobile-only: photo beside tagline block */}
          <div className="home-mobile-row">
            {/* Left: tagline + college + focus */}
            <div className="home-mobile-text">
              <p className="home-tagline">
                Backend-focused developer. Building APIs, real-time systems,
                and data pipelines — one project at a time.
              </p>

              <div className="home-focus-row">
                <span className="focus-label">Focused on</span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={focusIdx}
                    className="focus-tag"
                    style={{
                      color: cur.color,
                      borderColor: cur.color + '44',
                      background: cur.color + '14',
                    }}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.28 }}
                  >
                    {cur.text}
                  </motion.span>
                </AnimatePresence>
              </div>

              <div className="home-college">
                <span className="hc-name">PDPM IIIT Jabalpur</span>
                <span className="hc-year">B.Tech CSE · 2022–2026 · India</span>
              </div>
            </div>

            {/* Right: compact photo (mobile only) */}
            <div className="home-photo-mobile">
              <div className="hpm-ring" />
              <img
                src="profile.png"
                alt="Kuldeep"
                className="hpm-img"
                onError={e => (e.target.style.display = 'none')}
              />
              <div className="hpm-avail">
                <span className="avail-dot" /> Open to Work
              </div>
            </div>
          </div>

          {/* Desktop-only tagline (inside home-left, outside mobile-row) */}
          <p className="home-tagline home-tagline--desktop">
            Backend-focused developer working on APIs, real-time systems, and data processing.
            Final-year CSE student building and learning through hands-on projects.
          </p>

          <div className="home-focus-row home-focus-row--desktop">
            <span className="focus-label">Currently focused on</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={focusIdx}
                className="focus-tag"
                style={{
                  color: cur.color,
                  borderColor: cur.color + '44',
                  background: cur.color + '14',
                }}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.28 }}
              >
                {cur.text}
              </motion.span>
            </AnimatePresence>
          </div>

          <div className="home-college home-college--desktop">
            <span className="hc-name">PDPM IIIT Jabalpur</span>
            <span className="hc-year">B.Tech CSE · 2022–2026 · India</span>
          </div>

          {/* ── CTAs ─────────────────────────
              Desktop: all in one flex row
              Mobile:
                Row 1 — Resume (full width)
                Row 2 — Work btn + GitHub icon + LinkedIn icon
          ───────────────────────────────────── */}
          <div className="home-ctas">
            {/* Primary CTA */}
            <Link
              to="https://drive.google.com/file/d/1kU14QelhblMZNnAsFZeEhax2v5hOOltf/view?usp=sharing"
              target="_blank"
              className="cta-primary"
            >
              <FaDownload /> Resume
            </Link>

            {/* Secondary row: Work + socials together */}
            <div className="cta-secondary-row">
              <button
                className="cta-outline"
                onClick={() => onScrollTo?.('projects')}
              >
                Work <HiArrowRight />
              </button>

              <a
                href="https://github.com/Kuldeepagrahari"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-icon"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/kuldeep-agrahari-56b159260"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-icon"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Mobile tech strip */}
          <div className="home-tech-strip">
            {[
              { Icon: SiNodedotjs,   c: '#68a063' },
              { Icon: SiPostgresql,  c: '#336791' },
              { Icon: SiMongodb,     c: '#47a248' },
              { Icon: SiApachekafka, c: '#b0b0b0' },
              { Icon: SiRedis,       c: '#dc382d' },
              { Icon: SiDocker,      c: '#2496ed' },
            ].map(({ Icon, c }, i) => (
              <div className="hts-item" key={i}>
                <Icon style={{ color: c }} />
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT — photo (desktop only) ─── */}
        <div className="home-right">
          <div className="photo-frame">
            <div className="pf-ring pf-ring--1" />
            <div className="pf-ring pf-ring--2" />

            <div className="pf-photo">
              <img
                src="profile.png"
                alt="Kuldeep Agrahari"
                className="pf-img"
                onError={e => (e.target.style.display = 'none')}
              />
              <div className="pf-fallback">KA</div>
            </div>

            {badges.map(({ Icon, label, color, pos }) => (
              <div
                className="pf-badge"
                key={label}
                style={{ ...pos, '--bc': color }}
              >
                <Icon style={{ color }} />
                <span>{label}</span>
              </div>
            ))}

            <div className="pf-status">
              <span className="avail-dot" /> Open to Opportunities · Jun 2026
            </div>
          </div>
        </div>
      </div>

      {/* ── Stats strip ──────────────────── */}
      <div className="home-stats">
        {[
          { n: '3+',    l: 'Years Coding'        },
          { n: '7+',    l: 'Projects Shipped'     },
          { n: '1200+', l: 'DSA Problems'         },
          { n: '1400+', l: 'GitHub Contributions' },
        ].map(({ n, l }) => (
          <div className="hstat" key={l}>
            <span className="hstat-n">{n}</span>
            <span className="hstat-l">{l}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;