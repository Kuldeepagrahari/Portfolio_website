import React, { useRef } from "react";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Experience from "./pages/Experience/Experience.jsx";
import Projects from "./pages/Projects/Projects.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Skills from "./pages/Skills/Skills.jsx"
import Nav from "./components/Navbar/Nav.jsx";
import Footer from "./components/Footer/Footer.jsx";
const Display = () => {
  const homeref = useRef(null)
  const aboutref = useRef(null)
  const skillref = useRef(null)
  const projectref = useRef(null)
  const contactref = useRef(null)
  const followref = useRef(null)

  const scrollToSection = (sectionRef) => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="display">
      <Nav 
      onScrollTo={(section) => {
        if(section === 'home')scrollToSection(homeref)
        if(section === 'about')scrollToSection(aboutref)
        if(section === 'skills')scrollToSection(skillref)
        if(section === 'projects')scrollToSection(projectref)
        if(section === 'contact')scrollToSection(contactref)
        if(section === 'follow')scrollToSection(followref)
      } }/>
      <div id="home" ref={homeref}>
        <Home />
      </div>


      <div id="about" ref={aboutref}>
        <About />
      </div>

      <div id="skills" ref={skillref}>
        <Skills />
      </div>

      <div id="projects" ref={projectref}>
        <Projects />
      </div>
      {/* <video autoPlay loop muted>
        <source src={video} type="video/mp4" />
       
      </video> */}
      <div id="contact" ref={contactref}>
        <Contact />
      </div>
      <div className="footer" ref={followref}>
        <Footer />
      </div>

    </div>
  );
};

export default Display;
