import React, { useState, useEffect, useCallback } from 'react';
import { HiX, HiClock, HiTag, HiCode } from 'react-icons/hi';
import { FaRocket, FaBrain, FaCode, FaTools, FaLightbulb, FaServer } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import learningMap from './learnings/index';   // adjust path to match your folder structure
import './thoughts.css';

const thoughts = [
  {
    id: 1,
    Icon: FaServer,
    tag: 'System Design',   tagColor: '#00f5d4',
    date: 'Apr 2025',       readTime: '5 min',
    title: 'What Happens When You Press Enter?',
    excerpt: 'DNS, TCP, TLS, CDN, Load Balancer, Reverse Proxy, App Server, DB — up to 11 layers between you and a response. Interactive breakdown with clickable steps.',
    hasContent: true,
  },
  {
    id: 2,
    Icon: FaBrain,
    tag: 'Backend',         tagColor: '#ff4e00',
    date: 'Mar 2025',       readTime: '4 min',
    title: 'Why I Choose Node.js for REST APIs',
    excerpt: 'Event-driven, non-blocking I/O vs thread-per-request. After building APIs in both Node.js and Django, here\'s an honest comparison with my own decision framework.',
    hasContent: true,
  },
  {
    id: 3,
    Icon: FaBrain,
    tag: 'DSA',             tagColor: '#ffa116',
    date: 'Feb 2025',       readTime: '3 min',
    title: '1200 Problems Taught Me: Pattern > Memorization',
    excerpt: 'Sliding window, two pointers, monotonic stack, union-find — recognising the pattern family of a problem is 80% of the solution. A structured approach to DSA that actually works.',
    hasContent: false,
  },
  {
    id: 4,
    Icon: FaTools,
    tag: 'DevOps',          tagColor: '#2bb600',
    date: 'Jan 2025',       readTime: '2 min',
    title: 'Docker: From "Works on My Machine" to Reproducibility',
    excerpt: 'Containerisation isn\'t just a deployment tool — it\'s a mindset shift. How thinking in containers changed the way I reason about dependencies and environments.',
    hasContent: false,
  },
  {
    id: 5,
    Icon: FaCode,
    tag: 'Architecture',    tagColor: '#7b5ea7',
    date: 'Dec 2024',       readTime: '5 min',
    title: 'RBAC That Actually Scales: Lessons from Fusion ERP',
    excerpt: 'After implementing 4-role access control for a 22-module ERP used by 2500+ users, I learned that permissions are rarely simple. The pattern I\'d use again.',
    hasContent: false,
  },
  {
    id: 6,
    Icon: FaRocket,
    tag: 'Distributed',     tagColor: '#ff6b6b',
    date: 'Nov 2024',       readTime: '4 min',
    title: 'Kafka: Moving from HTTP Polling to Event Streaming',
    excerpt: 'Processing 1000+ network packets/min. How I went from "why not just poll?" to understanding when event streaming genuinely solves a problem HTTP can\'t.',
    hasContent: false,
  },
];

/* ── Modal component ─────────────────────── */
const ThoughtModal = ({ thought, onClose }) => {
  const LearningComponent = learningMap[thought.id];

  // Close on ESC
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <motion.div
      className="tmodal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
      onClick={onClose}
    >
      <motion.div
        className="tmodal"
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.97 }}
        transition={{ duration: 0.28, ease: 'easeOut' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="tmodal-header" style={{ '--tc': thought.tagColor }}>
          <div className="tmodal-meta">
            <span className="tmodal-tag">
              <HiTag /> {thought.tag}
            </span>
            <span className="tmodal-time"><HiClock /> {thought.readTime} read</span>
            <span className="tmodal-date">{thought.date}</span>
          </div>
          <button className="tmodal-close" onClick={onClose} aria-label="Close">
            <HiX />
          </button>
        </div>

        <h2 className="tmodal-title">{thought.title}</h2>

        {/* Divider */}
        <div className="tmodal-divider" style={{ background: thought.tagColor }} />

        {/* Content */}
        <div className="tmodal-body">
          {LearningComponent ? (
            <LearningComponent />
          ) : (
            <div className="tmodal-coming-soon">
              <HiCode className="tcs-icon" />
              <div className="tcs-title">Draft in Progress</div>
              <p className="tcs-desc">
                This learning note is still being written. The excerpt above covers the core idea —
                the full interactive version is coming soon.
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

/* ── Main Thoughts component ─────────────── */
const Thoughts = () => {
  const [modalThought, setModalThought] = useState(null);

  const open  = useCallback((t) => setModalThought(t), []);
  const close = useCallback(() => setModalThought(null), []);

  const featured = thoughts[0];
  const rest = thoughts.slice(1);

  return (
    <div className="thoughts">
      <div className="tg-orb tg-orb--cyan"   />
      <div className="tg-orb tg-orb--orange" />

      <div className="thoughts-inner">

        {/* Header */}
        <div className="thoughts-header">
          <div>
            <div className="section-chip">Engineering Notes</div>
            <h2 className="thoughts-title">
              <span className="tt-solid">Dev</span>
              <span className="tt-outline">Notes</span>
            </h2>
          </div>
          <p className="thoughts-sub">
            Things I've built, broken, and understood —<br />
            honest notes from real projects.
          </p>
        </div>

        {/* Featured */}
        <div
          className="tg-featured"
          style={{ '--tc': featured.tagColor }}
          onClick={() => open(featured)}
        >
          <div className="tgf-inner">
            <div className="tgf-left">
              <div className="tgf-label"><featured.Icon /> Featured</div>
              <div className="tgf-meta">
                <span className="tg-tag" style={{ '--tc': featured.tagColor }}><HiTag /> {featured.tag}</span>
                <span className="tg-time"><HiClock /> {featured.readTime}</span>
                <span className="tg-date">{featured.date}</span>
              </div>
              <h3 className="tgf-title">{featured.title}</h3>
              <p className="tgf-excerpt">{featured.excerpt}</p>
              <button className="tg-readmore" style={{ '--tc': featured.tagColor }}>
                Open & Read →
              </button>
            </div>
            <div className="tgf-icon-wrap">
              <featured.Icon className="tgf-bg-icon" />
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="thoughts-grid">
          {rest.map((t) => (
            <div
              className="tg-card"
              key={t.id}
              style={{ '--tc': t.tagColor }}
              onClick={() => open(t)}
            >
              <div className="tgc-top">
                <div className="tgc-icon"><t.Icon /></div>
                <div className="tgc-meta">
                  <span className="tg-tag" style={{ '--tc': t.tagColor }}><HiTag /> {t.tag}</span>
                  {!t.hasContent && <span className="tgc-draft">Draft</span>}
                </div>
              </div>
              <h3 className="tgc-title">{t.title}</h3>
              <p className="tgc-excerpt">{t.excerpt}</p>
              <div className="tgc-footer">
                <span className="tg-time"><HiClock /> {t.readTime}</span>
                <button className="tgc-open">Open →</button>
              </div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="thoughts-quote">
          <span className="tq-mark">"</span>
          The best way to learn backend engineering is to build systems that break — then fix them.
          <span className="tq-attr">— Something I believe</span>
        </div>

      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalThought && (
          <ThoughtModal thought={modalThought} onClose={close} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Thoughts;