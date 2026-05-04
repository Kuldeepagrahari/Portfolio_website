import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa"; 
import "./footer.css";

const marqueeItems = [
  "Full Stack Developer",
  "Open to Work",
  "React · Node.js · MongoDB",
  "B.Tech CSE 2026",
  "PDPM IIIT Jabalpur",
  "Problem Solver",
  "Consistent Learner",
  "Building with Purpose",
];

// Duplicate for seamless loop
const marqueeTrack = [...marqueeItems, ...marqueeItems];

const socialLinks = [
  { Icon: FaGithub, href: "https://github.com/Kuldeepagrahari", label: "GitHub" },
  { Icon: FaSquareXTwitter, href: "https://x.com/kuldeep_106", label: "Twitter/X" },
  { Icon: FaLinkedin, href: "https://www.linkedin.com/in/Kuldeepagrahari", label: "LinkedIn" },
  { Icon: FaYoutube, href: "https://www.youtube.com/@BeSWE", label: "YouTube" },
  { Icon: FaMedium, href: "https://medium.com/@kuldeepagrahari9103", label: "Medium" },
];

const Footer = () => {
  return (
    <footer className="footer">
      {/* Marquee */}
      <div className="footer-marquee">
        <div className="footer-marquee-track">
          {marqueeTrack.map((item, i) => (
            <span className="footer-marquee-item" key={i}>
              <span className="dot" />
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="footer-inner">
        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-logo-row">
            <img src="my_logo3.png" alt="logo" className="footer-logo" />
            <span className="footer-wordmark">Kuldeep <span>Agrahari</span></span>
          </div>
          <p className="footer-tagline">
            Full Stack Developer · Android · Software Engineer.
            Building impactful products with clean code and sharp design.
          </p>
        </div>

        {/* Social */}
        <div className="footer-social">
          <span className="footer-social-label">Follow me</span>
          <div className="footer-social-links">
            {socialLinks.map(({ Icon, href, label }) => (
              <Link
                key={label}
                to={href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label={label}
              >
                <Icon />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <span className="footer-copy">
          © 2025 <span>Kuldeep Agrahari</span>. All rights reserved.
        </span>
        <span className="footer-stack">
          Built with React · Framer Motion · EmailJS
        </span>
      </div>
    </footer>
  );
};

export default Footer;