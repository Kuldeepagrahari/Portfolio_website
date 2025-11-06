import React from 'react';
import './projectcards.css';
import { Link } from 'react-router-dom';

const ProjectCards = ({ topic, img, githubRepo, projectLink, adminLink, description, ongoing }) => {
  return (
    <div className='pcard-container'>
      <div className='pcard'>
        {/* Left Side - Image */}
        <div className='pcard-left'>
          <img src={img} alt={topic} />
        </div>

        {/* Right Side - Content */}
        <div className="pcard-right">
          <h3>{topic}</h3>

          <ul className="pcard-description">
            {description.map((point, i) => (
              <li key={i}>
                {point}
              </li>
            ))}
          </ul>

          <div className="project-links">
            <Link to={githubRepo} target="_blank" rel="noopener noreferrer">GitHub</Link>
            {projectLink && <Link to={projectLink} target="_blank" rel="noopener noreferrer">Live Demo</Link>}
            {adminLink && <Link to={adminLink} target="_blank" rel="noopener noreferrer">Admin Live</Link>}
            {/* {adminLink && <Link to={adminLink} target="_blank" rel="noopener noreferrer">Admin Live</Link>} */}
            {ongoing && <span className="ongoing-tag">In Progress</span>}

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;