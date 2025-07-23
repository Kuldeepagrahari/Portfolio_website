import React from 'react';
import "./education.css";
import { FaGraduationCap } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import { GiLaurelsTrophy } from "react-icons/gi";

const Education = () => {
  return (
    <div className="education">
      <h1>Education</h1>
      <div className="education-content">

        <div className="edu-card">
          <FaGraduationCap className="edu-icon" />
          <div className="edu-info">
            <h2>B.Tech in Computer Science and Engineering</h2>
            <p>Indian Institute of Information Technology, Design & Manufacturing, Jabalpur, Madhya Pradesh</p>
            <p>2022 – 2026(April-Expected)</p>
          </div>
        </div>

        <div className="edu-card">
          <PiStudentFill className="edu-icon" />
          <div className="edu-info">
            <h2>Class XII – CBSE</h2>
            <p>Aklank Public School, Kota, Rajasthan</p>
            <p>2021</p>
            <p>Percentage: 86.2%</p>
          </div>
        </div>

        <div className="edu-card">
          <GiLaurelsTrophy className="edu-icon" />
          <div className="edu-info">
            <h2>Class X – CBSE</h2>
            <p>Kaushambi Presidency School, Bharwari, Kaushambi, Uttar Pradesh</p>
            <p>2019</p>
            <p>Percentage: 96.6%</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Education;
