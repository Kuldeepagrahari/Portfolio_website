import React from 'react';
import './projects.css';
import ProjectCards from '../../components/ProjectCards/ProjectCards';
// Data for projects
const ProjectsData = [
  {
    topic: 'Hungry-Hub - Food Ordering',
    img: "food-del-ss.png",
    description:[
      'A Full Stack Application to order food with all required functionalities including Food Cart, Food Categories, Stripe Payment, Customer Care Services with realtime chatting and much more',
      'Admin Panel to Register Restaurant, Add food Items by Restaurant, Manage Orders, handle Customer Care',

    ],
      
    githubRepo: 'https://github.com/Kuldeepagrahari/Hungry-Hub',
    projectLink: '',
  }, {
    topic: 'Sam AI',
    img: 'samai-ss.png',
    description:[
      'Full Stack ChatGPT clone made for seamless interaction with AI model to generate response with text and image inputs',
      'Use Gemini API for model response, Clerk for Authentication and Profile Management, Imagekit for Image storage and React for responsive and consistent UI and Node js and Express js for Server and REST API to handle user chats and MongoDB for user chats storage'
    ],
    githubRepo: 'https://github.com/Kuldeepagrahari/SamAI',
    projectLink: 'www.google.com',
  }, {
    topic: 'Samify - Music Streaming',
    img: 'samify-ss.png',
    description: [
      'A MERN Stack Music with features include Play Songs, Explore Popular Albums, Search and Filter Songs, Save Songs into Playlists, User Authentication',
      'Used Trie data structure for efficient search functionality',
      'Developed an admin panel for managing songs and albums and Cloudinary for image uploads',
      'Integrated MongoDB as the database, and built REST APIs with Express.js and Node.js for backend server'
    ],
    
    githubRepo: 'https://github.com/Kuldeepagrahari/Fitness-Planning-and-Tracking---FitCare',
    projectLink: '',
  },
];

const Projects = () => {
  return (
    <div name="projects" className="pro">
      <video autoPlay loop muted>
        <source src="background.mp4" type="video/mp4" />
       
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
