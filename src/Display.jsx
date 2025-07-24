import { useRef } from "react";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
// import Experience from "./pages/Experience/Experience.jsx";
import Projects from "./pages/Projects/Projects.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Skills from "./pages/Skills/Skills.jsx"
import Nav from "./components/Navbar/Nav.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Education from "./pages/Education/Education.jsx";
import Achievement from "./pages/Achievements/Achievements.jsx";
const Display = () => {
  const homeref = useRef(null)
  const aboutref = useRef(null)
  const educationref = useRef(null)
  const skillref = useRef(null)
  const projectref = useRef(null)
  const contactref = useRef(null)
  const followref = useRef(null)
  const achievementsref = useRef(null)

  const scrollToSection = (sectionRef) => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="display">
      <Nav 
      onScrollTo={(section) => {
        if(section === 'home')scrollToSection(homeref)
        if(section === 'about')scrollToSection(aboutref)
        if(section === 'education')scrollToSection(educationref)
        if(section === 'skills')scrollToSection(skillref)
        if(section === 'projects')scrollToSection(projectref)
        if(section === 'achievements')scrollToSection(achievementsref)
        if(section === 'contact')scrollToSection(contactref)
        if(section === 'follow')scrollToSection(followref)
      } }/>
      <div  className="component" id="home" ref={homeref}>
        <Home />
      </div>


      <div className="component"  id="about" ref={aboutref}>
        <About />
      </div>
      <div className="component"  id="education" ref={educationref}>
        <Education />
      </div>

      <div  className="component" id="skills" ref={skillref}>
        <Skills />
      </div>

      <div  className="component" id="projects" ref={projectref}>
        <Projects />
      </div>
     
      <div  className="component" id="achievements" ref={achievementsref}>
        <Achievement />
      </div>
     
     
      <div className="component"  id="contact" ref={contactref}>
        <Contact />
      </div>
      <div className="component follow" ref={followref}>
        <Footer />
      </div>

    </div>
  );
};

export default Display;
