import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import {
  SiNodedotjs, SiMongodb, SiPostgresql, SiDocker,
  SiApachekafka, SiRedis, SiTypescript, SiNextdotjs,
} from "react-icons/si";
import "./home.css";

// What I do — identity-first, no job-seeking language
const ROLES = ['Backend Engineer', 'Systems Builder', 'Full-Stack Engineer'];

// Reflects curiosity + current focus areas
const FOCUSES = [
  { text: 'Event-Driven Systems', color: '#00f5d4' },
  { text: 'Low Level Design',     color: '#ff4e00' },
  { text: 'Building ApplyFlow',   color: '#4a9eff' },
  { text: 'Backend Architecture', color: '#7b5ea7' },
];

// Added TypeScript + Next.js, kept the strongest backend signals
const TECH_BADGES = [
  { Icon: SiNodedotjs,   label: 'Node.js',     color: '#68a063', pos: { top: '6%',    left: '-24%'  } },
  { Icon: SiPostgresql,  label: 'PostgreSQL',   color: '#336791', pos: { top: '22%',   right: '-24%' } },
  { Icon: SiApachekafka, label: 'Kafka',         color: '#b0b0b0', pos: { bottom: '30%',left: '-26%' } },
  { Icon: SiTypescript,  label: 'TypeScript',   color: '#3178c6', pos: { top: '56%',   right: '-22%' } },
  { Icon: SiNextdotjs,   label: 'Next.js',      color: '#ffffff', pos: { bottom: '8%', left: '-14%'  } },
  { Icon: SiRedis,       label: 'Redis',         color: '#dc382d', pos: { top: '2%',   right: '-12%' } },
];

// Honest stats — "shipped" not "built"
const STATS = [
  { n: '3+',    l: 'Years Coding'        },
  { n: '7+',    l: 'Systems Shipped'     },
  { n: '700+',  l: 'LeetCode Problems'   },
  { n: '1500+', l: 'GitHub Contributions'},
];

const Home = ({ onScrollTo }) => {
  const [focusIdx, setFocusIdx] = useState(0);
  const [roleIdx,  setRoleIdx]  = useState(0);
  const [roleVisible, setRoleVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleVisible(false);
      setTimeout(() => {
        setRoleIdx(i => (i + 1) % ROLES.length);
        setRoleVisible(true);
      }, 300);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setFocusIdx(i => (i + 1) % FOCUSES.length), 2600);
    return () => clearInterval(t);
  }, []);

  const cur = FOCUSES[focusIdx];

  return (
    <div className="home">
      <div className="home-grid" />
      <div className="home-orb home-orb--c" />
      <div className="home-orb home-orb--o" />

      <div className="home-inner">

        {/* ── LEFT ───────────────────────── */}
        <div className="home-left">

          {/* Role badge — identity, not job title */}
          <div className="home-role-row">
            <span className="role-prefix">~/</span>
            <span
              className="role-txt"
              style={{ opacity: roleVisible ? 1 : 0, transition: 'opacity 0.3s ease' }}
            >
              {ROLES[roleIdx]}
            </span>
          </div>

          {/* Name */}
          <h1 className="home-name">
            <span className="hn-solid">Kuldeep</span>
            <span className="hn-outline">Agra<span className="hn-accent">hari</span></span>
          </h1>

          {/* ── Mobile combined row ── */}
          <div className="home-mobile-row">
            <div className="home-mobile-text">
              {/* Curiosity-first tagline — matches identity */}
              <p className="home-tagline">
                Curious builder. I ship systems that hold under real load.
              </p>

              <div className="home-focus-row">
                <span className="focus-label">Currently</span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={focusIdx}
                    className="focus-tag"
                    style={{
                      color: cur.color,
                      borderColor: cur.color + '44',
                      background: cur.color + '14',
                    }}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.25 }}
                  >
                    {cur.text}
                  </motion.span>
                </AnimatePresence>
              </div>

              <div className="home-college">
                <span className="hc-name">PDPM IIIT Jabalpur</span>
                <span className="hc-year">B.Tech CSE · 2022–2026</span>
              </div>
            </div>

            {/* Mobile photo */}
            <div className="home-photo-mobile">
              <div className="hpm-ring" />
              <img
                src="hero-image.png"
                alt="Kuldeep"
                className="hpm-img"
                onError={e => (e.target.style.display = 'none')}
              />
              {/* Removed "Open to Work" — no desperation signals */}
              <div className="hpm-avail">
                <span className="avail-dot" /> Jun 2026
              </div>
            </div>
          </div>

          {/* Desktop-only tagline — curiosity + builder identity */}
          <p className="home-tagline home-tagline--desktop">
            Curious by nature. I don't wait to understand everything — I build my way there.
            Obsessed with systems that matter to millions.
          </p>

          <div className="home-focus-row home-focus-row--desktop">
            <span className="focus-label">Currently</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={focusIdx}
                className="focus-tag"
                style={{
                  color: cur.color,
                  borderColor: cur.color + '44',
                  background: cur.color + '14',
                }}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.25 }}
              >
                {cur.text}
              </motion.span>
            </AnimatePresence>
          </div>

          <div className="home-college home-college--desktop">
            <span className="hc-name">PDPM IIIT Jabalpur</span>
            <span className="hc-year">B.Tech CSE · 2022–2026 · India</span>
          </div>

          {/* CTAs */}
          <div className="home-ctas">
            <Link
              to="https://drive.google.com/file/d/1kU14QelhblMZNnAsFZeEhax2v5hOOltf/view?usp=sharing"
              target="_blank"
              className="cta-primary"
            >
              <FaDownload /> Resume
            </Link>

            <div className="cta-secondary-row">
              <button className="cta-outline" onClick={() => onScrollTo?.('projects')}>
                See Projects <HiArrowRight />
              </button>
              <a href="https://github.com/Kuldeepagrahari" target="_blank" rel="noopener noreferrer" className="cta-icon" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/kuldeep-agrahari-56b159260" target="_blank" rel="noopener noreferrer" className="cta-icon" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Mobile tech strip — added TypeScript + Next.js */}
          <div className="home-tech-strip">
            {[
              { Icon: SiNodedotjs,   c: '#68a063' },
              { Icon: SiPostgresql,  c: '#336791' },
              { Icon: SiApachekafka, c: '#b0b0b0' },
              { Icon: SiTypescript,  c: '#3178c6' },
              { Icon: SiNextdotjs,   c: '#ffffff'  },
              { Icon: SiRedis,       c: '#dc382d' },
              { Icon: SiDocker,      c: '#2496ed' },
              { Icon: SiMongodb,     c: '#47a248' },
            ].map(({ Icon, c }, i) => (
              <div className="hts-item" key={i}>
                <Icon style={{ color: c }} />
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT — photo (desktop) ──────── */}
        <div className="home-right">
          <div className="photo-frame">
            <div className="pf-ring pf-ring--1" />
            <div className="pf-ring pf-ring--2" />

            <div className="pf-photo">
              <img
                src="hero-image.png"
                alt="Kuldeep Agrahari"
                className="pf-img"
                onError={e => (e.target.style.display = 'none')}
              />
              <div className="pf-fallback">KA</div>
            </div>

            {TECH_BADGES.map(({ Icon, label, color, pos }) => (
              <div className="pf-badge" key={label} style={{ ...pos, '--bc': color }}>
                <Icon style={{ color }} />
                <span>{label}</span>
              </div>
            ))}

            {/* Graduating date — neutral fact, not availability signal */}
            <div className="pf-status">
              <span className="avail-dot" /> Graduating Jun 2026 · IIITDMJ
            </div>
          </div>
        </div>
      </div>

      {/* Stats strip — "LeetCode Knight" metric over generic "DSA Problems" */}
      <div className="home-stats">
        {STATS.map(({ n, l }) => (
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