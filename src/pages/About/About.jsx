// export default About;
import React, { useEffect, useState, useRef } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import "./about.css";

const AVATAR_URL = "/github-bot-image.png";
const GITHUB_USER = "Kuldeepagrahari";

/* ── Real stats from screenshots ───────────────────────────── */
const STATS = [
  { label: 'Total Contributions', value: 1593, icon: '📊', accent: '#00f5d4' },
  { label: 'Commits (Last Year)',  value: 844,  icon: '💾', accent: '#2563EB' },
  { label: 'Public Repos',        value: 55,   icon: '📁', accent: '#a855f7' },
  { label: 'Total PRs',           value: 22,   icon: '🔀', accent: '#ff4e00' },
  { label: 'Total Stars',         value: 24,   icon: '⭐', accent: '#fbbf24' },
  { label: 'Longest Streak',      value: 23,   icon: '🔥', accent: '#f97316', suffix: 'd' },
];

const LANGUAGES = [
  { name: 'Python',     pct: 72.30, color: '#3776ab' },
  { name: 'Jupyter',   pct: 15.49, color: '#f37626' },
  { name: 'JavaScript',pct:  6.05, color: '#f7df1e' },
  { name: 'C++',       pct:  2.98, color: '#00599c' },
  { name: 'TypeScript',pct:  2.87, color: '#3178c6' },
  { name: 'Shell',     pct:  0.31, color: '#4eaa25' },
];

const CONTRIB_DATA = [
  {d:'30',v:0},{d:'1',v:4},{d:'2',v:14},{d:'3',v:7},{d:'4',v:6},{d:'5',v:7},
  {d:'6',v:1},{d:'7',v:7},{d:'8',v:5},{d:'9',v:0},{d:'10',v:14},{d:'11',v:3},
  {d:'12',v:3},{d:'13',v:1},{d:'14',v:0},{d:'15',v:3},{d:'16',v:2},{d:'17',v:3},
  {d:'18',v:3},{d:'19',v:2},{d:'20',v:2},{d:'21',v:2},{d:'22',v:0},{d:'23',v:1},
  {d:'24',v:1},{d:'25',v:5},{d:'26',v:4},{d:'27',v:5},{d:'28',v:0},{d:'29',v:10},{d:'30',v:7},
];

/* ── Updated cards with all new content ─────────────────────── */
const cards = [
  {
    accent: '#00f5d4',
    icon: '⚙️',
    label: 'Backend & Beyond',
    text: 'Building APIs, event-driven pipelines, and distributed systems — production-grade. Equally comfortable in backend, frontend, or full-stack — whatever the product demands.',
  },
  {
    accent: '#2563EB',
    icon: '🌍',
    label: 'Global Targets',
    text: 'Targeting product companies & funded startups paying well — India, US, Dubai, Japan, Europe. Domain-agnostic: SaaS, FinTech, Consumer Tech — where problems are hard and impact is real.',
  },
  {
    accent: '#a855f7',
    icon: '🕐',
    label: 'Any Time Zone',
    text: 'Highly adaptable — I work in any time zone, no friction. US/Dubai remote clients, Japan service-based companies, EU teams. Overlap hours? I\'ll make it work.',
  },
  {
    accent: '#ff4e00',
    icon: '🚀',
    label: 'Open to Everything',
    text: 'Full-time · Part-time · Freelance · Contract. Remote, on-site, or hybrid — your call. Graduating June 2026 · IIITDM Jabalpur. Let\'s build something worth using.',
  },
];

const roles = [
  { label: 'Backend Engineer', color: '#00f5d4' },
  { label: 'Full Stack Dev',   color: '#2563EB' },
  { label: 'Frontend Dev',     color: '#a855f7' },
  { label: 'Freelancer',       color: '#ff4e00' },
  { label: 'Remote Ready',     color: '#22d3ee' },
];

const links = [
  { label: 'WhatsApp', href: 'https://wa.me/8957298885',                               icon: '💬', accent: '#25d366' },
  { label: 'Email',    href: 'mailto:kuldeepagrahari9103@gmail.com',                    icon: '✉️', accent: '#00f5d4' },
  { label: 'GitHub',   href: 'https://github.com/Kuldeepagrahari',                     icon: '🐙', accent: '#f0f0f0' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kuldeep-agrahari-56b159260', icon: '💼', accent: '#0a66c2' },
  { label: 'LeetCode', href: 'https://leetcode.com/u/kuldeep144/',                     icon: '⚔️', accent: '#ffa116' },
];

const highlights = [
  '🕒 Cuts application time by 50% with smart auto-fill',
  '📬 Auto-generates personalised referral messages',
  '🔔 Smart expiry alerts — never miss a deadline',
  '🤖 AI-powered job matching & status tracking',
];

const projectStack = ['Node.js', 'Next.js', 'TypeScript', 'PostgreSQL', 'AI', 'REST API'];

/* ── Animated counter (IntersectionObserver) ────────────────── */
function Counter({ target, suffix = '', duration = 1500 }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      obs.disconnect();
      let start = null;
      const tick = ts => {
        if (!start) start = ts;
        const p = Math.min((ts - start) / duration, 1);
        setVal(Math.floor(p * target));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.25 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target, duration]);
  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>;
}

/* ── Stat tile ──────────────────────────────────────────────── */
function StatTile({ label, value, suffix = '', icon, accent }) {
  return (
    <div className="gh-stat-tile" style={{ '--tile-accent': accent }}>
      <span className="gh-stat-icon">{icon}</span>
      <div className="gh-stat-val"><Counter target={value} suffix={suffix} /></div>
      <div className="gh-stat-label">{label}</div>
      <div className="gh-stat-bar" />
    </div>
  );
}

/* ── Card item ──────────────────────────────────────────────── */
function CardItem({ accent, icon, label, text }) {
  return (
    <div className="abt-card" style={{ '--a': accent }}>
      <div className="abt-card-icon">{icon}</div>
      <div className="abt-card-label">{label}</div>
      <p className="abt-card-text">{text}</p>
    </div>
  );
}

/* ── Section label ──────────────────────────────────────────── */
function SectionLabel({ children }) {
  return <div className="abt-sec-label">{children}</div>;
}

/* ── Main component ─────────────────────────────────────────── */
export default function About() {
  const [visible, setVisible] = useState(false);
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => { const t = setTimeout(() => setVisible(true), 60); return () => clearTimeout(t); }, []);
  useEffect(() => {
    const iv = setInterval(() => setRoleIdx(i => (i + 1) % roles.length), 2000);
    return () => clearInterval(iv);
  }, []);

  return (
    <div className="about">
      <div className="abt-orb abt-orb--p" />
      <div className="abt-orb abt-orb--c" />

      <div className={`about-inner${visible ? ' about-inner--visible' : ''}`}>

        {/* ── HERO ─────────────────────────────────────────── */}
        <div className="abt-hero-row">
          <div className="abt-hero-left">
            <div className="section-chip">About Me</div>
            <h2 className="abt-heading">
              <span className="abth-s">Software</span>
              <span className="abth-o">Engineer</span>
            </h2>

            {/* Animated role pill */}
            <div className="abt-role-pill">
              <span className="abt-role-dot" />
              <span className="abt-role-text" style={{ color: roles[roleIdx].color }}>
                {roles[roleIdx].label}
              </span>
            </div>

            <p className="abt-sub">
              Final-year · B.Tech · CSE · Indian Institute of Information Technology, Design & Manufacturing Jabalpur (IIITDMJ) · Jabalpur, India · Graduating Jun 2026
            </p>

            <div className="abt-badge-row">
              {['Full-Time', 'Part-Time', 'Freelance', 'Remote', 'On-site', 'Hybrid'].map(b => (
                <span key={b} className="abt-badge">{b}</span>
              ))}
            </div>
          </div>

          {/* Avatar — clean, no border, no badge */}
          <div className="abt-hero-right">
            <img src={AVATAR_URL} alt="Kuldeep Agrahari" className="abt-avatar"
              onError={e => { e.target.style.display = 'none'; }} />
          </div>
        </div>

        {/* ── IDENTITY CARDS ───────────────────────────────── */}
        <div className="abt-cards">
          {cards.map(({ accent, icon, label, text }, i) => (
            <CardItem key={i} accent={accent} icon={icon} label={label} text={text} />
          ))}
        </div>

        {/* ── GITHUB STATS ─────────────────────────────────── */}
        <div className="abt-github-section">
          <SectionLabel>GitHub Activity</SectionLabel>

          {/* 6 animated stat tiles */}
          <div className="gh-tiles">
            {STATS.map(s => (
              <StatTile key={s.label} {...s} />
            ))}
          </div>

          {/* Contribution area chart */}
          <div className="gh-chart-box">
            <div className="gh-chart-header">
              <span className="gh-chart-title">Contribution Graph — Last 30 Days</span>
              <span className="gh-chart-sub">344 contributions in 2026 · 55 public repos</span>
            </div>
            <ResponsiveContainer width="100%" height={160}>
              <AreaChart data={CONTRIB_DATA} margin={{ top: 8, right: 12, left: -24, bottom: 0 }}>
                <defs>
                  <linearGradient id="cg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%"  stopColor="#2563EB" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#2563EB" stopOpacity={0.02} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" vertical={false} />
                <XAxis dataKey="d"
                  tick={{ fill: 'rgba(180,180,200,0.4)', fontSize: 10, fontFamily: "'JetBrains Mono',monospace" }}
                  axisLine={false} tickLine={false} interval={2} />
                <YAxis
                  tick={{ fill: 'rgba(180,180,200,0.4)', fontSize: 10, fontFamily: "'JetBrains Mono',monospace" }}
                  axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{ background: '#0f1729', border: '1px solid rgba(37,99,235,0.35)', borderRadius: '8px', fontFamily: "'JetBrains Mono',monospace", fontSize: '0.7rem' }}
                  labelStyle={{ color: '#a0b4d0' }}
                  itemStyle={{ color: '#2563EB' }}
                  formatter={v => [v, 'contributions']}
                  labelFormatter={l => `Day ${l}`}
                />
                <Area type="monotone" dataKey="v" stroke="#2563EB" strokeWidth={2}
                  fill="url(#cg)"
                  dot={{ r: 3, fill: '#fff', strokeWidth: 0 }}
                  activeDot={{ r: 5, fill: '#2563EB', strokeWidth: 0 }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Language bar */}
          <div className="gh-lang-box">
            <div className="gh-chart-header">
              <span className="gh-chart-title">Most Used Languages</span>
              <span className="gh-chart-sub">Across all public repos</span>
            </div>
            <div className="gh-lang-bar">
              {LANGUAGES.map(({ name, pct, color }) => (
                <div key={name} className="gh-lang-seg" title={`${name} ${pct}%`}
                  style={{ width: `${pct}%`, background: color }} />
              ))}
            </div>
            <div className="gh-lang-legend">
              {LANGUAGES.map(({ name, pct, color }) => (
                <div key={name} className="gh-lang-item">
                  <div className="gh-lang-dot" style={{ background: color }} />
                  <span className="gh-lang-name">{name}</span>
                  <span className="gh-lang-pct">{pct}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Streak + Grade side by side */}
          <div className="gh-streak-row">
            <div className="gh-streak-card gh-streak-card--orange">
              <div className="gh-streak-label">Current Streak</div>
              <div className="gh-streak-val" style={{ color: '#ffa116' }}>
                <Counter target={1} suffix=" day" />
              </div>
              <div className="gh-streak-note">May 29, 2026</div>
            </div>
            <div className="gh-streak-card gh-streak-card--cyan">
              <div className="gh-streak-label">Longest Streak</div>
              <div className="gh-streak-val" style={{ color: '#00f5d4' }}>
                <Counter target={23} suffix=" days" />
              </div>
              <div className="gh-streak-note">May 14 – Jun 5, 2025</div>
            </div>
            <div className="gh-grade-card">
              <div className="gh-grade-ring">
                <span className="gh-grade-letter">B-</span>
              </div>
              <div className="gh-grade-details">
                <div className="gh-grade-title">GitHub Grade</div>
                <div className="gh-grade-row"><span>Total PRs</span><strong>22</strong></div>
                <div className="gh-grade-row"><span>Total Issues</span><strong>2</strong></div>
                <div className="gh-grade-row"><span>Contributed to</span><strong>2</strong></div>
              </div>
            </div>
          </div>
        </div>

        {/* ── FEATURED PROJECT ─────────────────────────────── */}
        <div className="abt-project-section">
          <SectionLabel>Featured Project</SectionLabel>
          <div className="abt-project-card">
            <div className="apc-header">
              <div className="apc-title-row">
                <span className="apc-icon">🤖</span>
                <div>
                  <div className="apc-title">ApplyFlow — AI Job Tracker</div>
                  <div className="apc-meta">Personal · TypeScript · Full-Stack</div>
                </div>
              </div>
              <a href="https://github.com/Kuldeepagrahari" target="_blank" rel="noopener noreferrer"
                className="apc-gh-link">🐙 GitHub →</a>
            </div>
            <div className="apc-highlights">
              {highlights.map((h, i) => <div key={i} className="apc-highlight">{h}</div>)}
            </div>
            <div className="apc-stack">
              {projectStack.map(t => <span key={t} className="aac-tag">{t}</span>)}
            </div>
          </div>
        </div>

        {/* ── CONNECT ──────────────────────────────────────── */}
        <div className="abt-connect">
          <SectionLabel>Let's connect</SectionLabel>
          <div className="abt-links">
            {links.map(({ label, href, icon, accent }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                className="abl" style={{ '--link-accent': accent }}>
                <span>{icon}</span> {label}
              </a>
            ))}
          </div>
        </div>

        {/* ── GLOBAL STRIP ─────────────────────────────────── */}
        <div className="abt-strip">
          {[
              '🇮🇳 Top Indian Product Companies',
              '💰 High-Growth Tech Teams',
              '🏢 Product Engineering Roles',
              '🚀 Funded Startups',
              '🇺🇸 US Remote',
              '🇦🇪 Dubai Clients',
              '🇯🇵 Japan Services',
              '🌐 Global Opportunities',
              '💼 Freelance Projects'
            ].map((item, i, arr) => (
            <React.Fragment key={i}>
              <span className="abt-strip-item">{item}</span>
              {i < arr.length - 1 && <span className="abt-strip-dot">·</span>}
            </React.Fragment>
          ))}
        </div>

      </div>
    </div>
  );
}