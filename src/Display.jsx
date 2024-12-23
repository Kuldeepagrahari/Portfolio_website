import React from "react";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Experience from "./pages/Experience/Experience.jsx";
import Projects from "./pages/Projects/Projects.jsx";
import Contact from "./pages/Contact/Contact.jsx";

const Display = () => {
  return (
    <div className="display">
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      {/* <div id="experience">
        <Experience />
      </div> */}
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Display;
