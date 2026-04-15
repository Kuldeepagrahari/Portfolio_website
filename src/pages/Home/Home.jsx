// import React, { useState, useEffect } from 'react';
// import { RiDownloadCloud2Line } from "react-icons/ri";
// import { Typewriter } from 'react-simple-typewriter';
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { FaBug, FaLightbulb, FaRocket, FaMedal, FaBookOpen, FaArrowUp } from "react-icons/fa";
// import "./home.css";

// const messages = [
//   { text: "Consistency is the key to mastery.", icon: <FaMedal size={50} /> },
//   { text: "Debugging is part of life.", icon: <FaBug size={50} /> },
//   { text: "Every challenge is an opportunity.", icon: <FaLightbulb size={50} /> },
//   { text: "Growth happens outside the comfort zone.", icon: <FaRocket size={50} /> },
//   { text: "Small wins lead to big success.", icon: <FaArrowUp size={50} /> },
//   { text: "Never stop learning.", icon: <FaBookOpen size={50} /> },
// ];

// const Home = () => {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % messages.length);
//     }, 2000); // 1 second visible + 1 second transition

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div name="home" className='home'>
//       <div className="left">
       
//         <h2 className='typewritter'>
//           <Typewriter
//             words={['Full Stack', 'Android', 'Software']}
//             loop={Infinity}
//             cursor
//             cursorStyle='#'
//             typeSpeed={100}
//             deleteSpeed={70}
//             delaySpeed={1000}
//           /><br/>
//            Developer
//         </h2>
//         <h2 style={{ color: "white" }}>Hi, I'm</h2>
//         <h1 className='head'>
//           <span style={{ fontWeight: "bolder" }}>Kuldeep Agrahari</span>
//         </h1>
//         <h1 className='college'>
//           2026 Passing Final-Year CSE Student<br />PDPM IIIT Jabalpur, India
//         </h1>
//         <Link to="https://drive.google.com/file/d/1kU14QelhblMZNnAsFZeEhax2v5hOOltf/view?usp=sharing">
//           <button style={{
//             position: "fixed",
//             zIndex: "1000",
//             top: "0vh",
//             right: "10%",
//             width: "75px",
//             height: "75px",
//           }}>
//             <RiDownloadCloud2Line style={{ fontSize: "25px" }} /> Resume
//           </button>
//         </Link>
//       </div>

//       <div className="right-home">
//         <div className="scroll-container">
//           <motion.div
//             key={index}
//             initial={{ y: "100%", opacity: 0 }}
//             animate={{ y: "0%", opacity: 1 }}
//             exit={{ y: "-100%", opacity: 0 }}
//             transition={{ duration: 0.8, ease: "easeInOut" }}
//             className="message"
//             style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}
//           >
//             <div style={{ marginBottom: "10px", color: "white" }}>
//               {messages[index].icon}
//             </div>
//             <span style={{ fontSize: "40px", color: "white" }}>
//               {messages[index].text}
//             </span>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter';
import { FaDownload } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import {
  SiNodedotjs, SiMongodb, SiPostgresql, SiDocker, SiExpress,
  SiDjango, SiRedis, SiApachekafka, SiCplusplus
} from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { FaJsSquare, FaPython } from "react-icons/fa";
import "./home.css";

const floatingBadges = [
  { Icon: SiNodedotjs,   label: 'Node.js',    color: '#68a063', style: { top: '10%',  left: '-18%' } },
  { Icon: RiReactjsLine, label: 'React',       color: '#61dafb', style: { top: '28%',  right: '-20%' } },
  { Icon: SiMongodb,     label: 'MongoDB',     color: '#47a248', style: { bottom:'30%',left: '-22%' } },
  { Icon: SiPostgresql,  label: 'PostgreSQL',  color: '#336791', style: { top: '60%',  right: '-18%' } },
  { Icon: SiCplusplus,    label: 'C++',      color: '#2496ed', style: { bottom:'10%',left: '-10%' } },
  { Icon: FaJsSquare,    label: 'JS',          color: '#f7df1e', style: { top: '5%',   right: '-8%'  } },
];

const Home = ({ onScrollTo }) => {
  return (
    <div className="home">
      <div className="home-grid-bg" />

      {/* Orbs */}
      <div className="home-orb home-orb--cyan" />
      <div className="home-orb home-orb--orange" />

      <div className="home-inner">
        {/* ── LEFT ─────────────────────────────── */}
        <div className="home-left">
          <div className="home-type-row">
            <span className="type-prefix">~/</span>
            <span className="type-text">
              <Typewriter
                words={['Full Stack Developer', 'Backend Engineer', 'Software Engineer']}
                loop={Infinity}
                cursor
                cursorStyle="_"
                typeSpeed={90}
                deleteSpeed={60}
                delaySpeed={1500}
              />
            </span>
          </div>

          <h1 className="home-name">
            <span className="name-first">Kuldeep</span>
            <span className="name-last">Agra<span className="name-accent">hari</span></span>
          </h1>

          <p className="home-tagline">
            Building impactful, scalable products — from database to deployment.
            Passionate about clean code and meaningful user experiences.
          </p>

          <div className="home-college">
            <span className="college-name">PDPM IIIT Jabalpur</span>
            <span className="college-year">B.Tech CSE · 2022–2026 · Madhya Pradesh, India</span>
          </div>

          <div className="home-cta-row">
            <Link
              to="https://drive.google.com/file/d/1kU14QelhblMZNnAsFZeEhax2v5hOOltf/view?usp=sharing"
              target="_blank"
              className="btn-primary"
            >
              <FaDownload /> Resume
            </Link>
            <button className="btn-outline" onClick={() => onScrollTo?.('projects')}>
              Projects <HiArrowRight />
            </button>
          </div>
        </div>

        {/* ── RIGHT — photo ────────────────────── */}
        <div className="home-right">
          <div className="photo-frame">
            {/* Decorative rings */}
            <div className="photo-ring photo-ring--1" />
            <div className="photo-ring photo-ring--2" />
            <div className="photo-ring photo-ring--3" />

            {/* Profile image */}
            <div className="photo-inner">
              {/* IMPORTANT: Rename your uploaded photo to "profile.png" in /public */}
              <img src="profile.png" alt="Kuldeep Agrahari" className="photo-img" />
              {/* Fallback initials if photo not found */}
              <div className="photo-fallback">KA</div>
            </div>

            {/* Floating tech badges */}
            {floatingBadges.map(({ Icon, label, color, style }) => (
              <div className="photo-badge" key={label} style={style}>
                <Icon style={{ color }} />
                <span>{label}</span>
              </div>
            ))}

            {/* Status dot */}
            <div className="photo-status">
              <span className="status-dot" />
              Open to Work
            </div>
          </div>
        </div>
      </div>

      {/* ── Stats strip ──────────────────────── */}
      <div className="home-stats">
        {[
          { num: '3+',    label: 'Years Coding' },
          { num: '7+',    label: 'Projects' },
          { num: '1200+', label: 'DSA Problems' },
          { num: '1400+', label: 'GitHub Contributions' },
        ].map(({ num, label }) => (
          <div className="stat-item" key={label}>
            <span className="stat-number">{num}</span>
            <span className="stat-label">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;