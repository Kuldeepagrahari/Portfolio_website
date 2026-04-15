
// import "./skills.css";
// import { IoLogoGithub, IoGitMergeSharp } from "react-icons/io5";
// import { RiReactjsLine, RiBootstrapLine } from "react-icons/ri";
// import { TbBrandNodejs, TbBrandCss3, TbBrandMysql } from "react-icons/tb";
// import { SiPostgresql, SiMongodb, SiExpress } from "react-icons/si";
// import { ImHtmlFive2 } from "react-icons/im";
// import { VscVscode } from "react-icons/vsc";
// import { FaJsSquare } from 'react-icons/fa';
// import { Typewriter } from 'react-simple-typewriter';
// import { SiJquery } from "react-icons/si";
// import { SiPostman } from "react-icons/si";
// import { SiDocker, SiGithubactions, SiGnubash } from "react-icons/si";
// import { FaLinux, FaAws } from "react-icons/fa";
// import { SiDjango, SiJsonwebtokens } from "react-icons/si";
// import { TbApi } from "react-icons/tb";
// import { CgOrganisation } from "react-icons/cg";

// const Skills = () => {
//   return (
//     <div className='skills'>
//       <h1 className='skills-head'>Skills I have</h1>
//       <div className="soft">
//         <div>Computer Science</div>
//         <div>Data Structures & Algorithms</div>
//         <div>Communication & Leadership</div>
//         <div>Full Stack Development</div>
//         <div>Mobile Development</div>
//         <div>Consistent & Fast Learner</div>
//       </div>

//       <h1 className="skill-typing" style={{ textAlign:"center" }}>
//         <Typewriter
//           words={['<Technologies />', '<I Use />']}
//           loop={Infinity}
//           cursor
//           cursorStyle='/>'
//           typeSpeed={90}
//           deleteSpeed={70}
//           delaySpeed={1000}
//         />
//       </h1>

//       <div className="tech">
//         <div className="tech-category">
//           <h2>Frontend</h2>
//           <div className="tech-stack">
//             <div className="stack-item"><ImHtmlFive2 /><span>HTML</span></div>
//             <div className="stack-item"><TbBrandCss3 /><span>CSS</span></div>
//             <div className="stack-item"><FaJsSquare /><span>JavaScript</span></div>
//             <div className="stack-item"><RiReactjsLine /><span>React</span></div>
//             <div className="stack-item"><RiBootstrapLine /><span>Bootstrap</span></div>
//             <div className="stack-item"><SiJquery /><span>JQuery</span></div>
//           </div>
//         </div>

//         <div className="tech-category">
//           <h2>Backend</h2>
//           <div className="tech-stack">
//           <div className="stack-item"><TbBrandNodejs /><span>Node.js</span></div>
//           <div className="stack-item"><SiExpress /><span>Express</span></div>
//           <div className="stack-item"><SiDjango /><span>Django</span></div>
//           <div className="stack-item"><TbApi /><span>REST API</span></div>
//           <div className="stack-item"><CgOrganisation /><span>MVC</span></div>
//           <div className="stack-item"><SiJsonwebtokens /><span>JWT Auth</span></div>
//           </div>
//         </div>

//         <div className="tech-category">
//           <h2>Database</h2>
//           <div className="tech-stack">
//             <div className="stack-item"><SiMongodb /><span>MongoDB</span></div>
//             <div className="stack-item"><SiPostgresql /><span>PostgreSQL</span></div>
//             <div className="stack-item"><TbBrandMysql /><span>MySQL</span></div>
//           </div>
//         </div>

//         <div className="tech-category">
//           <h2>Developer Tools</h2>
//           <div className="tech-stack">
//             <div className="stack-item"><IoLogoGithub /><span>GitHub</span></div>
//             <div className="stack-item"><IoGitMergeSharp /><span>Git</span></div>
//             <div className="stack-item"><VscVscode /><span>VS Code</span></div>
//             <div className="stack-item"><SiPostman /><span>Postman</span></div>
//           </div>
//         </div>
//         <div className="tech-category">
//           <h2>Cloud & DevOps</h2>
//           <div className="tech-stack">
//           <div className="stack-item"><SiDocker /><span>Docker</span></div>
//           <div className="stack-item"><FaAws /><span>AWS</span></div>
//           <div className="stack-item"><SiGithubactions /><span>GitHub Actions</span></div>
//           <div className="stack-item"><FaLinux /><span>Linux</span></div>
//           <div className="stack-item"><SiGnubash /><span>Bash</span></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Skills;
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { IoLogoGithub, IoGitMergeSharp } from "react-icons/io5";
import { RiReactjsLine, RiBootstrapLine } from "react-icons/ri";
import { TbBrandNodejs, TbBrandCss3, TbBrandMysql } from "react-icons/tb";
import { SiPostgresql, SiMongodb, SiExpress, SiJquery, SiPostman, SiDocker, SiGithubactions, SiGnubash, SiDjango, SiJsonwebtokens } from "react-icons/si";
import { ImHtmlFive2 } from "react-icons/im";
import { VscVscode } from "react-icons/vsc";
import { FaJsSquare, FaLinux, FaAws } from 'react-icons/fa';
import { TbApi } from "react-icons/tb";
import { CgOrganisation } from "react-icons/cg";
import "./skills.css";

const softSkills = [
  "Computer Science", "Data Structures & Algorithms",
  "Communication & Leadership", "Full Stack Development",
  "Mobile Development", "Consistent & Fast Learner"
];

const techGroups = [
  {
    name: "Frontend",
    count: 6,
    items: [
      { Icon: ImHtmlFive2, label: "HTML" },
      { Icon: TbBrandCss3, label: "CSS" },
      { Icon: FaJsSquare, label: "JavaScript" },
      { Icon: RiReactjsLine, label: "React" },
      { Icon: RiBootstrapLine, label: "Bootstrap" },
      { Icon: SiJquery, label: "jQuery" },
    ]
  },
  {
    name: "Backend",
    count: 6,
    items: [
      { Icon: TbBrandNodejs, label: "Node.js" },
      { Icon: SiExpress, label: "Express" },
      { Icon: SiDjango, label: "Django" },
      { Icon: TbApi, label: "REST API" },
      { Icon: CgOrganisation, label: "MVC" },
      { Icon: SiJsonwebtokens, label: "JWT Auth" },
    ]
  },
  {
    name: "Database",
    count: 3,
    items: [
      { Icon: SiMongodb, label: "MongoDB" },
      { Icon: SiPostgresql, label: "PostgreSQL" },
      { Icon: TbBrandMysql, label: "MySQL" },
    ]
  },
  {
    name: "Dev Tools",
    count: 4,
    items: [
      { Icon: IoLogoGithub, label: "GitHub" },
      { Icon: IoGitMergeSharp, label: "Git" },
      { Icon: VscVscode, label: "VS Code" },
      { Icon: SiPostman, label: "Postman" },
    ]
  },
  {
    name: "Cloud & DevOps",
    count: 5,
    items: [
      { Icon: SiDocker, label: "Docker" },
      { Icon: FaAws, label: "AWS" },
      { Icon: SiGithubactions, label: "GitHub Actions" },
      { Icon: FaLinux, label: "Linux" },
      { Icon: SiGnubash, label: "Bash" },
    ]
  },
];

const Skills = () => {
  return (
    <div className="skills">
      <div className="orb orb-cyan" style={{ width: 400, height: 400, top: '-50px', right: '10%' }} />
      <div className="orb orb-orange" style={{ width: 300, height: 300, bottom: '100px', left: '300px' }} />

      <div className="skills-inner">
        <div className="skills-top">
          <div>
            <div className="section-chip">Tech Stack</div>
            <h2 className="skills-title">
              <span className="line1">Skills</span>
              <span className="line2">I Have</span>
            </h2>
          </div>
          <div className="skills-type-accent">
            <Typewriter
              words={['<Technologies />', '<I Use />', '<Full Stack />']}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={90}
              deleteSpeed={60}
              delaySpeed={1200}
            />
          </div>
        </div>

        {/* Soft skills */}
        <div className="skills-section-label">Core Competencies</div>
        <div className="soft-skills">
          {softSkills.map(s => (
            <span className="soft-tag" key={s}>{s}</span>
          ))}
        </div>

        {/* Tech groups */}
        <div className="skills-section-label">Technologies</div>
        <div className="tech-groups">
          {techGroups.map(({ name, count, items }) => (
            <div className="tech-group" key={name}>
              <div className="tech-group-name">
                {name} <span>{count}</span>
              </div>
              <div className="tech-chips">
                {items.map(({ Icon, label }) => (
                  <div className="tech-chip" key={label}>
                    <Icon />
                    {label}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;