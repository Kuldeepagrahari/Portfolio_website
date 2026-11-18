import React from "react";
import { FaDownload, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiMedium } from "react-icons/si";
import "./home.css";

const RESUME_URL =
  "https://drive.google.com/file/d/1ynp4P-dIj4jmG16nJgN-es3N0fXGMbpi/view?usp=sharing";

const LINKS = [
  { Icon: FaGithub,         href: "https://github.com/Kuldeepagrahari",          label: "GitHub" },
  { Icon: FaLinkedin,       href: "https://www.linkedin.com/in/Kuldeepagrahari", label: "LinkedIn" },
  { Icon: FaSquareXTwitter, href: "https://x.com/kuldeep_106",                   label: "X" },
  { Icon: SiMedium,         href: "https://medium.com/@kuldeepagrahari9103",     label: "Medium" },
  { Icon: FaYoutube,        href: "https://www.youtube.com/@BeSWE",              label: "YouTube" },
];

const STACK = ["Node.js", "TypeScript", "PostgreSQL", "Redis", "Kafka", "Docker", "AWS"];

const STATS = [
  { n: "1200+", l: "DSA solved" },
  { n: "1600+", l: "contributions" },
  { n: "70+",   l: "repos" },
];

export default function Home() {
  return (
    <main className="kh">
      {/* Portrait: anchored to the bottom-right, no frame */}
      <div className="kh-portrait">
        <img
          src="/pic3.png"
          alt="Kuldeep Agrahari"
          draggable="false"
          onError={(e) => { e.currentTarget.src = "/hero-image.png"; }}
        />
      </div>

      <section className="kh-copy">
        <p className="kh-log">
          <span className="kh-dot" aria-hidden="true" />
          open to backend roles
        </p>

        <h1 className="kh-name">
          Kuldeep
          <br />
          Agrahari
        </h1>

        <p className="kh-role">
          <span>~/</span> backend engineer
        </p>

        <p className="kh-bio">
          I build backend systems: event-driven pipelines, APIs, and the data
          layer under them. Reliability and clear architecture over clever
          tricks.
        </p>

        <ul className="kh-stack" aria-label="Primary stack">
          {STACK.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>

        <div className="kh-actions">
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="kh-btn"
          >
            <FaDownload aria-hidden="true" />
            Resume
          </a>

          <nav className="kh-links" aria-label="Social links">
            {LINKS.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
              >
                <Icon />
              </a>
            ))}
          </nav>
        </div>

        <dl className="kh-stats">
          {STATS.map(({ n, l }) => (
            <div key={l}>
              <dd>{n}</dd>
              <dt>{l}</dt>
            </div>
          ))}
        </dl>
      </section>
    </main>
  );
}