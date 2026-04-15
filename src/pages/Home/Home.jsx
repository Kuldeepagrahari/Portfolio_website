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
import {
  FaBug, FaLightbulb, FaRocket, FaMedal, FaBookOpen, FaArrowUp, FaDownload
} from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import "./home.css";

const messages = [
  { text: "Never Stop Learning.", icon: <FaBookOpen /> },
  { text: "Consistency is Mastery.", icon: <FaMedal /> },
  { text: "Debug. Ship. Repeat.", icon: <FaBug /> },
  { text: "Challenge Your Limits.", icon: <FaLightbulb /> },
  { text: "Small Wins. Big Impact.", icon: <FaArrowUp /> },
  { text: "Build with Purpose.", icon: <FaRocket /> },
];

const Home = ({ onScrollTo }) => {
  const [msgIndex, setMsgIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setMsgIndex(prev => (prev + 1) % messages.length);
    }, 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="home">
      {/* Background orbs */}
      <div className="orb orb-cyan"   style={{ width: 500, height: 500, top: '-100px', left: '200px', position: 'absolute' }} />
      <div className="orb orb-orange" style={{ width: 350, height: 350, bottom: '50px', right: '200px', position: 'absolute' }} />

      {/* Hero content */}
      <div className="home-inner">
        {/* Left */}
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
            <span className="first">Kuldeep</span>
            <span className="last">Agra<span className="accent">hari</span></span>
          </h1>

          <p className="home-tagline">
            Building impactful, scalable web products — from database to deployment.
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
            <button
              className="btn-outline"
              onClick={() => onScrollTo && onScrollTo('projects')}
            >
              Projects <HiArrowRight />
            </button>
          </div>
        </div>

        {/* Right - Animated message card (desktop only) */}
        <div className="home-right">
          <div className="home-message-card">
            <div style={{ width: 200, height: 200, top: '-60px', right: '-60px', position: 'absolute',
              background: 'radial-gradient(circle, rgba(0,245,212,0.15) 0%, transparent 70%)',
              filter: 'blur(40px)', borderRadius: '50%', pointerEvents: 'none' }} />
            <AnimatePresence mode="wait">
              <motion.div
                key={msgIndex}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', position: 'relative', zIndex: 1 }}
              >
                <div className="home-message-icon">{messages[msgIndex].icon}</div>
                <div className="home-message-text">{messages[msgIndex].text}</div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Stats strip — in document flow below hero */}
      <div className="home-stats">
        <div className="stat-item">
          <span className="stat-number">3+</span>
          <span className="stat-label">Years Coding</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">7+</span>
          <span className="stat-label">Projects</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">1200+</span>
          <span className="stat-label">DSA Problems</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">1400+</span>
          <span className="stat-label">GitHub Contributions</span>
        </div>
      </div>
    </div>
  );
};

export default Home;