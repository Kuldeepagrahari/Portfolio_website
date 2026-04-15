// import React from 'react';
// import "./education.css";
// import { FaGraduationCap } from "react-icons/fa";
// import { PiStudentFill } from "react-icons/pi";
// import { GiLaurelsTrophy } from "react-icons/gi";

// const Education = () => {
//   return (
//     <div className="education">
//       <h1>Education</h1>
//       <div className="education-content">

//         <div className="edu-card">
//           <FaGraduationCap className="edu-icon" />
//           <div className="edu-info">
//             <h2>B.Tech in Computer Science and Engineering</h2>
//             <p>Indian Institute of Information Technology, Design & Manufacturing, Jabalpur, Madhya Pradesh</p>
//             <p>2022 – 2026(April-Expected)</p>
//           </div>
//         </div>

//         <div className="edu-card">
//           <PiStudentFill className="edu-icon" />
//           <div className="edu-info">
//             <h2>Class XII – CBSE</h2>
//             <p>Aklank Public School, Kota, Rajasthan</p>
//             <p>2021</p>
//             <p>Percentage: 86.2%</p>
//           </div>
//         </div>

//         <div className="edu-card">
//           <GiLaurelsTrophy className="edu-icon" />
//           <div className="edu-info">
//             <h2>Class X – CBSE</h2>
//             <p>Kaushambi Presidency School, Bharwari, Kaushambi, Uttar Pradesh</p>
//             <p>2019</p>
//             <p>Percentage: 96.6%</p>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Education;
import React from 'react';
import { FaGraduationCap } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";
import { GiLaurelsTrophy } from "react-icons/gi";
import "./education.css";

const eduData = [
  {
    degree: "B.Tech — Computer Science & Engineering",
    school: "Indian Institute of Information Technology, Design & Manufacturing\nJabalpur, Madhya Pradesh",
    year: "2022 – 2026",
    score: null,
    Icon: FaGraduationCap,
  },
  {
    degree: "Class XII — CBSE",
    school: "Aklank Public School, Kota, Rajasthan",
    year: "2021",
    score: "86.2%",
    Icon: HiAcademicCap,
  },
  {
    degree: "Class X — CBSE",
    school: "Kaushambi Presidency School\nBharwari, Kaushambi, Uttar Pradesh",
    year: "2019",
    score: "96.6%",
    Icon: GiLaurelsTrophy,
  },
];

const Education = () => {
  return (
    <div className="education">
      <div className="orb orb-purple" style={{ width: 500, height: 500, top: '-100px', right: '-100px' }} />

      <div className="education-inner">
        {/* Left: heading */}
        <div className="edu-header">
          <div className="section-chip">Background</div>
          <h2 className="edu-title">
            My
            <span>Education</span>
          </h2>
          <p className="edu-desc">
            Academic foundation built on consistent effort, curiosity, and a drive to understand systems deeply.
          </p>
        </div>

        {/* Right: timeline */}
        <div className="edu-timeline">
          {eduData.map(({ degree, school, year, score, Icon }, i) => (
            <div className="edu-item" key={i}>
              <div className="edu-dot"><Icon /></div>
              <div className="edu-card">
                <div className="edu-card-header">
                  <span className="edu-degree">{degree}</span>
                  <span className="edu-year-badge">{year}</span>
                </div>
                <p className="edu-school">{school}</p>
                {score && (
                  <div className="edu-score">
                    <div className="edu-score-bar" />
                    {score} scored
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;