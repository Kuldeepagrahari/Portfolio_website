import React from 'react'
import "./home.css"
const Home = () => {
  return (
    <div name="home" className='home'>
      <div className="left">
      <h2 style={{color:"gold"}}> Full Stack Developer </h2>
      <h1 className='head'>Hi, I'm <span style={{color:"var(--theme-color)"}}>Kuldeep</span></h1>
      <h1>Agrahari from UP, India</h1>
      <button style={{border:"1px solid var(--theme-color)", backgroundColor:"transparent", color:"white", width:"150px", padding:"10px 10px", borderRadius:"10px", fontWeight:"bold",marginTop:"3vh", boxShadow:"1px 1px 30px var(--theme-color)"}}>Download my CV</button>
      </div>
      <div className="right">
       <img src="mypic.png" alt="pic" />
      </div>
    </div>
  )
}

export default Home
