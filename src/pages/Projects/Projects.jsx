import React from 'react';
import './projects.css';
import ProjectCards from '../../components/ProjectCards/ProjectCards';

const ProjectsData = [
  {
    topic: 'Hungry Hub - Food Ordering',
    img: "food-del-ss.png",
    description: [
      'A Full Stack food Ordering application including Food Cart & Categories, Stripe Payment, Customer Care Services with realtime chatting and much more',
      'Admin Panel to Register Restaurant, Add food Items by Restaurant, Manage Orders, handle Customer Care',

    ],

    githubRepo: 'https://github.com/Kuldeepagrahari/Hungry-Hub',
    projectLink: 'https://hungry-hub-client.onrender.com/',

  },
  {
    topic: 'Promptly - AI Chat bot',
    img: 'Promptly.png',
    description: [
      'Full Stack ChatGPT clone made for seamless interaction with AI model to generate response with text and image inputs & mongodb for saving History',
      'Use Gemini API for model response, Clerk Authentication, Imagekit for image handling'
    ],
    githubRepo: 'https://github.com/Kuldeepagrahari/SamAI',
    projectLink: '',
    ongoing: 1,
  },
  {
    topic: 'AeroCare - VTOL Drone Automated App',
    img: 'aerocare.jpg',
    description: [
      'EDP Project with multiple Disciplines involved in a team to develop a production and market ready project in the domain of HealthCare & Security.',
      'Android App: Developed with React-Native with Expo and Google Map API',
      'Automations: Between Raspberry Pi and Server : Python Script for command handling, OpenCV for landing',
      'Server: Node.Js & Express.Js, providing connection between Client App and Raspberry Pi'
    ],
    githubRepo: 'https://github.com/Kuldeepagrahari/AeroCare-Mobile-App',
    projectLink: 'https://aerocare-vtol.vercel.app/',
  
  },
  {
    topic: 'Workly - Never Forget Your Tasks',
    img: 'workly.png',
    description: [
      'Full Stack Task Manager Application with Email Notifications, Dynamically update your tasks daily, weekly or datewise, keep history and in various categories with a detailed Statistics',
      'MongoDB, Express.js, React.js, Node.js, EmailJs',
    ],
    githubRepo: 'https://github.com/Kuldeepagrahari/Workly',
    projectLink: 'https://workly-client.onrender.com/',

  }, {
    topic: 'Samify - Music Streaming',
    img: 'samify-ss.png',
    description: [
      'A MERN Stack Music Streaming platform with features include Play Songs, Explore Popular Albums, Search and Filter Songs, Save Songs into Playlists, User Authentication',
      'Used Trie data structure for efficient search functionality',
      'Developed an admin panel for managing songs and albums and Cloudinary for image uploads',

    ],

    githubRepo: 'https://github.com/Kuldeepagrahari/Samify',
    projectLink: '',
    ongoing: 1,
  },

  {
    topic: 'WeatherBook - weather updater',
    img: 'weather.png',
    description: [
      'A Frontend Project to get weather updates of your City including Temperature, Wind speed, Humidity, cloud information',
      'getting response from API of OpenWeathermap Org'
    ],
    githubRepo: 'https://github.com/Kuldeepagrahari/WeatherBook',
    projectLink: 'https://weather-book-beta.vercel.app/',

  },
];

const Projects = () => {
  return (
    <div name="projects" className="pro">

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
            ongoing={project.ongoing}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
