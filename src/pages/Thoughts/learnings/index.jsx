// learnings/index.js
// Add new learning components here and reference their IDs in Thoughts.jsx

import RequestFlow    from './RequestFlowDiagram';
import WhyNodeForAPIs from './WhyNodeForAPIs';
import InterviewCommunication from './InterviewCommunication';

const learningMap = {
  1: RequestFlow,
  2: WhyNodeForAPIs,
  7: InterviewCommunication,
  3: null, // DSA Mindset — coming soon
  4: null, // RBAC Patterns — coming soon
  5: null, // The Bug That Taught Me — coming soon
  6: null, // Docker for Small Projects — coming soon
};

export default learningMap;