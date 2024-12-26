import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import "./home.css";
const Home = () => {
  return (
    <div name="home" className='home'>
       <video autoPlay loop muted >
        <source src="blackhole.webm" type="video/webm" />
       
      </video>
      <div className="left">
      <h2 style={{color:"gold", fontWeight:"bold"}}> <Typewriter
            words={['Full Stack Developer', 'Frontend Developer', 'MERN Developer']}
            loop={Infinity}
            cursor
            cursorStyle='_'
            typeSpeed={100}
            deleteSpeed={70}
            delaySpeed={1000}
            
            
          /> </h2>
      <h1 className='head'>Hi, I'm<br/> <span style={{color:"var(--theme-color)", fontWeight:"bolder"}}>Kuldeep Agrahari</span></h1>
      <h1> from UP, <span style={{color:"gold", fontWeight:"bold"}}>India</span></h1>
      <button>Resume</button>
      </div>
      <div className="right">
       <img src="home-image.png" alt="pic" />
      </div>
    </div>
  )
}

export default Home
