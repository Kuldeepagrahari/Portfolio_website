import { useState, useEffect } from "react";
import "./intro.css";

const LINES = [
  { text: "$ initializing portfolio...", delay: 0 },
  { text: "$ loading modules", delay: 600 },
  { text: "  ✓ backend_systems", delay: 1000 },
  { text: "  ✓ api_design", delay: 1300 },
  { text: "  ✓ Software Development", delay: 1600 },
  { text: "$ ready.", delay: 2000 },
];

const IntroLoader = ({ onComplete }) => {
  const [visibleLines, setVisibleLines] = useState([]);
  const [phase, setPhase] = useState("typing"); // typing | shrink | done

  useEffect(() => {
    const timers = LINES.map(({ text, delay }, i) =>
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, { text, i }]);
      }, delay)
    );

    // Start shrink after last line
    const shrinkTimer = setTimeout(() => setPhase("shrink"), 2700);

    // Signal done
    const doneTimer = setTimeout(() => {
      setPhase("done");
      onComplete?.();
    }, 3500);

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(shrinkTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  if (phase === "done") return null;

  return (
    <div className={`intro-overlay ${phase === "shrink" ? "intro-shrink" : ""}`}>
      <div className="intro-scanlines" />
      <div className="intro-terminal">
        <div className="intro-terminal-bar">
          <span className="itb-dot itb-dot--red" />
          <span className="itb-dot itb-dot--yellow" />
          <span className="itb-dot itb-dot--green" />
          <span className="itb-title">kuldeep@portfolio ~ zsh</span>
        </div>
        <div className="intro-terminal-body">
          {visibleLines.map(({ text, i }) => (
            <div
              key={i}
              className={`intro-line ${text.startsWith("  ✓") ? "intro-line--ok" : "intro-line--cmd"}`}
            >
              {text}
              {i === visibleLines.length - 1 && phase === "typing" && (
                <span className="intro-cursor" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Name reveal — fades in just before shrink */}
      <div className={`intro-name ${visibleLines.length >= LINES.length ? "intro-name--show" : ""}`}>
        <span className="in-first">Kuldeep</span>
        <span className="in-last">Agrahari</span>
      </div>
    </div>
  );
};

export default IntroLoader;