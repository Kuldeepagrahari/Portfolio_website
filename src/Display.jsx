import { useRef } from "react";
import Home         from "./pages/Home/Home.jsx";
import About        from "./pages/About/About.jsx";
import Education    from "./pages/Education/Education.jsx";
import Skills       from "./pages/Skills/Skills.jsx";
import Work         from "./pages/Work/Work.jsx";
import Achievement  from "./pages/Achievements/Achievements.jsx";
import Thoughts     from "./pages/Thoughts/Thoughts.jsx";
import Contact      from "./pages/Contact/Contact.jsx";
import Nav          from "./components/Navbar/Nav.jsx";
import Footer       from "./components/Footer/Footer.jsx";
import "./global.css";
import "./display.css";

const Display = () => {
  const refs = {
    home:         useRef(null),
    about:        useRef(null),
    education:    useRef(null),
    skills:       useRef(null),
    projects:     useRef(null),
    achievements: useRef(null),
    thoughts:     useRef(null),
    contact:      useRef(null),
    follow:       useRef(null),
  };

  const scrollTo = (key) => refs[key]?.current?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="display">
      <Nav onScrollTo={scrollTo} />

      <main className="main-content">
        <section ref={refs.home}>         <Home onScrollTo={scrollTo} />  </section>
        <section ref={refs.about}>        <About />                        </section>
        <section ref={refs.education}>    <Education />                    </section>
        <section ref={refs.skills}>       <Skills />                       </section>
        <section ref={refs.projects}>     <Work />                         </section>
        <section ref={refs.achievements}> <Achievement />                  </section>
        <section ref={refs.thoughts}>     <Thoughts />                     </section>
        <section ref={refs.contact}>      <Contact />                      </section>
        <section ref={refs.follow} className="follow-section">
          <Footer />
        </section>
      </main>
    </div>
  );
};

export default Display;