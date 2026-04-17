import React, { useRef, useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { IoLogoGithub, IoGitMergeSharp } from "react-icons/io5";
import { RiReactjsLine, RiBootstrapLine } from "react-icons/ri";
import { TbBrandNodejs, TbBrandCss3, TbBrandMysql } from "react-icons/tb";
import {
  SiPostgresql, SiMongodb, SiExpress, SiPostman,
  SiDocker, SiGithubactions, SiGnubash, SiDjango,
  SiJsonwebtokens, SiRedis, SiApachekafka, SiSocketdotio,
  SiPython, SiCplusplus
} from "react-icons/si";
import { ImHtmlFive2 } from "react-icons/im";
import { VscVscode } from "react-icons/vsc";
import { FaJsSquare, FaLinux, FaAws, FaMobileAlt } from 'react-icons/fa';
import { TbApi } from "react-icons/tb";
import { HiDatabase, HiCode } from "react-icons/hi";
import { MdOutlineDesignServices } from "react-icons/md";
import { SiTailwindcss } from "react-icons/si";
import { HiOutlineSquares2X2 } from "react-icons/hi2"; // for shadcn (no official icon)
import "./skills.css";

/* ─── Categories (from resume) ──────────── */
const CAT_META = {
  backend:   { color: '#00f5d4', label: 'Backend',          emoji: '</>' },
  frontend:  { color: '#ff4e00', label: 'Frontend',         emoji: '⬡'  },
  database:  { color: '#7b5ea7', label: 'Database',         emoji: '⊛'  },
  languages: { color: '#ffa116', label: 'Languages',        emoji: 'λ'  },
  devops:    { color: '#2bb600', label: 'Cloud & DevOps',   emoji: '⌁'  },
  systems:   { color: '#ff6b6b', label: 'Distributed',      emoji: '⚡' },
  tools:     { color: '#4a9eff', label: 'Tools',            emoji: '⚙'  },
};

const CATEGORIES = {
  backend: [
    { Icon: TbBrandNodejs,  name: 'Node.js',       note: 'Primary runtime'    },
    { Icon: SiExpress,       name: 'Express.js',    note: 'REST / Middleware'  },
    { Icon: SiDjango,        name: 'Django',        note: 'Python web fw'      },
    { Icon: TbApi, name: 'API Design', note: 'Design, validation & integration' },
    { Icon: SiJsonwebtokens, name: 'JWT / Auth',    note: 'Secure auth flows'  },
    { Icon: HiCode,          name: 'RBAC',          note: 'Role-based access'  },
    { Icon: MdOutlineDesignServices, name: 'MVC',   note: 'Architecture'       },
  ],
  frontend: [
    { Icon: RiReactjsLine,   name: 'React.js',      note: 'Component-based UI'     },
    { Icon: FaJsSquare,      name: 'JavaScript',    note: 'ES6+'                  },
    { Icon: ImHtmlFive2,     name: 'HTML5',         note: 'Semantic markup'       },
    { Icon: TbBrandCss3,     name: 'CSS3',          note: 'Responsive layouts'    },
    { Icon: SiTailwindcss,   name: 'Tailwind CSS',  note: 'Utility-first styling' },
    { Icon: HiOutlineSquares2X2, name: 'shadcn/ui', note: 'Reusable UI components'},
    { Icon: FaMobileAlt,     name: 'React Native',  note: 'Mobile (Expo)'         },
  ],
  database: [
    { Icon: SiMongodb,      name: 'MongoDB',       note: 'Document store'     },
    { Icon: SiPostgresql,   name: 'PostgreSQL',    note: 'Primary RDBMS'      },
    { Icon: TbBrandMysql,   name: 'MySQL',         note: 'SQL database'       },
    { Icon: SiRedis,        name: 'Redis',         note: 'Cache & pub/sub'    },
    { Icon: HiDatabase,     name: 'SQL',           note: 'Complex queries'    },
  ],
  languages: [
    { Icon: FaJsSquare,     name: 'JavaScript',    note: 'ES6+ daily driver'  },
    { Icon: SiCplusplus,    name: 'C++',           note: 'DSA & algorithms'   },
    { Icon: SiPython,       name: 'Python',        note: 'Automation & ML'    },
    { Icon: HiDatabase,     name: 'SQL',           note: 'Query language'     },
  ],
  devops: [
    { Icon: SiDocker,       name: 'Docker',        note: 'Containerization'   },
    { Icon: FaAws,          name: 'AWS',           note: 'Cloud deployment'   },
    { Icon: SiGithubactions,name: 'GitHub Actions',note: 'CI/CD pipelines'   },
    { Icon: FaLinux,        name: 'Linux',         note: 'Server management'  },
    { Icon: SiGnubash,      name: 'Bash',          note: 'Shell scripting'    },
  ],
  systems: [
    { Icon: SiApachekafka,  name: 'Kafka',         note: 'Message streaming'  },
    { Icon: SiSocketdotio,  name: 'WebSockets',    note: 'Real-time comms'    },
    { Icon: SiRedis,        name: 'Redis Pub/Sub', note: 'Event-driven'       },
  ],
  tools: [
    { Icon: IoLogoGithub,   name: 'GitHub',        note: '1400+ contributions'},
    { Icon: IoGitMergeSharp,name: 'Git',           note: 'Version control'    },
    { Icon: VscVscode,      name: 'VS Code',       note: 'Primary IDE'        },
    { Icon: SiPostman,      name: 'Postman',       note: 'API testing'        },
  ],
};

/* ─── 3D Sphere (sphere of all tech) ───── */
const SPHERE_TECH = Object.entries(CATEGORIES).flatMap(([cat, items]) =>
  items.slice(0, 4).map(({ Icon, name }) => ({ Icon, name, cat }))
);

const TechSphere = () => {
  const containerRef = useRef(null);
  const rafRef = useRef(null);
  const angleRef = useRef(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const tags = el.querySelectorAll('.s-tag');
    const n = tags.length;
    const R = 160;

    const positions = Array.from({ length: n }, (_, i) => {
      const phi   = Math.acos(1 - (2 * (i + 0.5)) / n);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      return {
        ox: R * Math.sin(phi) * Math.cos(theta),
        oy: R * Math.sin(phi) * Math.sin(theta),
        oz: R * Math.cos(phi),
      };
    });

    const tick = () => {
      angleRef.current += 0.003;
      const a = angleRef.current;
      const c = Math.cos(a), s = Math.sin(a);
      tags.forEach((tag, i) => {
        const { ox, oy, oz } = positions[i];
        const nx = ox * c + oz * s;
        const nz = -ox * s + oz * c;
        const depth   = (nz + R) / (2 * R);
        tag.style.transform = `translate(calc(-50% + ${nx}px), calc(-50% + ${oy}px)) scale(${0.45 + depth * 0.85})`;
        tag.style.opacity   = 0.15 + depth * 0.85;
        tag.style.zIndex    = Math.round(depth * 100);
      });
      rafRef.current = requestAnimationFrame(tick);
    };
    tick();
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div className="sphere-container" ref={containerRef}>
      <div className="sphere-glow" />
      {SPHERE_TECH.map(({ Icon, name, cat }) => (
        <div key={`${cat}-${name}`} className="s-tag" style={{ '--cat-color': CAT_META[cat].color }}>
          <Icon className="s-tag-icon" />
          <span className="s-tag-name">{name}</span>
        </div>
      ))}
    </div>
  );
};

/* ─── Main ──────────────────────────────── */
const Skills = () => {
  const [active, setActive] = useState('backend');

  return (
    <div className="skills">
      {/* Background */}
      <div className="sk-orb sk-orb--cyan" />
      <div className="sk-orb sk-orb--purple" />

      <div className="skills-inner">

        {/* Header */}
        <div className="skills-header">
          <div>
            <div className="section-chip">Tech Stack</div>
            <h2 className="skills-title">
              <span className="st-solid">Skills</span>
              <span className="st-outline">I Have</span>
            </h2>
          </div>
          <div className="skills-typewriter">
            <Typewriter
              words={['<Backend Focused />', '<Full Stack />', '<Problem Solver />']}
              loop={Infinity} cursor cursorStyle="|"
              typeSpeed={90} deleteSpeed={55} delaySpeed={1400}
            />
          </div>
        </div>

        {/* Body: Sphere left, Tabs+Grid right */}
        <div className="skills-body">

          {/* Left — sphere */}
          <div className="sphere-wrap">
            <TechSphere />
            <div className="sphere-legend">
              {Object.entries(CAT_META).map(([k, { color, label }]) => (
                <button
                  key={k}
                  className={`leg-pill ${active === k ? 'active' : ''}`}
                  style={{ '--c': color }}
                  onClick={() => setActive(k)}
                >
                  <span className="leg-dot" />
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Right — tabs + cards */}
          <div className="skills-right">
            {/* Tab row */}
            <div className="sk-tabs" role="tablist">
              {Object.entries(CAT_META).map(([k, { color, label }]) => (
                <button
                  key={k}
                  role="tab"
                  aria-selected={active === k}
                  className={`sk-tab ${active === k ? 'active' : ''}`}
                  style={{ '--c': color }}
                  onClick={() => setActive(k)}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Card grid */}
            <div className="sk-grid" key={active}>
              {CATEGORIES[active].map(({ Icon, name, note }) => (
                <div
                  className="sk-card"
                  key={name}
                  style={{ '--c': CAT_META[active].color }}
                >
                  <Icon className="sk-card-icon" />
                  <div className="sk-card-info">
                    <span className="sk-card-name">{name}</span>
                    <span className="sk-card-note">{note}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Category count */}
            <div className="sk-count">
              <span style={{ color: CAT_META[active].color }}>
                {CATEGORIES[active].length}
              </span> technologies in {CAT_META[active].label}
            </div>
          </div>
        </div>

        {/* Soft skills */}
        <div className="soft-strip">
          {[
            'Backend Development',
            'API Design',
            'System Fundamentals',
            'Data Structures & Algorithms',
            'Distributed Systems',
            'Debugging & Problem Solving',
          ].map(s => <span className="soft-tag" key={s}>{s}</span>)}
        </div>

      </div>
    </div>
  );
};

export default Skills;