// learnings/index.js
// Add new learning components here and reference their IDs in Thoughts.jsx

import RequestFlow    from './RequestFlowDiagram';
import WhyNodeForAPIs from './WhyNodeForAPIs';

// Map: thought.id → learning component
// If a thought has no learning yet, map it to null (shows "Coming Soon")
const learningMap = {
  1: RequestFlow,
  2: WhyNodeForAPIs,
  3: null, // DSA Mindset — coming soon
  4: null, // Docker Changed Deployment — coming soon
  5: null, // RBAC Patterns — coming soon
  6: null, // Kafka vs HTTP — coming soon
};

export default learningMap;