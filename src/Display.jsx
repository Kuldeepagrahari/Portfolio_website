import { useRef } from "react";
import Home        from "./pages/Home/Home.jsx";
import About       from "./pages/About/About.jsx";
import Work        from "./pages/Work/Work.jsx";          // Projects + Experience tabs
import Skills      from "./pages/Skills/Skills.jsx";
import Achievement from "./pages/Achievements/Achievements.jsx";
import Education   from "./pages/Education/Education.jsx";
import Thoughts    from "./pages/Thoughts/Thoughts.jsx";  // Dev Notes
import Contact     from "./pages/Contact/Contact.jsx";
import Nav         from "./components/Navbar/Nav.jsx";
import Footer      from "./components/Footer/Footer.jsx";
import "./global.css";
import "./display.css";

const Display = () => {
  const refs = {
    home:         useRef(null),
    about:        useRef(null),
    projects:     useRef(null),   // "Work" in nav — Projects + Experience
    skills:       useRef(null),
    achievements: useRef(null),
    education:    useRef(null),
    thoughts:     useRef(null),   // "Dev Notes" in nav
    contact:      useRef(null),
    follow:       useRef(null),
  };

  const scrollTo = (key) => refs[key]?.current?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="display">
      <Nav onScrollTo={scrollTo} />

      <main className="main-content">
        {/*
          Section order (optimised for hiring manager attention):
          1. Home        — first impression
          2. About       — who you are + architecture highlights
          3. Work        — projects + experience (most important for a fresher)
          4. Skills      — tech stack with sphere
          5. Achievements — competitive programming credibility
          6. Education   — academic background
          7. Dev Notes   — personality + engineering depth
          8. Contact     — CTA
          9. Follow      — social
        */}
        <section ref={refs.home}>         <Home onScrollTo={scrollTo} /> </section>
        <section ref={refs.about}>        <About />                       </section>
        <section ref={refs.projects}>     <Work />                        </section>
        <section ref={refs.skills}>       <Skills />                      </section>
        <section ref={refs.achievements}> <Achievement />                 </section>
        <section ref={refs.education}>    <Education />                   </section>
        <section ref={refs.thoughts}>     <Thoughts />                    </section>
        <section ref={refs.contact}>      <Contact />                     </section>
        <section ref={refs.follow} className="follow-section">
          <Footer />
        </section>
      </main>
    </div>
  );
};

export default Display;