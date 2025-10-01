import React from 'react';
import './achievements.css';
import { FaGithub } from 'react-icons/fa';
import { SiCodechef, SiGeeksforgeeks, SiLeetcode } from 'react-icons/si';

const achievements = [
  {
    platform: 'GitHub',
    icon: <FaGithub className="ach-icon" />,
    description: '1000+ Contributions and 60+ Repositories (Active Since 2024)',
    profile: 'https://github.com/Kuldeepagrahari',
    username: 'Kuldeepagrahari',
  },
  {
    platform: 'CodeChef',
    icon: <SiCodechef className="ach-icon" />,
    description: '3-Star (Max Rating: 1650+)',
    profile: 'https://www.codechef.com/users/kuldeep_106',
    username: 'kuldeep_106',
  },
  {
    platform: 'GeeksforGeeks',
    icon: <SiGeeksforgeeks className="ach-icon" />,
    description: '4-Star, Top 6.75%, Top 20 All-Time College Rank',
    profile: 'https://www.geeksforgeeks.org/user/kuldeepagre919',
    username: 'kuldeepagre919',
  },
  {
    platform: 'LeetCode',
    icon: <SiLeetcode className="ach-icon" />,
    description: 'Knight Badge, Top 5%, 600+ Problems Solved',
    profile: 'https://leetcode.com/kuldeep144/',
    username: 'kuldeep144',
  },
];

const Achievements = () => {
  return (
    <div className="achievements-section">
      <h1 className="ach-heading">Achievements</h1>
      <div className="ach-card-container">
        {achievements.map((item, index) => (
          <div className="ach-card" key={index}>
            {item.icon}
            <h2>{item.platform}</h2>
            <p>{item.description}</p>
            <a href={item.profile} target="_blank" rel="noopener noreferrer">
              @{item.username}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
