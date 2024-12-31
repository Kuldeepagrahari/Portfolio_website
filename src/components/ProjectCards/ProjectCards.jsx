import React from 'react';
import './projectcards.css';
import { Link } from 'react-router-dom';
import { FaTasks, FaRocket, FaCode, FaCogs } from 'react-icons/fa'; // Importing example icons

const ProjectCards = ({ topic, img, githubRepo, deploymentLink, description }) => {
    const icons = [
       
        <FaCode style={{color:"var(--theme-color)", fontSize:"20px"}}/>, // Coding or technical-related description
       
    ];

    return (
        <div className='pcards'>
            <div className='left'>
                <h2 style={{ color: "white" }}>{topic}</h2>
                <img src={img} alt="Project Preview" />
            </div>
            <div className="right">
                <p>
                    {description.map((func, i) => (
                        <li key={i}>
                            {icons[i % icons.length]} {/* Cycle through icons */}
                            {func}
                        </li>
                    ))}
                </p>
                <div className="links">
                    <Link to={githubRepo}>Github Repo</Link>
                    {deploymentLink && <Link to={deploymentLink}>Project Link</Link>}
                </div>
            </div>
        </div>
    );
};

export default ProjectCards;
