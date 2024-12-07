import React from 'react'
import "./index.css"
import Home from "./pages/Home/Home.jsx"
import About from "./pages/About/About.jsx"
import Experience from "./pages/Experience/Experience.jsx"
import Projects from "./pages/Projects/Projects.jsx"
import Contact from "./pages/Contact/Contact.jsx"
import Nav from './components/Navbar/Nav.jsx'
const App = () => {
  return (
    <div className='app'>
      <Nav></Nav>
      <Home></Home>
      <About></About>
      <Experience></Experience>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  )
}

export default App
