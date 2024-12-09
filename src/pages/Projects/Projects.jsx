import React from 'react';
import './projects.css';
import ProjectCards from '../../components/ProjectCards/ProjectCards';

// Data for projects
const ProjectsData = [
  {
    topic: 'Food Delivery',
    img: 'https://media.istockphoto.com/id/1824077027/photo/at-street-food-in-night-city-thailand-delivery-drivers-are-making-deliveries-to-consumers-who.webp?a=1&b=1&s=612x612&w=0&k=20&c=I1L5JvAPuJp1_9Mn_AtxiaaKCBkgbHLDbY-8kXOTl9k=',
    description:
      'A food delivery application built using modern frameworks to ensure smooth user experiences, reliable delivery tracking, and more.',
    githubRepo: 'https://github.com/Kuldeepagrahari',
    projectLink: 'www.google.com',
  },
];

const Projects = () => {
  return (
    <div name="projects" className="pro">
      {/* Giphy Embed */}
      <div style={{ width: '100%', height: '0', paddingBottom: '56.25%', position: 'relative' }}>
        <iframe
          src="https://giphy.com/embed/l41JS0g6UPOoKV7Z6"
          width="100%"
          height="100%"
          style={{ position: 'absolute' }}
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
          title="Giphy Embed"
        ></iframe>
      </div>
      <p>
        <a href="https://giphy.com/gifs/animation-space-explosion-l41JS0g6UPOoKV7Z6" target="_blank" rel="noopener noreferrer">
          via GIPHY
        </a>
      </p>

      {/* Project Header */}
      <h1 style={{ fontSize: '80px', color: 'tomato' }}>My Recent Projects</h1>

      {/* Project Cards */}
      <div className="projectCardCollection">
        {ProjectsData.map((project, index) => (
          <ProjectCards
            key={index}
            topic={project.topic}
            img={project.img}
            githubRepo={project.githubRepo}
            projectLink={project.projectLink}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
