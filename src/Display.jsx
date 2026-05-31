import { useRef, useState, useEffect, useCallback } from "react";
import Home        from "./pages/Home/Home.jsx";
import About       from "./pages/About/About.jsx";
import Work        from "./pages/Work/Work.jsx";
import Skills      from "./pages/Skills/Skills.jsx";
import Achievement from "./pages/Achievements/Achievements.jsx";
import Education   from "./pages/Education/Education.jsx";
import Thoughts    from "./pages/Thoughts/Thoughts.jsx";
import Contact     from "./pages/Contact/Contact.jsx";
import Nav         from "./components/Navbar/Nav.jsx";
import Footer      from "./components/Footer/Footer.jsx";
import "./global.css";
import "./display.css";

import { ThemeProvider } from "./hooks/useTheme.jsx";
const SECTION_KEYS = [
  "home", "about", "projects", "skills",
  "achievements", "education", "thoughts", "contact", "follow",
];

const Display = () => {

  const refs = {
    home:         useRef(null),
    about:        useRef(null),
    projects:     useRef(null),
    skills:       useRef(null),
    achievements: useRef(null),
    education:    useRef(null),
    thoughts:     useRef(null),
    contact:      useRef(null),
    follow:       useRef(null),
  };

  const [activeSection, setActiveSection] = useState("home");

  const scrollTo = useCallback((key) => {
    refs[key]?.current?.scrollIntoView({ behavior: "smooth" });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const ratioMap = {};
    SECTION_KEYS.forEach((k) => (ratioMap[k] = 0));

    const pickActive = () => {
      let best = SECTION_KEYS[0], bestRatio = -1;
      for (const k of SECTION_KEYS) {
        if (ratioMap[k] > bestRatio) { bestRatio = ratioMap[k]; best = k; }
      }
      setActiveSection(best);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const key = SECTION_KEYS.find((k) => refs[k]?.current === entry.target);
          if (key) ratioMap[key] = entry.intersectionRatio;
        });
        pickActive();
      },
      { rootMargin: "-10% 0px -10% 0px", threshold: buildThresholds(20) }
    );

    SECTION_KEYS.forEach((k) => {
      if (refs[k]?.current) observer.observe(refs[k].current);
    });

    return () => observer.disconnect();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="display">
    
      {/* Main app — fades in after intro */}
      <div className="display-main">
        <Nav onScrollTo={scrollTo} activeSection={activeSection} />

        <main className="main-content">
          <section ref={refs.home}><Home onScrollTo={scrollTo} /></section>
          <section ref={refs.about}><About /></section>
          <section ref={refs.projects}><Work /></section>
          <section ref={refs.skills}><Skills /></section>
          <section ref={refs.achievements}><Achievement /></section>
          <section ref={refs.education}><Education /></section>
          <section ref={refs.thoughts}>
            <ThemeProvider>
              <Thoughts />
            </ThemeProvider>
            </section>
          <section ref={refs.contact}><Contact /></section>
          <section ref={refs.follow} className="follow-section"><Footer /></section>
        </main>
      </div>
    </div>
  );
};

function buildThresholds(steps) {
  return Array.from({ length: steps + 1 }, (_, i) => i / steps);
}

export default Display;