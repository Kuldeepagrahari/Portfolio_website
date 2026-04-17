import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail, HiExternalLink } from "react-icons/hi";
import { SiNodedotjs, SiApachekafka, SiPostgresql } from "react-icons/si";
import { MdOutlineStorage, MdOutlineDevices, MdOutlineCode } from "react-icons/md";
import { HiChip } from "react-icons/hi";
import "./about.css";

/* Engineering impact — honest fresher numbers */
const metrics = [
  { val: '7+',    desc: 'Projects Built',        note: 'Backend & system-focused' },
  { val: '3+', desc: 'Years',    note: 'of Consistet Coding Journey...' },
  { val: '1200+',  desc: 'DSA Problems',          note: 'LeetCode focused' },
  { val: '1400+', desc: 'GitHub Commits',        note: 'Consistent since 2022' },
];
/* What I actually build — evidence-based */
const builds = [
  {
    Icon: MdOutlineStorage,
    accent: '#00f5d4',
    title: 'Backend & API Engineering',
    desc: 'Worked on designing 15+ REST APIs with RBAC, JWT authentication, and structured error handling. Familiar with modular architecture and API testing using Postman.',
  },
  {
    Icon: HiChip,
    accent: '#ff4e00',
    title: 'Distributed System Exposure',
    desc: 'Built a Kafka-based data pipeline with Django and PostgreSQL to process network traffic data (~1000 packets/min), along with a WebSocket-based real-time dashboard and Redis caching.',
  },
  {
    Icon: MdOutlineDevices,
    accent: '#7b5ea7',
    title: 'Full Stack Exposure',
    desc: 'Worked on full-stack applications with React and backend services. Also explored integration with hardware systems using Node.js and Python.',
  },
];

/* System design architecture highlights */
const architectures = [
  {
    project: 'Network Traffic Monitor',
    stack: ['Scapy', 'Kafka', 'Django', 'PostgreSQL', 'Redis', 'WebSockets', 'React'],
    note: 'Streaming ingestion pipeline · async processing · real-time push',
    icon: SiApachekafka, iconColor: '#231f20',
  },
  {
    project: 'Fusion ERP — Exam Module',
    stack: ['Node.js', 'REST API', 'RBAC', 'PostgreSQL'],
    note: '15+ APIs · 4-role access control · 2500+ users',
    icon: SiPostgresql, iconColor: '#336791',
  },
  {
    project: 'Hungry Hub — Food Platform',
    stack: ['Node.js', 'Express', 'MongoDB', 'Stripe', 'Generative AI'],
    note: 'Microservice-like admin separation · AI recommendation service',
    icon: SiNodedotjs, iconColor: '#68a063',
  },
];

const About = () => (
  <div className="about">
    <div className="abt-orb abt-orb--p" />
    <div className="abt-orb abt-orb--c" />

    <div className="about-inner">

      {/* ── Hero split ───────────────────── */}
      <div className="abt-hero">
        <div className="abt-hero-left">
          <div className="section-chip">About Me</div>

          <h2 className="abt-heading">
            <span className="abth-s">Backend</span>
            {/* <span className="abth-o">Engineer</span> */}
            <span className="abth-o">Developer</span>
          </h2>

          <p className="abt-bio">
            Final-year CSE student at IIITDM Jabalpur with hands-on experience building
            backend systems and APIs. I have worked on projects involving real users,
            data processing, and multi-user workflows.

            I focus on writing clean, maintainable code, designing clear API contracts,
            and understanding how systems behave under real-world constraints.
          </p>

          {/* Quick links */}
          <div className="abt-links">
            <Link to="https://wa.me/8957298885" target="_blank" className="abl green">
              <FaWhatsapp /> WhatsApp
            </Link>
            <a href="mailto:kuldeepagrahari9103@gmail.com" className="abl">
              <HiMail /> Email
            </a>
            <a href="https://github.com/Kuldeepagrahari" target="_blank" rel="noopener noreferrer" className="abl">
              <FaGithub /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/kuldeep-agrahari-56b159260" target="_blank" rel="noopener noreferrer" className="abl">
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </div>

        {/* Right — photo */}
        <div className="abt-hero-right">
          <div className="abt-photo-wrap">
            <div className="apw-tl" /><div className="apw-br" />
            <img src="profile.png" alt="Kuldeep Agrahari" className="abt-photo"
              onError={e => e.target.style.display='none'} />
            <div className="apw-badge">
              <SiNodedotjs style={{ color: '#68a063', fontSize: '1.1rem' }} />
              <div>
                {/* <div className="apwb-t">Backend Engineer</div>
                <div className="apwb-s">Open to Roles · Jun 2026</div> */}
                <div className="apwb-t">Backend Developer</div>
                <div className="apwb-s">Open to Opportunities · June 2026</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Engineering metrics ──────────── */}
      <div className="abt-metrics">
        {metrics.map(({ val, desc, note }) => (
          <div className="abt-metric" key={desc}>
            <span className="am-val">{val}</span>
            <span className="am-desc">{desc}</span>
            <span className="am-note">{note}</span>
          </div>
        ))}
      </div>

      {/* ── What I Build ─────────────────── */}
      <div className="abt-build-section">
        <div className="abt-sec-label">Engineering Focus</div>
        <div className="abt-build-grid">
          {builds.map(({ Icon, accent, title, desc }) => (
            <div className="abt-build-card" key={title} style={{ '--a': accent }}>
              <div className="abc-icon"><Icon /></div>
              <h3 className="abc-title">{title}</h3>
              <p className="abc-desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Architecture Highlights ──────── */}
      <div className="abt-arch-section">
        <div className="abt-sec-label">Architecture Highlights</div>
        <div className="abt-arch-list">
          {architectures.map(({ project, stack, note, icon: Icon, iconColor }) => (
            <div className="abt-arch-card" key={project}>
              <div className="aac-left">
                <Icon style={{ color: iconColor, fontSize: '1.5rem' }} />
                <div>
                  <div className="aac-project">{project}</div>
                  <div className="aac-note">{note}</div>
                </div>
              </div>
              <div className="aac-stack">
                {stack.map(t => <span className="aac-tag" key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  </div>
);

export default About;