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
    <img src="mypic.png" alt="pic" />
    </div>
      <div className="left">
       <h1>About Me</h1>
      <div className='about-content'>
       
        <p>
      I'm <span>Kuldeep Agrahari</span>, a pre-final year undergraduate student in Computer Science and Engineering at <span>
      IIIT Jabalpur, </span>

With a strong passion for <span> software Development</span>, I'm dedicated to continuous learning and innovation, staying updated with emerging technologies daily. </p>
      </div>
      <div className="personal-det">
        <div className="det"><FaWhatsapp/>8957298885</div>
        <div className="det"><TfiEmail/>kuldeepagrahari9103@gmail.com</div>
        <div className="det"><FaRegAddressCard/>Sarai Akil, Kaushambi, UP, India</div>
      </div>
      
      </div>
   
    </div>
  )
}

export default About
