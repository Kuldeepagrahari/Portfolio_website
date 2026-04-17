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

/* ── Section keys in DOM order ───────────── */
const SECTION_KEYS = [
  "home",
  "about",
  "projects",
  "skills",
  "achievements",
  "education",
  "thoughts",
  "contact",
  "follow",
];

const Display = () => {
  /* One ref per section */
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

  /* Active section driven by scroll — starts on "home" */
  const [activeSection, setActiveSection] = useState("home");

  /* Scroll-to helper (used by Nav clicks + child components) */
  const scrollTo = useCallback((key) => {
    refs[key]?.current?.scrollIntoView({ behavior: "smooth" });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  /* ── IntersectionObserver setup ─────────
     Fires whenever a section enters / leaves
     the viewport. We use a ratio threshold
     approach: whichever section has the
     highest intersecting ratio at any given
     moment becomes the active one.
  ─────────────────────────────────────────── */
  useEffect(() => {
    /* Track how much of each section is visible */
    const ratioMap = {};
    SECTION_KEYS.forEach((k) => (ratioMap[k] = 0));

    const pickActive = () => {
      /* Find the key with the highest visible ratio */
      let best = SECTION_KEYS[0];
      let bestRatio = -1;
      for (const k of SECTION_KEYS) {
        if (ratioMap[k] > bestRatio) {
          bestRatio = ratioMap[k];
          best = k;
        }
      }
      setActiveSection(best);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          /* Find which key this element belongs to */
          const key = SECTION_KEYS.find(
            (k) => refs[k]?.current === entry.target
          );
          if (key) ratioMap[key] = entry.intersectionRatio;
        });
        pickActive();
      },
      {
        /*
          rootMargin: slight negative top margin so the section
          must meaningfully enter view before activating.
          threshold: observe at many ratios for smooth transitions.
        */
        rootMargin: "-10% 0px -10% 0px",
        threshold: buildThresholds(20),
      }
    );

    /* Observe every section that has a mounted ref */
    SECTION_KEYS.forEach((k) => {
      if (refs[k]?.current) observer.observe(refs[k].current);
    });

    return () => observer.disconnect();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="display">
      <Nav
        onScrollTo={scrollTo}
        activeSection={activeSection}
      />

      <main className="main-content">
        <section ref={refs.home}>
          <Home onScrollTo={scrollTo} />
        </section>

        <section ref={refs.about}>
          <About />
        </section>

        <section ref={refs.projects}>
          <Work />
        </section>

        <section ref={refs.skills}>
          <Skills />
        </section>

        <section ref={refs.achievements}>
          <Achievement />
        </section>

        <section ref={refs.education}>
          <Education />
        </section>

        <section ref={refs.thoughts}>
          <Thoughts />
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

/* ── Helper: build an array of N+1 threshold values 0→1 ── */
function buildThresholds(steps) {
  return Array.from({ length: steps + 1 }, (_, i) => i / steps);
}

export default Display;