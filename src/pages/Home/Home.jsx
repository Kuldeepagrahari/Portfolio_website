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
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter';
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiArrowRight, HiCode } from "react-icons/hi";
import {
  SiNodedotjs, SiMongodb, SiPostgresql, SiDocker,
  SiApachekafka, SiRedis, SiPython
} from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { FaJsSquare } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import "./home.css";

/* ── Tech badges around the photo ──────── */
const badges = [
  { Icon: SiNodedotjs,   label: 'Node.js',    color: '#68a063', pos: { top: '8%',   left: '-22%'  } },
  { Icon: RiReactjsLine, label: 'React',       color: '#61dafb', pos: { top: '24%',  right: '-22%' } },
  { Icon: SiMongodb,     label: 'MongoDB',     color: '#47a248', pos: { bottom:'32%',left: '-24%'  } },
  { Icon: SiPostgresql,  label: 'PostgreSQL',  color: '#336791', pos: { top: '58%',  right: '-20%' } },
  { Icon: SiDocker,      label: 'Docker',      color: '#2496ed', pos: { bottom:'10%',left: '-12%'  } },
  { Icon: FaJsSquare,    label: 'JS',          color: '#f7df1e', pos: { top: '4%',   right: '-10%' } },
];

/* ── Rotating focus tags ───────────────── */
const focuses = [
  { text: 'Backend Engineering',   color: '#00f5d4' },
  { text: 'API Design',            color: '#ff4e00' },
  { text: 'System Design',         color: '#7b5ea7' },
  { text: 'Distributed Systems',   color: '#ffa116' },
  { text: 'Problem Solving',       color: '#4a9eff' },
];

const Home = ({ onScrollTo }) => {
  const [focusIdx, setFocusIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setFocusIdx(i => (i + 1) % focuses.length), 2400);
    return () => clearInterval(t);
  }, []);

  const cur = focuses[focusIdx];

  return (
    <div className="home">
      <div className="home-grid" />
      <div className="home-orb home-orb--c" />
      <div className="home-orb home-orb--o" />

      <div className="home-inner">

        {/* ── LEFT ─────────────────────────── */}
        <div className="home-left">

          {/* Role line */}
          <div className="home-role-row">
            <span className="role-prefix">~/</span>
            <span className="role-txt">
              <Typewriter
                words={['Backend Engineer', 'Software Engineer', 'Full Stack Developer']}
                loop={Infinity} cursor cursorStyle="_"
                typeSpeed={80} deleteSpeed={55} delaySpeed={1800}
              />
            </span>
          </div>

          {/* Name */}
          <h1 className="home-name">
            <span className="hn-solid">Kuldeep</span>
            <span className="hn-outline">Agra<span className="hn-accent">hari</span></span>
          </h1>

          {/* Mobile-only: compact photo */}
          <div className="home-photo-mobile">
            <div className="hpm-ring" />
            <img src="profile.png" alt="Kuldeep" className="hpm-img"
              onError={e => e.target.style.display='none'} />
            <div className="hpm-avail">
              <span className="avail-dot" /> Open to Work
            </div>
          </div>

          {/* Tagline */}
          <p className="home-tagline">
            Building scalable backend systems — REST APIs, distributed pipelines,
            and real-time infrastructure. Final-year CSE student shipping
            production-grade software.
          </p>

          {/* Focus tag */}
          <div className="home-focus-row">
            <span className="focus-label">Currently focused on</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={focusIdx}
                className="focus-tag"
                style={{ color: cur.color, borderColor: cur.color + '44', background: cur.color + '14' }}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3 }}
              >
                {cur.text}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* College */}
          <div className="home-college">
            <span className="hc-name">PDPM IIIT Jabalpur</span>
            <span className="hc-year">B.Tech CSE · 2022–2026 · India</span>
          </div>

          {/* CTAs */}
          <div className="home-ctas">
            <Link
              to="https://drive.google.com/file/d/1kU14QelhblMZNnAsFZeEhax2v5hOOltf/view?usp=sharing"
              target="_blank" className="cta-primary"
            >
              <FaDownload /> Resume
            </Link>
            <button className="cta-outline" onClick={() => onScrollTo?.('projects')}>
              Work <HiArrowRight />
            </button>
            <a href="https://github.com/Kuldeepagrahari" target="_blank" rel="noopener noreferrer" className="cta-icon">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/kuldeep-agrahari-56b159260" target="_blank" rel="noopener noreferrer" className="cta-icon">
              <FaLinkedin />
            </a>
          </div>

          {/* Mobile tech strip */}
          <div className="home-tech-strip">
            {[
              { Icon: SiNodedotjs, c: '#68a063' },
              { Icon: FaJsSquare,  c: '#f7df1e' },
              { Icon: SiPostgresql,c: '#336791' },
              { Icon: SiMongodb,   c: '#47a248' },
              { Icon: SiDocker,    c: '#2496ed' },
              { Icon: SiApachekafka,c:'#231f20' },
              { Icon: SiRedis,     c: '#dc382d' },
              { Icon: SiCplusplus, c: '#00599c' },
              { Icon: SiPython,    c: '#3776ab' },
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
            {/* Rings */}
            <div className="pf-ring pf-ring--1" />
            <div className="pf-ring pf-ring--2" />

            {/* Photo */}
            <div className="pf-photo">
              <img src="profile.png" alt="Kuldeep Agrahari" className="pf-img"
                onError={e => e.target.style.display='none'} />
              <div className="pf-fallback">KA</div>
            </div>

            {/* Badges */}
            {badges.map(({ Icon, label, color, pos }) => (
              <div className="pf-badge" key={label} style={{ ...pos, '--bc': color }}>
                <Icon style={{ color }} />
                <span>{label}</span>
              </div>
            ))}

            {/* Status */}
            <div className="pf-status">
              <span className="avail-dot" /> Open to Work · Jun 2026
            </div>
          </div>
        </div>

      </div>

      {/* ── Stats ────────────────────────── */}
      <div className="home-stats">
        {[
          { n: '3+',    l: 'Years Coding'         },
          { n: '7+',    l: 'Projects Shipped'      },
          { n: '1200+', l: 'DSA Problems'          },
          { n: '1400+', l: 'GitHub Contributions'  },
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