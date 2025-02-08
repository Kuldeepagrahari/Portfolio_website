import React from 'react';
import "./skills.css";
import { IoLogoGithub, IoGitMergeSharp } from "react-icons/io5";
import { RiReactjsLine, RiBootstrapLine } from "react-icons/ri";
import { TbBrandNodejs, TbBrandCss3, TbBrandJavascript, TbBrandMysql } from "react-icons/tb";
import { SiPostgresql, SiMongodb, SiExpress } from "react-icons/si";
import { ImHtmlFive2 } from "react-icons/im";
import { VscVscode } from "react-icons/vsc";
import { FaJsSquare } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import { SiJquery } from "react-icons/si";
import { SiPostman } from "react-icons/si";

const Skills = () => {
  return (
    <div className='skills'>
      <h1 className='skills-head'>Skills I have</h1>
      <div className="soft">
        <div>Computer Science</div>
        <div>Data Structures & Algorithms</div>
        <div>C/C++ Programming Language</div>
        <div>UI/UX</div>
        <div>Backend Development</div>
        <div>Responsive Frontend Development</div>
      </div>

      <h1 className="skill-typing" style={{ textAlign:"center" }}>
        <Typewriter
          words={['< tech stack I use', '< tech stack I know']}
          loop={Infinity}
          cursor
          cursorStyle='/>'
          typeSpeed={90}
          deleteSpeed={70}
          delaySpeed={1000}
        />
      </h1>

      <div className="tech">
        <div className="tech-category">
          <h2>Frontend</h2>
          <div className="tech-stack">
            <div className="stack-item"><ImHtmlFive2 /><span>HTML</span></div>
            <div className="stack-item"><TbBrandCss3 /><span>CSS</span></div>
            <div className="stack-item"><FaJsSquare /><span>JavaScript</span></div>
            <div className="stack-item"><RiReactjsLine /><span>React</span></div>
            <div className="stack-item"><RiBootstrapLine /><span>Bootstrap</span></div>
            <div className="stack-item"><SiJquery /><span>JQuery</span></div>
          </div>
        </div>

        <div className="tech-category">
          <h2>Backend</h2>
          <div className="tech-stack">
            <div className="stack-item"><TbBrandNodejs /><span>Node.js</span></div>
            <div className="stack-item"><SiExpress /><span>Express</span></div>
          </div>
        </div>

        <div className="tech-category">
          <h2>Database</h2>
          <div className="tech-stack">
            <div className="stack-item"><SiMongodb /><span>MongoDB</span></div>
            <div className="stack-item"><SiPostgresql /><span>PostgreSQL</span></div>
            <div className="stack-item"><TbBrandMysql /><span>MySQL</span></div>
          </div>
        </div>

        <div className="tech-category">
          <h2>Developer Tools</h2>
          <div className="tech-stack">
            <div className="stack-item"><IoLogoGithub /><span>GitHub</span></div>
            <div className="stack-item"><IoGitMergeSharp /><span>Git</span></div>
            <div className="stack-item"><VscVscode /><span>VS Code</span></div>
            <div className="stack-item"><SiPostman /><span>Postman</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
