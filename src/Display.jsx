// import { useRef } from "react";
// import Home from "./pages/Home/Home.jsx";
// import About from "./pages/About/About.jsx";
// // import Experience from "./pages/Experience/Experience.jsx";
// import Projects from "./pages/Projects/Projects.jsx";
// import Contact from "./pages/Contact/Contact.jsx";
// import Skills from "./pages/Skills/Skills.jsx"
// import Nav from "./components/Navbar/Nav.jsx";
// import Footer from "./components/Footer/Footer.jsx";
// import Education from "./pages/Education/Education.jsx";
// import Achievement from "./pages/Achievements/Achievements.jsx";
// const Display = () => {
//   const homeref = useRef(null)
//   const aboutref = useRef(null)
//   const educationref = useRef(null)
//   const skillref = useRef(null)
//   const projectref = useRef(null)
//   const contactref = useRef(null)
//   const followref = useRef(null)
//   const achievementsref = useRef(null)

//   const scrollToSection = (sectionRef) => {
//     sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <div className="display">
//       <Nav 
//       onScrollTo={(section) => {
//         if(section === 'home')scrollToSection(homeref)
//         if(section === 'about')scrollToSection(aboutref)
//         if(section === 'education')scrollToSection(educationref)
//         if(section === 'skills')scrollToSection(skillref)
//         if(section === 'projects')scrollToSection(projectref)
//         if(section === 'achievements')scrollToSection(achievementsref)
//         if(section === 'contact')scrollToSection(contactref)
//         if(section === 'follow')scrollToSection(followref)
//       } }/>
//       <div  className="component" id="home" ref={homeref}>
//         <Home />
//       </div>


//       <div className="component"  id="about" ref={aboutref}>
//         <About />
//       </div>
//       <div className="component"  id="education" ref={educationref}>
//         <Education />
//       </div>

//       <div  className="component" id="skills" ref={skillref}>
//         <Skills />
//       </div>

//       <div  className="component" id="projects" ref={projectref}>
//         <Projects />
//       </div>
     
//       <div  className="component" id="achievements" ref={achievementsref}>
//         <Achievement />
//       </div>
     
     
//       <div className="component"  id="contact" ref={contactref}>
//         <Contact />
//       </div>
//       <div className="component follow" ref={followref}>
//         <Footer />
//       </div>

//     </div>
//   );
// };

// export default Display;
import { useRef } from "react";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Education from "./pages/Education/Education.jsx";
import Skills from "./pages/Skills/Skills.jsx";
import Work from "./pages/Work/Work.jsx";          // ← combined Projects + Experience
import Achievement from "./pages/Achievements/Achievements.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Nav from "./components/Navbar/Nav.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./global.css";
import "./display.css";

const Display = () => {
  const refs = {
    home:         useRef(null),
    about:        useRef(null),
    education:    useRef(null),
    skills:       useRef(null),
    projects:     useRef(null),   // Work section (projects + experience tabs)
    achievements: useRef(null),
    contact:      useRef(null),
    follow:       useRef(null),
  };

  const scrollToSection = (key) => {
    refs[key]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="display">
      <Nav onScrollTo={scrollToSection} />

      <main className="main-content">
        <section ref={refs.home}>
          <Home onScrollTo={scrollToSection} />
        </section>

        <section ref={refs.about}>
          <About />
        </section>

        <section ref={refs.education}>
          <Education />
        </section>

        <section ref={refs.skills}>
          <Skills />
        </section>

        {/* "Projects" nav item now shows the tabbed Work page */}
        <section ref={refs.projects}>
          <Work />
        </section>

        <section ref={refs.achievements}>
          <Achievement />
        </section>

        <section ref={refs.contact}>
          <Contact />
        </section>

        <section ref={refs.follow} className="follow-section">
          <Footer />
        </section>
      </main>
    </div>
  );
};

export default Display;