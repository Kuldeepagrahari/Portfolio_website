import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import { FaDownload, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiMedium } from "react-icons/si";
import "./home.css";

const SOCIAL = [
  { Icon: FaGithub,         href: "https://github.com/Kuldeepagrahari",                    label: "GitHub",    bg: "#24292e", fg: "#ffffff", shadow: "rgba(36,41,46,0.7)"    },
  { Icon: FaSquareXTwitter, href: "https://x.com/kuldeep_106",                              label: "X",         bg: "#000000", fg: "#ffffff", shadow: "rgba(80,80,80,0.5)"     },
  { Icon: FaLinkedin,       href: "https://www.linkedin.com/in/Kuldeepagrahari",            label: "LinkedIn",  bg: "#0A66C2", fg: "#ffffff", shadow: "rgba(10,102,194,0.55)"  },
  { Icon: FaYoutube,        href: "https://www.youtube.com/@BeSWE",                         label: "YouTube",   bg: "#FF0000", fg: "#ffffff", shadow: "rgba(255,0,0,0.5)"      },
  { Icon: SiMedium,         href: "https://medium.com/@kuldeepagrahari9103",                label: "Medium",    bg: "#1a1a1a", fg: "#ffffff", shadow: "rgba(80,80,80,0.4)"     },
];

const WORDS = ["Backend Engineer", "System Builder", "Full-Stack Dev", "Remote · Any Time ZOne"];

export default function Home() {
  const [wordIdx,   setWordIdx]   = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting,  setDeleting]  = useState(false);
  const [mounted,   setMounted]   = useState(false);
  const tickRef = useRef(null);

  useEffect(() => { const t = setTimeout(() => setMounted(true), 80); return () => clearTimeout(t); }, []);

  useEffect(() => {
    const word = WORDS[wordIdx];
    const speed = deleting ? 38 : 72;
    tickRef.current = setTimeout(() => {
      if (!deleting) {
        setDisplayed(word.slice(0, displayed.length + 1));
        if (displayed.length + 1 === word.length) setTimeout(() => setDeleting(true), 1400);
      } else {
        setDisplayed(word.slice(0, displayed.length - 1));
        if (displayed.length - 1 === 0) { setDeleting(false); setWordIdx(i => (i + 1) % WORDS.length); }
      }
    }, speed);
    return () => clearTimeout(tickRef.current);
  }, [displayed, deleting, wordIdx]);

  return (
    <div className={`home${mounted ? ' home--in' : ''}`}>
      <div className="hbg-grid" />
      <div className="hbg-orb hbg-orb--a" />
      <div className="hbg-orb hbg-orb--b" />
      <div className="hbg-grain" />

      <div className="home-hero">

        {/* LEFT — text */}
        <div className="hero-content">
          {/* <div className="h-eyebrow">
            <span className="h-eyebrow-dot" />
            <span>PDPM IIITDM Jabalpur · B.Tech CSE · 2026</span>
          </div> */}

          <h1 className="h-name">
            <span className="h-name-first">Kuldeep</span>
            <span className="h-name-last">Agra<em>hari</em></span>
          </h1>

          <div className="h-role-row">
            <span className="h-role-slash">~/</span>
            <span className="h-role-word">{displayed}<span className="h-cursor">|</span></span>
          </div>

          <p className="h-bio">
            Curious by instinct. I don't wait to understand everything —
            I build my way there. Obsessed with systems that outlast
            the hype and matter to real people.
          </p>

          <Link
            to="https://drive.google.com/file/d/1kU14QelhblMZNnAsFZeEhax2v5hOOltf/view?usp=sharing"
            target="_blank"
            className="h-resume-btn"
          >
            <FaDownload />
            <span>Resume</span>
            <div className="h-btn-shine" />
          </Link>

          <div className="h-social-block">
            <span className="h-social-label">Let's connect and chat</span>
            <div className="h-social-row">
              {SOCIAL.map(({ Icon, href, label, bg, fg, shadow }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="h-social-link" aria-label={label} data-label={label}
                  style={{ background: bg, color: fg, '--icon-shadow': shadow }}>
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT — portrait, no frame, with focus glow */}
        <div className="hero-portrait">
          <div className="portrait-glow" />
          <img
            src="/pic2.png"
            alt="Kuldeep Agrahari"
            className="portrait-img"
            onError={e => { e.target.src = '/hero-image.png'; }}
          />
          <div className="portrait-line" />
        </div>

      </div>

      {/* Stats */}
      <div className="home-stats">
        {[
          { n: '3+',    l: 'Years'         },
          { n: '7+',    l: 'Systems Built' },
          { n: '1200+', l: 'DSA Problems Solved'           },
          { n: '1600+',  l: 'Contributions' },
          { n: '70+',    l: 'Repos'         },
        ].map(({ n, l }) => (
          <div className="hstat" key={l}>
            <span className="hstat-n">{n}</span>
            <span className="hstat-l">{l}</span>
          </div>
        ))}
      </div>
    </div>
  );
}