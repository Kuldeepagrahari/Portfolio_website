import React from "react";
import "./experience.css";

const Experience = () => {
  return (
    <section className="experience">
      {/* Team Lead Card */}
      <div className="card">
        <div className="card-content">
          <div className="card-front">
            <h2>Team Lead - Fusion ERP Portal</h2>
          </div>
          <div className="card-back">
            <ul>
              <li>
                Led the development of the <strong>Examination Module</strong> in the Fusion ERP Portal for my college.
              </li>
              <li>
                Utilized cutting-edge technologies like <strong>React.js</strong>, <strong>Django</strong>, and <strong>PostgreSQL</strong> to build efficient functionalities.
              </li>
              <li>
                Coordinated with a dynamic team, ensuring seamless collaboration and timely delivery of features.
              </li>
             
            </ul>
            <div className="links">
              <a href="#">Explore Projects</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </div>
      </div>

      {/* Problem Solving Skills Card */}
      <div className="card">
        <div className="card-content">
          <div className="card-front">
            <h2>Problem Solving Skills</h2>
          </div>
          <div className="card-back">
            <ul>
              <li>
                Achieved a <strong>4-star rating on GeeksforGeeks</strong> and a <strong>3-star rating on CodeChef</strong>.
              </li>
              <li>
                Solved over <strong>1000+ coding problems</strong> across various programming platforms.
              </li>
            
             
            </ul>
            <div className="links">
              <a
                href="https://www.codechef.com/users/virat18_king"
                target="_blank"
                rel="noopener noreferrer"
              >
                CodeChef Profile
              </a>
              <a
                href="https://www.geeksforgeeks.org/user/kuldeepagre919/"
                target="_blank"
                rel="noopener noreferrer"
              >
                GeeksforGeeks Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
