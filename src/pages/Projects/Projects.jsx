import React from 'react';
import './projects.css';
import ProjectCards from '../../components/ProjectCards/ProjectCards';
import video from "../../../public/background.mp4"
// Data for projects
const ProjectsData = [
  {
    topic: 'Food Delivery',
    img: 'https://media.istockphoto.com/id/1824077027/photo/at-street-food-in-night-city-thailand-delivery-drivers-are-making-deliveries-to-consumers-who.webp?a=1&b=1&s=612x612&w=0&k=20&c=I1L5JvAPuJp1_9Mn_AtxiaaKCBkgbHLDbY-8kXOTl9k=',
    description:
      'A food delivery application built using modern frameworks to ensure smooth user experiences, reliable delivery tracking, and more.',
    githubRepo: 'https://github.com/Kuldeepagrahari/Hungry-Hub',
    projectLink: 'www.google.com',
  }, {
    topic: 'Sam AI',
    img: 'https://media.istockphoto.com/id/1824077027/photo/at-street-food-in-night-city-thailand-delivery-drivers-are-making-deliveries-to-consumers-who.webp?a=1&b=1&s=612x612&w=0&k=20&c=I1L5JvAPuJp1_9Mn_AtxiaaKCBkgbHLDbY-8kXOTl9k=',
    description:
      'Full Stack ChatGPT clone made for seamless interaction with AI model to generate response with text and image inputs',
    githubRepo: 'https://github.com/Kuldeepagrahari/SamAI',
    projectLink: 'www.google.com',
  }, {
    topic: 'FitCare',
    img: 'https://media.istockphoto.com/id/1824077027/photo/at-street-food-in-night-city-thailand-delivery-drivers-are-making-deliveries-to-consumers-who.webp?a=1&b=1&s=612x612&w=0&k=20&c=I1L5JvAPuJp1_9Mn_AtxiaaKCBkgbHLDbY-8kXOTl9k=',
    description:
      'A health Tracking, Planning, Recommendation, blog and chat application, build from scratch all the functionalities included advanced Authentication , notification, dashboard to track, blog page to post and explore blogs related to health and chat with other users on the platform to know experiences one to one',
    githubRepo: 'https://github.com/Kuldeepagrahari/Fitness-Planning-and-Tracking---FitCare',
    projectLink: 'www.google.com',
  },
];

const Projects = () => {
  return (
    <div name="projects" className="pro">
      <video autoPlay loop muted>
        <source src={video} type="video/mp4" />
       
      </video>
      <h1>My Recent Projects</h1>

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
