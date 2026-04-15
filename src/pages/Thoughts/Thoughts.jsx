import React, { useState } from 'react';
import { HiArrowRight, HiClock, HiTag } from 'react-icons/hi';
import { FaRocket, FaBrain, FaCode, FaTools, FaLightbulb, FaServer } from 'react-icons/fa';
import './thoughts.css';

const thoughts = [
  {
    id: 1,
    icon: FaServer,
    tag: 'Backend',
    tagColor: '#00f5d4',
    date: 'Apr 2025',
    readTime: '3 min',
    title: 'Why I Choose Node.js for Scalable APIs',
    excerpt: 'Event-driven, non-blocking I/O isn\'t just a buzzword. After building 15+ REST APIs across multiple projects, here\'s what I\'ve learned about when Node.js shines — and when it doesn\'t.',
    featured: true,
  },
  {
    id: 2,
    icon: FaBrain,
    tag: 'DSA',
    tagColor: '#ffa116',
    date: 'Mar 2025',
    readTime: '4 min',
    title: 'Solving 1200+ Problems Taught Me This',
    excerpt: 'Pattern recognition over memorization. After grinding LeetCode, GFG and CodeChef for 2+ years, the real insight wasn\'t the algorithms — it was how to think about problems differently.',
    featured: false,
  },
  {
    id: 3,
    icon: FaTools,
    tag: 'DevOps',
    tagColor: '#2bb600',
    date: 'Feb 2025',
    readTime: '2 min',
    title: 'Docker Changed How I Think About Deployment',
    excerpt: '"Works on my machine" is a solved problem. Containerization isn\'t just about deployment — it\'s a mindset shift towards reproducibility and environment parity.',
    featured: false,
  },
  {
    id: 4,
    icon: FaCode,
    tag: 'Architecture',
    tagColor: '#7b5ea7',
    date: 'Jan 2025',
    readTime: '5 min',
    title: 'RBAC Design Patterns That Actually Work',
    excerpt: 'After implementing role-based access control for an ERP serving 2500+ users, I learned that permissions are rarely simple. Here\'s the pattern I\'d use again.',
    featured: false,
  },
  {
    id: 5,
    icon: FaRocket,
    tag: 'Projects',
    tagColor: '#ff4e00',
    date: 'Dec 2024',
    readTime: '4 min',
    title: 'Building a Real-Time Drone Control System',
    excerpt: 'When hardware meets software, latency becomes personal. Lessons from integrating a React Native app with Raspberry Pi hardware through an Express.js backend.',
    featured: false,
  },
  {
    id: 6,
    icon: FaLightbulb,
    tag: 'Learning',
    tagColor: '#4a9eff',
    date: 'Nov 2024',
    readTime: '3 min',
    title: 'Kafka: From Concept to Production Pipeline',
    excerpt: 'Message queues sound simple until you\'re processing 1000+ packets per minute. My experience building a streaming architecture for a network monitoring system.',
    featured: false,
  },
];

const Thoughts = () => {
  const [expanded, setExpanded] = useState(null);
  const featured = thoughts.find(t => t.featured);
  const rest = thoughts.filter(t => !t.featured);

  return (
    <div className="thoughts">
      <div className="tg-orb tg-orb--cyan"   />
      <div className="tg-orb tg-orb--orange" />

      <div className="thoughts-inner">

        {/* Header */}
        <div className="thoughts-header">
          <div>
            <div className="section-chip">Writing</div>
            <h2 className="thoughts-title">
              <span className="tt-solid">Thoughts</span>
              <span className="tt-outline">&amp; Insights</span>
            </h2>
          </div>
          <p className="thoughts-subtitle">
            Things I've learned building real systems —<br />
            no fluff, just honest engineering notes.
          </p>
        </div>

        {/* Featured post */}
        {featured && (
          <div className="tg-featured" style={{ '--tc': featured.tagColor }}>
            <div className="tgf-label">
              <featured.icon /> Featured
            </div>
            <div className="tgf-body">
              <div className="tgf-meta">
                <span className="tg-tag" style={{ '--tc': featured.tagColor }}>
                  <HiTag /> {featured.tag}
                </span>
                <span className="tg-time"><HiClock /> {featured.readTime} read</span>
                <span className="tg-date">{featured.date}</span>
              </div>
              <h3 className="tgf-title">{featured.title}</h3>
              <p className="tgf-excerpt">{featured.excerpt}</p>
              <button className="tg-read-btn" style={{ '--tc': featured.tagColor }}>
                Read More <HiArrowRight />
              </button>
            </div>
            <div className="tgf-icon-wrap">
              <featured.icon className="tgf-bg-icon" />
            </div>
          </div>
        )}

        {/* Rest grid */}
        <div className="thoughts-grid">
          {rest.map(({ id, icon: Icon, tag, tagColor, date, readTime, title, excerpt }) => (
            <div
              className={`tg-card ${expanded === id ? 'expanded' : ''}`}
              key={id}
              style={{ '--tc': tagColor }}
            >
              <div className="tgc-top">
                <div className="tgc-icon-wrap">
                  <Icon className="tgc-icon" />
                </div>
                <div className="tgc-meta">
                  <span className="tg-tag" style={{ '--tc': tagColor }}>
                    <HiTag /> {tag}
                  </span>
                  <span className="tg-time"><HiClock /> {readTime}</span>
                </div>
              </div>

              <h3 className="tgc-title">{title}</h3>
              <p className={`tgc-excerpt ${expanded === id ? 'show' : ''}`}>{excerpt}</p>

              <div className="tgc-footer">
                <span className="tg-date">{date}</span>
                <button
                  className="tgc-expand"
                  onClick={() => setExpanded(expanded === id ? null : id)}
                >
                  {expanded === id ? 'Collapse' : 'Read more'} <HiArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom quote */}
        <div className="thoughts-quote">
          <span className="tq-mark">"</span>
          The best code is the code you delete. The best systems are the ones that don't need you.
          <span className="tq-attr">— Something I believe</span>
        </div>

      </div>
    </div>
  );
};

export default Thoughts;