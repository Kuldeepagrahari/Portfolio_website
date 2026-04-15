import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail, HiExternalLink, HiLightningBolt } from "react-icons/hi";
import { MdOutlineStorage, MdOutlineDevices, MdOutlineCode } from "react-icons/md";
import { SiNodedotjs } from "react-icons/si";
import "./about.css";

const whatIBuild = [
  {
    Icon: MdOutlineStorage,
    title: 'Backend Systems',
    desc: 'REST APIs, RBAC auth, Kafka pipelines, Redis caching — built for scale.',
    accent: '#00f5d4',
  },
  {
    Icon: MdOutlineDevices,
    title: 'Full Stack Products',
    desc: 'React dashboards to React Native apps, wired end-to-end with cloud infra.',
    accent: '#ff4e00',
  },
  {
    Icon: MdOutlineCode,
    title: 'Systems & Automation',
    desc: 'Real-time monitoring, CI/CD pipelines, hardware-software integration.',
    accent: '#7b5ea7',
  },
];

const quickStats = [
  { val: '1400+', desc: 'GitHub Commits' },
  { val: '1200+', desc: 'DSA Problems'   },
  { val: '2500+', desc: 'ERP Users'      },
  { val: '20+',   desc: 'Mentored'       },
];

const About = () => (
  <div className="about">
    <div className="about-orb about-orb--purple" />
    <div className="about-orb about-orb--cyan"   />

    <div className="about-inner">

      {/* ── HERO ──────────────────────────────── */}
      <div className="about-hero">

        {/* Left */}
        <div className="about-left">
          <div className="section-chip">About Me</div>

          <h2 className="about-heading">
            <span className="ah-solid">Creating</span>
            <span className="ah-outline">With Purpose</span>
          </h2>

          <p className="about-bio">
            Backend-focused engineer who ships full-stack products.
            I've built software serving <strong>2500+ users</strong>, designed real-time drone
            control systems, and contributed 1400+ commits on GitHub — all while solving
            1200+ DSA problems to stay sharp. I care about <strong>clean architecture,
            meaningful impact, and never stopping to learn</strong>.
          </p>

          {/* Quick stats inline */}
          <div className="about-stats">
            {quickStats.map(({ val, desc }) => (
              <div className="astat" key={desc}>
                <span className="astat-val">{val}</span>
                <span className="astat-desc">{desc}</span>
              </div>
            ))}
          </div>

          {/* Links */}
          <div className="about-links">
            <Link to="https://wa.me/8957298885" target="_blank" className="alink green">
              <FaWhatsapp /> WhatsApp
            </Link>
            <a href="mailto:kuldeepagrahari9103@gmail.com" className="alink">
              <HiMail /> Email
            </a>
            <a href="https://github.com/Kuldeepagrahari" target="_blank" rel="noopener noreferrer" className="alink">
              <FaGithub /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/kuldeep-agrahari-56b159260" target="_blank" rel="noopener noreferrer" className="alink">
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </div>

        {/* Right — photo */}
        <div className="about-right">
          <div className="about-photo-frame">
            <div className="apf-corner apf-tl" />
            <div className="apf-corner apf-br" />
            <img
              src="profile.png"
              alt="Kuldeep Agrahari"
              className="about-photo"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            {/* Floating badge */}
            <div className="apf-badge">
              <SiNodedotjs style={{ color: '#68a063', fontSize: '1.2rem' }} />
              <div>
                <div className="badge-t">Backend Engineer</div>
                <div className="badge-s">Open to Roles · June 2026</div>
              </div>
            </div>
            {/* Availability dot */}
            <div className="apf-avail">
              <span className="avail-dot" /> Available for hire
            </div>
          </div>
        </div>
      </div>

      {/* ── WHAT I BUILD ──────────────────────── */}
      <div className="about-build">
        <div className="build-label">
          <HiLightningBolt style={{ color: 'var(--cyan)' }} />
          What I Build
        </div>
        <div className="build-grid">
          {whatIBuild.map(({ Icon, title, desc, accent }) => (
            <div className="build-card" key={title} style={{ '--a': accent }}>
              <div className="bc-icon-wrap">
                <Icon className="bc-icon" />
              </div>
              <h3 className="bc-title">{title}</h3>
              <p className="bc-desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  </div>
);

export default About;