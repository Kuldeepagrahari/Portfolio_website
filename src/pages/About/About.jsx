import React from 'react'
import { Link } from 'react-router-dom';
import "./about.css"

import { FaWhatsapp } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { FaRegAddressCard } from "react-icons/fa";
const About = () => {

  return (
    <div className='about'>
      {/* <video autoPlay loop muted>
        <source src="background.mp4" type="video/mp4" />
      </video> */}
      <div className="right">
        <img src="home-image.png" alt="pic" style={{ borderRadius: "50%", padding: "10px", backgroundColor: "white" }} />
      </div>
      <div className="left">
        <h1>About me</h1>
        <div className='about-content'>

          <p>
            <h2 style={{color:"white", fontWeight:"bold"}}>Consistently Creating with purpose, Growing with intent...</h2>
            I enjoy building impactful projects from scratch, both independently and collaboratively within a team. Additionally, I have a strong passion for problem-solving and constantly seek opportunities to challenge and improve my skills.

          </p>
        </div>
        <div className="personal-det">
          <div className="det whatsapp"><FaWhatsapp />
            <Link to="https://wa.me/8957298885?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services" 
             className='whatsapp-link'>Click to have a chat with me...</Link>
          </div>
          <div className="det"><TfiEmail />kuldeepagrahari9103@gmail.com</div>
          <div className="det"><FaRegAddressCard />Sarai Akil, Kaushambi, UP, India</div>
        </div>

      </div>

    </div>
  )
}

export default About
