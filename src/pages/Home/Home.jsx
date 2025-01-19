import React from 'react'
import { RiDownloadCloud2Line } from "react-icons/ri";
import { Typewriter } from 'react-simple-typewriter'
import {Link} from "react-router-dom"
import "./home.css";
const Home = () => {
  return (
    <div name="home" className='home'>
      
      <div className="left">
      <h2 style={{color:"gray", fontWeight:"bolder"}}> <Typewriter
            words={['Full Stack Developer', 'Frontend Developer', 'MERN Developer']}
            loop={Infinity}
            cursor
            cursorStyle='#'
            typeSpeed={100}
            deleteSpeed={70}
            delaySpeed={1000}
            
            
          /> </h2>
          <h2 style={{color:"white"}}>Hi, I'm</h2>
      <h1 className='head'> <span style={{ fontWeight:"bolder"}}>Kuldeep Agrahari</span></h1>
      <h1 className='college'>UG CSE'26 Student<br/>PDPM IIIT Jabalpur, India</h1>
      <Link to="https://drive.google.com/file/d/15obwthOHBH5KSQeLOjtyiYRJ0KW3l6ki/view?usp=sharing">  <button style={{position:"fixed", zIndex:"1000", top:"-3vh", right:"8vw",width:"90px", height:"90px"}}><RiDownloadCloud2Line style={{fontSize:"25px"}} /> Resume</button></Link>
    
      </div>
      <div className="right">
      <img src="myPicAlbum.png" alt="" />
      </div>
    </div>
  )
}

export default Home
