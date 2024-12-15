import React from 'react'
import Home from "./pages/Home/Home.jsx"
import About from "./pages/About/About.jsx"
import Experience from "./pages/Experience/Experience.jsx"
import Projects from "./pages/Projects/Projects.jsx"
import Contact from "./pages/Contact/Contact.jsx"

const Display = () => {
  return (
    <div className='display'>
      <Home></Home>
      <About></About>
      {/* <Experience></Experience> */}
      <Projects></Projects>
      <Contact></Contact>
    </div>
  )
}

export default Display
