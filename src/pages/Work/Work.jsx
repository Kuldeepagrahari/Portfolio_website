import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiCube, HiBriefcase, HiExternalLink } from 'react-icons/hi';
import { IoLogoGithub } from 'react-icons/io5';
import { MdAdminPanelSettings } from 'react-icons/md';
import { FaHammer } from 'react-icons/fa';
import './work.css';
import './projectcards.css';

/* ─────────────── DATA ─────────────────── */

const experienceData = [
  {
    role: 'Software Engineer — Backend',
    org: 'IIITDMJ Fusion (Academic ERP)',
    orgLink: 'https://github.com/Kuldeepagrahari/Fusion-client',
    period: 'Aug 2024 – Dec 2024',
    type: 'Open Source · Academic ERP',
    points: [
      'Owned backend of the Examination & Result Processing module for a 22-module ERP used by 2500+ students and 80+ instructors.',
      'Designed and implemented 15+ REST APIs enabling instructor submissions, multi-level academic validation, and automated semester result publication.',
      'Enforced strict RBAC across Instructor, Dean, Academic Admin, and Student workflows to prevent inconsistent grade releases.',
      'Focused on data consistency, modular architecture, and maintainable API design for a multi-user system.',
    ],
    tags: ['Node.js', 'REST API', 'RBAC', 'PostgreSQL', 'Python', 'Django'],
  },
  {
    role: 'Software Engineer — Mobile & Backend Integration',
    org: 'AeroCare VTOL Drone System',
    orgLink: 'https://github.com/Kuldeepagrahari/AeroCare-Mobile-App',
    period: 'Aug 2024 – Apr 2025',
    type: 'EDP Project · Multidisciplinary Team',
    points: [
      'Developed a React Native mobile client to issue real-time commands (takeoff, landing, telemetry) to a VTOL drone via backend services.',
      'Integrated mobile app with an Express.js backend for sub-second command and telemetry exchange.',
      'Implemented robust request validation and retry logic to handle intermittent connectivity between client and flight controller.',
      'Collaborated with hardware and control teams to align API contracts and ensure safe command execution paths.',
    ],
    tags: ['React Native', 'Expo', 'Express.js', 'Raspberry Pi', 'Python', 'OpenCV', 'Google Maps API'],
  },
];

const projectsData = [
  {
    topic: 'Hungry Hub — Food Ordering Platform',
    img: 'food-del-ss.png',
    description: [
      'Full Stack food ordering platform with user auth, role-based admin dashboards, and Stripe-based order lifecycle management.',
      'REST APIs with pagination, validation, and a rule-driven AI recommendation service for menu items.',
    ],
    githubRepo: 'https://github.com/Kuldeepagrahari/Hungry-Hub',
    projectLink: 'https://hungry-hub-client.onrender.com/',
    adminLink: 'https://hungry-hub-admin-5v2a.onrender.com/',
  },
  {
    topic: 'Real-Time Network Traffic Monitor',
    img: 'cyber.png',
    description: [
      'Full-stack packet monitoring system processing 1000+ packets/min via a decoupled Scapy/Suricata → Kafka → Django → PostgreSQL pipeline.',
      'WebSockets push low-latency aggregated metrics to a React dashboard; Redis caching reduces DB load during bursts.',
    ],
    githubRepo: 'https://github.com/Kuldeepagrahari',
    projectLink: '',
  },
  {
    topic: 'Promptly — AI Chatbot',
    img: 'Promptly.png',
    description: [
      'Full Stack ChatGPT clone with text/image inputs and MongoDB-backed conversation history.',
      'Gemini API, Clerk Authentication, Imagekit for media handling.',
    ],
    githubRepo: 'https://github.com/Kuldeepagrahari/Promptly',
    projectLink: 'https://promptly-pk2h.onrender.com/',
  },
  {
    topic: 'AeroCare — VTOL Drone App',
    img: 'aerocare.jpg',
    description: [
      'React Native app with real-time drone telemetry and command dispatch via Express.js backend.',
      'Raspberry Pi automation using Python + OpenCV for precision landing.',
    ],
    githubRepo: 'https://github.com/Kuldeepagrahari/AeroCare-Mobile-App',
    projectLink: 'https://aerocare-vtol.vercel.app/',
  },
  {
    topic: 'Samify — Music Streaming',
    img: 'samify-ss.png',
    description: [
      'MERN Stack music platform: albums, playlists, search/filter, auth.',
      'Trie data structure for efficient search; admin panel + Cloudinary for assets.',
    ],
    githubRepo: 'https://github.com/Kuldeepagrahari/Samify',
    projectLink: '',
    ongoing: 1,
  },
  {
    topic: 'NewsHub',
    img: 'news.png',
    description: ['News aggregator with intelligent search functionality.'],
    githubRepo: 'https://github.com/Kuldeepagrahari/News-Hub',
    projectLink: 'https://news-hub-application.onrender.com/',
  },
  {
    topic: 'WeatherBook',
    img: 'weather.png',
    description: [
      'Weather app showing temperature, wind speed, humidity and cloud data.',
      'Powered by OpenWeatherMap API.',
    ],
    githubRepo: 'https://github.com/Kuldeepagrahari/WeatherBook',
    projectLink: 'https://weather-book-beta.vercel.app/',
  },
  {
    topic: 'Sudoku Solver',
    img: 'sudokusolver.png',
    description: [
      'Responsive Sudoku solver with animated backtracking algorithm — built in vanilla HTML/CSS/JS.',
    ],
    githubRepo: 'https://github.com/Kuldeepagrahari/SudokuSolver',
    projectLink: 'https://sudoku-solver-seven-eosin.vercel.app/',
  },
];

/* ─────────────── COMPONENTS ───────────── */

const ProjectCard = ({ topic, img, githubRepo, projectLink, adminLink, description, ongoing }) => (
  <div className="pcard">
    <div className="pcard-img-wrap">
      <img src={img} alt={topic} />
      {ongoing ? (
        <div className="pcard-ongoing-badge"><FaHammer style={{ fontSize: '0.6rem' }} /> In Progress</div>
      ) : null}
    </div>
    <div className="pcard-body">
      <div className="pcard-topic">{topic}</div>
      <ul className="pcard-desc">
        {description.map((p, i) => <li key={i}>{p}</li>)}
      </ul>
      <div className="pcard-links">
        {githubRepo && (
          <Link to={githubRepo} target="_blank" rel="noopener noreferrer" className="pcard-link github">
            <IoLogoGithub /> GitHub
          </Link>
        )}
        {projectLink && (
          <Link to={projectLink} target="_blank" rel="noopener noreferrer" className="pcard-link live">
            <HiExternalLink /> Live
          </Link>
        )}
        {adminLink && (
          <Link to={adminLink} target="_blank" rel="noopener noreferrer" className="pcard-link admin">
            <MdAdminPanelSettings /> Admin
          </Link>
        )}
      </div>
    </div>
  </div>
);

const ExperienceCard = ({ role, org, orgLink, period, type, points, tags }) => (
  <div className="exp-card">
    <div className="exp-meta">
      <span className="exp-period">{period}</span>
      <span className="exp-type-tag">{type}</span>
      <div className="exp-org">
        <span className="exp-org-name">{org}</span>
        <a href={orgLink} target="_blank" rel="noopener noreferrer" className="exp-org-link">
          <IoLogoGithub /> View on GitHub
        </a>
      </div>
    </div>
    <div className="exp-body">
      <div className="exp-role">{role}</div>
      <ul className="exp-points">
        {points.map((p, i) => <li key={i}>{p}</li>)}
      </ul>
      <div className="exp-tags">
        {tags.map(t => <span className="exp-tag" key={t}>{t}</span>)}
      </div>
    </div>
  </div>
);

/* ─────────────── PAGE ──────────────────── */

const Work = () => {
  const [activeTab, setActiveTab] = useState('projects');

  return (
    <div className="work">
      <div className="orb orb-cyan"   style={{ width: 350, height: 350, top: '-80px', right: '5%', position: 'absolute' }} />
      <div className="orb orb-orange" style={{ width: 280, height: 280, bottom: '80px', left: '280px', position: 'absolute' }} />

      <div className="work-inner">
        {/* Header */}
        <div className="work-header">
          <div>
            <div className="section-chip">Portfolio</div>
            <h2 className="work-title">
              <span className="line1">Projects &</span>
              <span className="line2">Experience</span>
            </h2>
          </div>
        </div>

        {/* Tab bar */}
        <div className="work-tabs">
          <button
            className={`work-tab ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            <HiCube /> Projects
            <span className="work-tab-count">{projectsData.length}</span>
          </button>
          <button
            className={`work-tab ${activeTab === 'experience' ? 'active' : ''}`}
            onClick={() => setActiveTab('experience')}
          >
            <HiBriefcase /> Experience
            <span className="work-tab-count">{experienceData.length}</span>
          </button>
        </div>

        {/* Panels */}
        {activeTab === 'projects' && (
          <div className="tab-panel projects-grid" key="projects">
            {projectsData.map((p, i) => (
              <ProjectCard key={i} {...p} />
            ))}
          </div>
        )}

        {activeTab === 'experience' && (
          <div className="tab-panel exp-list" key="experience">
            {experienceData.map((e, i) => (
              <ExperienceCard key={i} {...e} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Work;