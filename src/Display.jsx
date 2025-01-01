import React from "react";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Experience from "./pages/Experience/Experience.jsx";
import Projects from "./pages/Projects/Projects.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Skills from "./pages/Skills/Skills.jsx"
import Nav from "./components/Navbar/Nav.jsx";
import Footer from "./components/Footer/Footer.jsx";
const Display = () => {
  return (
    <div className="display">
      <Nav />
      <div id="home">
        <Home />
      </div>


      <div id="about">
        <About />
      </div>

      <div id="skills">
        <Skills />
      </div>

      <div id="projects">
        <Projects />
      </div>
      {/* <video autoPlay loop muted>
        <source src={video} type="video/mp4" />
       
      </video> */}
      <div id="contact">
        <Contact />
      </div>
      <div className="footer">
        <Footer />
      </div>

    </div>
  );
};

export default Display;
