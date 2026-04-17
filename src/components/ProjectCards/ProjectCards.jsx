// import React from 'react';
// import './projectcards.css';
// import { Link } from 'react-router-dom';

// const ProjectCards = ({ topic, img, githubRepo, projectLink, adminLink, description, ongoing }) => {
//   return (
//     <div className='pcard-container'>
//       <div className='pcard'>
//         {/* Left Side - Image */}
//         <div className='pcard-left'>
//           <img src={img} alt={topic} />
//         </div>

//         {/* Right Side - Content */}
//         <div className="pcard-right">
//           <h3>{topic}</h3>

//           <ul className="pcard-description">
//             {description.map((point, i) => (
//               <li key={i}>
//                 {point}
//               </li>
//             ))}
//           </ul>

//           <div className="project-links">
//             <Link to={githubRepo} target="_blank" rel="noopener noreferrer">GitHub</Link>
//             {projectLink && <Link to={projectLink} target="_blank" rel="noopener noreferrer">Live Demo</Link>}
//             {adminLink && <Link to={adminLink} target="_blank" rel="noopener noreferrer">Admin Live</Link>}
//             {/* {adminLink && <Link to={adminLink} target="_blank" rel="noopener noreferrer">Admin Live</Link>} */}
//             {ongoing && <span className="ongoing-tag">In Progress</span>}

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectCards;
import React from 'react';
import { Link } from 'react-router-dom';
import { IoLogoGithub } from 'react-icons/io5';
import { HiExternalLink } from 'react-icons/hi';
import { MdAdminPanelSettings } from 'react-icons/md';
import { FaHammer } from 'react-icons/fa';
import './projectcards.css';

const ProjectCards = ({ topic, img, githubRepo, projectLink, adminLink, description, ongoing }) => {
  return (
    <div className="pcard">
      {/* Image */}
      <div className="pcard-img-wrap">
        <img src={img} alt={topic} />
        {ongoing && (
          <div className="pcard-ongoing-badge">
            <FaHammer style={{ fontSize: '0.6rem' }} /> In Progress
          </div>
        )}
      </div>

      {/* Body */}
      <div className="pcard-body">
        <div className="pcard-topic">{topic}</div>

        <ul className="pcard-desc">
          {description.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>

        <div className="pcard-links">
          {githubRepo && (
            <Link to={githubRepo} target="_blank" rel="noopener noreferrer" className="pcard-link github">
              <IoLogoGithub /> GitHub
            </Link>
          )}
          {projectLink && (
            <Link to={projectLink} target="_blank" rel="noopener noreferrer" className="pcard-link live">
              <HiExternalLink /> Live Demo
            </Link>
          )}
          {adminLink && (
            <Link to={adminLink} target="_blank" rel="noopener noreferrer" className="pcard-link admin">
              <MdAdminPanelSettings /> Admin
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;