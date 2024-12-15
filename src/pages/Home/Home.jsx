import React from 'react'
import "./home.css"
const Home = () => {
  return (
    <div name="home" className='home'>
      <div className="left">
      <h2 style={{color:"gold"}}> Full Stack Developer </h2>
      <h1 className='head'>Hi, I'm <span style={{color:"var(--theme-color)"}}>Kuldeep</span></h1>
      <h1>Agrahari from UP, India</h1>
      <button>Resume</button>
      </div>
      <div className="right">
       <img src="mypic.png" alt="pic" />
      </div>
    </div>
  )
}

export default Home
