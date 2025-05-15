import React, { useState, useEffect } from 'react';
import { RiDownloadCloud2Line } from "react-icons/ri";
import { Typewriter } from 'react-simple-typewriter';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBug, FaLightbulb, FaRocket, FaMedal, FaBookOpen, FaArrowUp } from "react-icons/fa";
import "./home.css";

const messages = [
  { text: "Consistency is the key to mastery.", icon: <FaMedal size={50} /> },
  { text: "Debugging is part of life.", icon: <FaBug size={50} /> },
  { text: "Every challenge is an opportunity.", icon: <FaLightbulb size={50} /> },
  { text: "Growth happens outside the comfort zone.", icon: <FaRocket size={50} /> },
  { text: "Small wins lead to big success.", icon: <FaArrowUp size={50} /> },
  { text: "Never stop learning.", icon: <FaBookOpen size={50} /> },
];

const Home = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 2000); // 1 second visible + 1 second transition

    return () => clearInterval(interval);
  }, []);

  return (
    <div name="home" className='home'>
      <div className="left">
        <h2 className='typewritter'>
          <Typewriter
            words={['Full Stack', 'React-Native', 'Software']}
            loop={Infinity}
            cursor
            cursorStyle='#'
            typeSpeed={100}
            deleteSpeed={70}
            delaySpeed={1000}
          /><br/>
           Developer
        </h2>
        <h2 style={{ color: "white" }}>Hi, I'm</h2>
        <h1 className='head'>
          <span style={{ fontWeight: "bolder" }}>Kuldeep Agrahari</span>
        </h1>
        <h1 className='college'>
          UG CSE'26 Student<br />PDPM IIIT Jabalpur, India
        </h1>
        <Link to="https://drive.google.com/file/d/19ULm8UGuRPJNhaKCT08reUeicqMW8Wzx/view?usp=sharing">
          <button style={{
            position: "fixed",
            zIndex: "1000",
            top: "0vh",
            right: "10%",
            width: "75px",
            height: "75px",
          }}>
            <RiDownloadCloud2Line style={{ fontSize: "25px" }} /> Resume
          </button>
        </Link>
      </div>

      <div className="right-home">
        <div className="scroll-container">
          <motion.div
            key={index}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="message"
            style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}
          >
            <div style={{ marginBottom: "10px", color: "white" }}>
              {messages[index].icon}
            </div>
            <span style={{ fontSize: "40px", color: "white" }}>
              {messages[index].text}
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
