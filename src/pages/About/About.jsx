// import React from 'react'
// import { Link } from 'react-router-dom';
// import "./about.css"

// import { FaWhatsapp } from "react-icons/fa6";
// import { TfiEmail } from "react-icons/tfi";
// import { FaRegAddressCard } from "react-icons/fa";
// const About = () => {

//   return (
//     <div className='about'>
//       {/* <video autoPlay loop muted>
//         <source src="background.mp4" type="video/mp4" />
//       </video> */}
//       <div className="right">
//         <img src="home-image.png" alt="pic" style={{ borderRadius: "50%", padding: "10px", backgroundColor: "white" }} />
//       </div>
//       <div className="left">
//         <h1>About me</h1>
//         <div className='about-content'>

//           <p>
//             <h2 style={{color:"white", fontWeight:"bold"}}>Consistently Creating with purpose, Growing with intent...</h2>
//             I enjoy building impactful projects from scratch, both independently and collaboratively within a team. Additionally, I have a strong passion for problem-solving and constantly seek opportunities to challenge and improve my skills.

//           </p>
//         </div>
//         <div className="personal-det">
//           <div className="det whatsapp"><FaWhatsapp />
//             <Link to="https://wa.me/8957298885?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services" 
//              className='whatsapp-link'>Click to have a chat with me...</Link>
//           </div>
//           <div className="det"><TfiEmail />kuldeepagrahari9103@gmail.com</div>
//           <div className="det"><FaRegAddressCard />Sarai Akil, Kaushambi, UP, India</div>
//         </div>

//       </div>

//     </div>
//   )
// }

// export default About
import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import { HiMail, HiCode, HiLightningBolt, HiGlobe } from "react-icons/hi";
import { MdSchool } from "react-icons/md";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      {/* Background orbs */}
      <div className="orb orb-purple" style={{ width: 400, height: 400, top: 0, right: '-100px' }} />
      <div className="orb orb-cyan" style={{ width: 300, height: 300, bottom: 0, left: '200px' }} />

      <div className="about-inner">
        {/* Left: visual */}
        <div className="about-visual">
          <div className="about-img-wrap">
            <img src="home-image.png" alt="Kuldeep Agrahari" />
          </div>

          <div className="about-facts">
            <div className="fact-card">
              <HiCode className="fact-icon" />
              <span className="fact-label">Role</span>
              <span className="fact-value">Full Stack Dev</span>
            </div>
            <div className="fact-card">
              <MdSchool className="fact-icon" />
              <span className="fact-label">Year</span>
              <span className="fact-value">Final Year</span>
            </div>
            <div className="fact-card">
              <HiGlobe className="fact-icon" />
              <span className="fact-label">Location</span>
              <span className="fact-value">Prayagraj, UP, India</span>
            </div>
            <div className="fact-card">
              <HiLightningBolt className="fact-icon" />
              <span className="fact-label">Status</span>
              <span className="fact-value">Open to Work</span>
            </div>
          </div>
        </div>

        {/* Right: content */}
        <div className="about-content">
          <div className="section-chip">About Me</div>

          <h2 className="about-heading">
            <span className="line1">Creating</span>
            <span className="line2">With Purpose</span>
          </h2>

          <p className="about-bio">
            I enjoy <strong>building impactful projects from scratch</strong>, both independently and
            collaboratively within a team. I have a strong passion for problem-solving and
            constantly seek opportunities to <strong>challenge and improve my skills</strong>.
            I believe great software is born at the intersection of clean code, sharp design,
            and a deep understanding of user needs.
          </p>

          <div className="about-links">
            <Link
              to="https://wa.me/8957298885?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services"
              target="_blank"
              className="about-link-item"
            >
              <FaWhatsapp className="link-icon" />
              Click to have a chat with me on WhatsApp
            </Link>
            <div className="about-link-item">
              <HiMail className="link-icon" />
              kuldeepagrahari9103@gmail.com
            </div>
            <div className="about-link-item">
              <FaMapMarkerAlt className="link-icon" />
              Prayagraj, Uttar Pradesh, India
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;