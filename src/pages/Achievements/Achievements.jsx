// import React from 'react';
// import './achievements.css';
// import { FaGithub } from 'react-icons/fa';
// import { SiCodechef, SiGeeksforgeeks, SiLeetcode } from 'react-icons/si';

// const achievements = [
//   {
//     platform: 'GitHub',
//     icon: <FaGithub className="ach-icon" />,
//     description: '1000+ Contributions and 60+ Repositories (Active Since 2024)',
//     profile: 'https://github.com/Kuldeepagrahari',
//     username: 'Kuldeepagrahari',
//   },
//   {
//     platform: 'CodeChef',
//     icon: <SiCodechef className="ach-icon" />,
//     description: '3-Star (Max Rating: 1650+)',
//     profile: 'https://www.codechef.com/users/kuldeep_106',
//     username: 'kuldeep_106',
//   },
//   {
//     platform: 'GeeksforGeeks',
//     icon: <SiGeeksforgeeks className="ach-icon" />,
//     description: '4-Star, Top 6.75%, Top 20 All-Time College Rank',
//     profile: 'https://www.geeksforgeeks.org/user/kuldeepagre919',
//     username: 'kuldeepagre919',
//   },
//   {
//     platform: 'LeetCode',
//     icon: <SiLeetcode className="ach-icon" />,
//     description: 'Knight Badge, Top 5%, 600+ Problems Solved',
//     profile: 'https://leetcode.com/kuldeep144/',
//     username: 'kuldeep144',
//   },
// ];

// const Achievements = () => {
//   return (
//     <div className="achievements-section">
//       <h1 className="ach-heading">Achievements</h1>
//       <div className="ach-card-container">
//         {achievements.map((item, index) => (
//           <div className="ach-card" key={index}>
//             {item.icon}
//             <h2>{item.platform}</h2>
//             <p>{item.description}</p>
//             <a href={item.profile} target="_blank" rel="noopener noreferrer">
//               @{item.username}
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Achievements;
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { SiCodechef, SiGeeksforgeeks, SiLeetcode } from 'react-icons/si';
import { HiUsers, HiExternalLink } from 'react-icons/hi';
import './achievements.css';

const achievements = [
  {
    platform: 'LeetCode',
    Icon: SiLeetcode,
    stat: '700+',
    statLabel: 'Problems Solved',
    description: 'Knight Badge · Top 5% globally on the platform.',
    profile: 'https://leetcode.com/kuldeep144/',
    username: 'kuldeep144',
    accent: '#ffa116',
  },
  {
    platform: 'GeeksForGeeks',
    Icon: SiGeeksforgeeks,
    stat: '500+',
    statLabel: 'Problems Solved',
    description: '4-Star rating · Top-15 All-Time College Leaderboard.',
    profile: 'https://www.geeksforgeeks.org/user/kuldeepagre919',
    username: 'kuldeepagre919',
    accent: '#2bb600',
  },
  {
    platform: 'GitHub',
    Icon: FaGithub,
    stat: '1400+',
    statLabel: 'Contributions',
    description: '70+ repositories · Consistent collaborative development since 2023.',
    profile: 'https://github.com/Kuldeepagrahari',
    username: 'Kuldeepagrahari',
    accent: '#e0e0e0',
  },
  {
    platform: 'CodeChef',
    Icon: SiCodechef,
    stat: '3★',
    statLabel: 'Rating',
    description: 'Max Rating 1650+ · Strong competitive programming fundamentals.',
    profile: 'https://www.codechef.com/users/kuldeep_106',
    username: 'kuldeep_106',
    accent: '#e58e00',
  },
];

const extras = [
  {
    Icon: "tpc.png",
    title: 'Programming Mentor',
    description: 'Mentored 20+ students at BitByte Programming Club, IIITDMJ, focusing on DSA fundamentals and problem-solving strategies.',
    accent: '#00f5d4',
  },
];

const Achievements = () => {
  return (
    <div className="achievements">
      <div className="orb orb-orange" style={{ width: 400, height: 400, top: '-80px', right: '5%', position: 'absolute' }} />
      <div className="orb orb-cyan"   style={{ width: 280, height: 280, bottom: '40px', left: '280px', position: 'absolute' }} />

      <div className="achievements-inner">
        <div className="achievements-header">
          <div className="section-chip">Competitive Programming</div>
          <h2 className="achievements-title">
            <span className="line1">Achievements</span>
            <span className="line2">&amp; Platforms</span>
          </h2>
        </div>

        {/* Platform cards */}
        <div className="ach-grid">
          {achievements.map(({ platform, Icon, stat, statLabel, description, profile, username, accent }) => (
            <div className="ach-card" key={platform} style={{ '--ach-accent': accent }}>
              <div className="ach-platform-row">
                <Icon className="ach-icon" style={{ color: accent }} />
                <span className="ach-platform-name">{platform}</span>
              </div>
              <div className="ach-stat-row">
                <span className="ach-stat-num" style={{ color: accent }}>{stat}</span>
                <span className="ach-stat-label">{statLabel}</span>
              </div>
              <p className="ach-description">{description}</p>
              <a href={profile} target="_blank" rel="noopener noreferrer" className="ach-username">
                <HiExternalLink /> @{username}
              </a>
            </div>
          ))}
        </div>

        {/* Extra card — mentor */}
        <div className="ach-extras">
          {extras.map(({ Icon, title, description, accent }) => (
            <div className="ach-extra-card" key={title}>
              <Icon className="ach-extra-icon" style={{ color: accent }} />
              <img src="tpc.png" alt="tpc_logo"  style={{ borderRadius: "10px", width:"5vw"}} />
              <div>
                <div className="ach-extra-title">{title}</div>
                <p className="ach-description">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;