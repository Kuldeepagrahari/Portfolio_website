// learnings/index.js
// Add new learning components here and reference their IDs in Thoughts.jsx
// These components now support light/dark mode via useTheme hook

import RequestFlow    from './RequestFlowDiagram';
import WhyNodeForAPIs from './WhyNodeForAPIs';
import InterviewCommunication from './InterviewCommunication';

// Map: thought.id → learning component
// If a thought has no learning yet, map it to null (shows "Coming Soon")
const learningMap = {
  1: RequestFlow,              // System Design - Request Flow Diagram
  2: WhyNodeForAPIs,           // Backend - Node.js vs Django
  7: InterviewCommunication,   // Communication - Interview Skills
  3: null,                     // DSA Mindset — coming soon
  4: null,                     // RBAC Patterns — coming soon
  5: null,                     // The Bug That Taught Me — coming soon
  6: null,                     // Docker for Small Projects — coming soon
};

export default learningMap;