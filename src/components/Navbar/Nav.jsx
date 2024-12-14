import React from 'react'
import "./nav.css"
import {Link,  Element, animateScroll as scroll} from "react-scroll"
const Nav = () => {
  return (
    <div className='nav'>
      {/* <h1>Kuldeep.</h1> */}
      <img src="logo2.png" alt="" />
      <ul>
        <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
        <li><Link to="about" smooth={true} duration={500}>About</Link></li>
        <li><Link to="exp" smooth={true} duration={500}>Experience</Link></li>
        <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
        <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
      </ul>
     
    </div>
  )
}

export default Nav
