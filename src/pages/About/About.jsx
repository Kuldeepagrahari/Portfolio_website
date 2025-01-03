import React from 'react'

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
            I enjoy building impactful projects from scratch, both independently and collaboratively within a team. Additionally, I have a strong passion for problem-solving and constantly seek opportunities to challenge and improve my skills.

          </p>
        </div>
        <div className="personal-det">
          <div className="det"><FaWhatsapp />8957298885</div>
          <div className="det"><TfiEmail />kuldeepagrahari9103@gmail.com</div>
          <div className="det"><FaRegAddressCard />Sarai Akil, Kaushambi, UP, India</div>
        </div>

      </div>

    </div>
  )
}

export default About
