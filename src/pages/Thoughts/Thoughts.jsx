import { useState, useEffect, useCallback } from 'react';
import { HiX, HiClock, HiTag, HiCode } from 'react-icons/hi';
import { FaServer, FaBrain, FaCode, FaTools, FaBug, FaProjectDiagram } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import learningMap from './learnings/index';
import './thoughts.css';

/* ─────────────────────────────────────────────────────────────────
   THOUGHTS ARRAY
   Tone rules:
     - Sounds like a learner building things, not an expert explaining
     - No "at scale", "production-grade", "enterprise-level"
     - Grounded in actual project experience
     - Titles are observations or questions, not claims
   ───────────────────────────────────────────────────────────────── */
const thoughts = [
  {
    id: 1,
    Icon: FaServer,
    tag: 'System Design',
    tagColor: '#00f5d4',
    date: 'Apr 2026',
    readTime: '5 min',
    title: 'What Actually Happens After You Press Enter?',
    excerpt:
      "I traced a request end-to-end — DNS, TCP, TLS, reverse proxy, app server, database — while debugging a slow API. Eleven layers, each adding latency I hadn't thought about.",
    hasContent: true,
  },
  {
    id: 2,
    Icon: FaCode,
    tag: 'Backend',
    tagColor: '#ff4e00',
    date: 'Mar 2025',
    readTime: '4 min',
    title: 'Node.js vs Django: What I Noticed Building Both',
    excerpt:
      'I built REST APIs in both. Node\'s event loop handles concurrent I/O cheaply; Django felt more structured for data-heavy routes. Neither is universally better — depends on what you\'re building.',
    hasContent: true,
  },
  {
    id: 3,
    Icon: FaBrain,
    tag: 'DSA',
    tagColor: '#ffa116',
    date: 'yet to release...',
    readTime: 'NA',
    title: '1200+ Problems Later: Patterns Matter More Than Solutions',
    excerpt:
      'I stopped memorising solutions and started noticing problem families. Sliding window, monotonic stack, union-find — once you see the pattern, the solution almost writes itself.',
    hasContent: false,
  },
  {
    id: 4,
    Icon: FaProjectDiagram,
    tag: 'Architecture',
    tagColor: '#7b5ea7',
    date: 'yet to release...',
    readTime: 'NA',
    title: 'Designing Role-Based Access for Multiple User Types',
    excerpt:
      'While building the Fusion ERP exam module, I had to handle four different user roles with conflicting permissions. What looked like a simple if-else problem turned into a proper access-control design exercise.',
    hasContent: false,
  },
  {
    id: 5,
    Icon: FaBug,
    tag: 'Debugging',
    tagColor: '#ff6b6b',
    date: 'yet to release...',
    readTime: 'NA',
    title: 'The Bug That Taught Me to Read Network Logs',
    excerpt:
      'A drone command was reaching the backend but silently failing on the hardware side. Turns out I was serialising the payload incorrectly. Reading raw socket logs fixed what hours of console.log couldn\'t.',
    hasContent: false,
  },
  {
    id: 6,
    Icon: FaTools,
    tag: 'Infrastructure',
    tagColor: '#2bb600',
    date: 'yet to release...',
    readTime: 'NA',
    title: 'Why I Started Using Docker Even for Small Projects',
    excerpt:
      'After spending two hours debugging a "works on my machine" PostgreSQL config, I containerised the whole stack. Now I don\'t think about environment setup — I think about the problem.',
    hasContent: false,
  },
];

/* ─── Modal ──────────────────────────────── */
const ThoughtModal = ({ thought, onClose }) => {
  const LearningComponent = learningMap[thought.id];

  useEffect(() => {
    const esc = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', esc);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', esc);
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
        initial={{ opacity: 0, y: 36, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.26, ease: 'easeOut' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top accent line driven by tagColor */}
        <div className="tmodal-accent" style={{ background: thought.tagColor }} />

        {/* Header */}
        <div className="tmodal-header">
          <div className="tmodal-meta">
            <span
              className="tmodal-tag"
              style={{
                color: thought.tagColor,
                background: thought.tagColor + '18',
                borderColor: thought.tagColor + '40',
              }}
            >
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
        <p className="tmodal-excerpt">{thought.excerpt}</p>
        <div className="tmodal-divider" style={{ background: thought.tagColor + '55' }} />

        {/* Content area */}
        <div className="tmodal-body">
          {LearningComponent ? (
            <LearningComponent />
          ) : (
            <div className="tmodal-coming-soon">
              <HiCode className="tcs-icon" />
              <div className="tcs-title">Still Writing This One</div>
              <p className="tcs-desc">
                The excerpt above captures the main idea. The full interactive note is being
                written — check back soon.
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

/* ─── Main ───────────────────────────────── */
const Thoughts = () => {
  const [modal, setModal] = useState(null);
  const open  = useCallback((t) => setModal(t), []);
  const close = useCallback(() => setModal(null), []);

  const featured = thoughts[0];
  const rest     = thoughts.slice(1);

  return (
    <div className="thoughts">
      <div className="tg-orb tg-orb--cyan"   />
      <div className="tg-orb tg-orb--orange" />

      <div className="thoughts-inner">

        {/* ── Header ───────────────────────── */}
        <div className="thoughts-header">
          <div>
            <div className="section-chip">Engineering Notes</div>
            <h2 className="thoughts-title">
              <span className="tt-solid">Dev</span>
              <span className="tt-outline">Notes</span>
            </h2>
          </div>
          <p className="thoughts-sub">
            Things I built, broke, and figured out —<br />
            notes from actual projects, not textbooks.
          </p>
        </div>

        {/* ── Featured card ─────────────────── */}
        <div
          className="tg-featured"
          style={{ '--tc': featured.tagColor }}
          onClick={() => open(featured)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && open(featured)}
        >
          <div className="tgf-inner">
            <div className="tgf-left">
              <div className="tgf-label">
                <featured.Icon /> Featured Note
              </div>
              <div className="tgf-meta">
                <span
                  className="tg-tag"
                  style={{
                    color: featured.tagColor,
                    background: featured.tagColor + '18',
                    borderColor: featured.tagColor + '40',
                  }}
                >
                  <HiTag /> {featured.tag}
                </span>
                <span className="tg-time"><HiClock /> {featured.readTime}</span>
                <span className="tg-date">{featured.date}</span>
              </div>
              <h3 className="tgf-title">{featured.title}</h3>
              <p className="tgf-excerpt">{featured.excerpt}</p>
              <button
                className="tg-readmore"
                style={{
                  color: featured.tagColor,
                  background: featured.tagColor + '18',
                  borderColor: featured.tagColor + '44',
                }}
              >
                Read Note →
              </button>
            </div>
            <div className="tgf-icon-wrap" aria-hidden>
              <featured.Icon className="tgf-bg-icon" />
            </div>
          </div>
        </div>

        {/* ── Cards grid ───────────────────── */}
        <div className="thoughts-grid">
          {rest.map((t) => (
            <div
              key={t.id}
              className="tg-card"
              style={{ '--tc': t.tagColor }}
              onClick={() => open(t)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && open(t)}
            >
              <div className="tgc-top">
                <div className="tgc-icon"><t.Icon /></div>
                <div className="tgc-badges">
                  <span
                    className="tg-tag"
                    style={{
                      color: t.tagColor,
                      background: t.tagColor + '18',
                      borderColor: t.tagColor + '40',
                    }}
                  >
                    <HiTag /> {t.tag}
                  </span>
                  {!t.hasContent && (
                    <span className="tgc-draft">Draft</span>
                  )}
                </div>
              </div>

              <h3 className="tgc-title">{t.title}</h3>
              <p className="tgc-excerpt">{t.excerpt}</p>

              <div className="tgc-footer">
                <span className="tg-time"><HiClock /> {t.readTime}</span>
                <span className="tgc-open">Open →</span>
              </div>
            </div>
          ))}
        </div>

        {/* ── Quote ────────────────────────── */}
        <div className="thoughts-quote">
          <span className="tq-mark">"</span>
          The best debugging session is the one that forces you to understand
          something you assumed you already knew.
          <span className="tq-attr">— Something I believe after the drone project</span>
        </div>

      </div>

      {/* ── Modal ────────────────────────── */}
      <AnimatePresence>
        {modal && <ThoughtModal thought={modal} onClose={close} />}
      </AnimatePresence>
    </div>
  );
};

export default Thoughts;