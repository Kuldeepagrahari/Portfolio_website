// import React, { useState } from "react";

// const comparisons = [
//   { feature: "Concurrency Model",   node: "Event loop / non-blocking I/O",   thread: "Thread per request (blocking)",  winner: "node" },
//   { feature: "Best For",            node: "I/O-heavy: APIs, real-time, streaming", thread: "CPU-heavy: ML, data processing", winner: "node" },
//   { feature: "Language",            node: "JavaScript (same as frontend)",    thread: "Python / Java / C# etc.",        winner: "node" },
//   { feature: "JSON Handling",       node: "Native, zero serialization cost",  thread: "Requires parsing/serialization",  winner: "node" },
//   { feature: "Ecosystem (npm)",     node: "Largest package ecosystem",        thread: "Language-specific, varies",       winner: "node" },
//   { feature: "CPU Tasks",           node: "Poor — blocks event loop",         thread: "Excellent — dedicated threads",   winner: "thread" },
//   { feature: "Memory Usage",        node: "Low (single process)",             thread: "Higher (thread overhead)",        winner: "node" },
//   { feature: "Real-time (WS)",      node: "Native, excellent support",        thread: "Possible but more complex",       winner: "node" },
// ];

// const insights = [
//   { icon: "⚡", title: "Event Loop Explained", text: "Node.js uses libuv under the hood. The event loop processes callbacks from I/O, timers, and network — never blocking on a single operation. This is why a single Node process can handle thousands of concurrent connections." },
//   { icon: "🚫", title: "When NOT to use Node.js", text: "CPU-heavy tasks like image processing, ML inference, or cryptographic operations block the event loop. Use worker threads or offload to a Python microservice. I learned this while considering real-time video processing for AeroCare." },
//   { icon: "📐", title: "My Rule of Thumb", text: "For REST APIs, real-time systems, and anything I/O-bound — Node.js is my first choice. For data pipelines and ML integration — Python (Django). For raw performance — look at Go or Rust in the future." },
// ];

// export default function WhyNodeForAPIs() {
//   const [tab, setTab] = useState('compare');

//   return (
//     <div style={outer}>
//       <p style={intro}>
//         After building REST APIs in both Node.js and Django, here's my honest, evidence-based take on when to choose Node.js — and when not to.
//       </p>

//       {/* Tabs */}
//       <div style={tabs}>
//         <button style={{ ...tabBtn, ...(tab === 'compare' ? tabActive : {}) }} onClick={() => setTab('compare')}>Comparison</button>
//         <button style={{ ...tabBtn, ...(tab === 'insights' ? tabActive : {}) }} onClick={() => setTab('insights')}>Key Insights</button>
//       </div>

//       {tab === 'compare' && (
//         <div style={table}>
//           <div style={thead}>
//             <span style={th}>Feature</span>
//             <span style={{ ...th, color: '#68a063' }}>Node.js</span>
//             <span style={{ ...th, color: '#94a3b8' }}>Thread-based</span>
//           </div>
//           {comparisons.map(({ feature, node, thread, winner }) => (
//             <div key={feature} style={row}>
//               <span style={cell}>{feature}</span>
//               <span style={{ ...cell, color: winner === 'node' ? '#22c55e' : '#e2e8f0' }}>{node}</span>
//               <span style={{ ...cell, color: winner === 'thread' ? '#22c55e' : '#e2e8f0' }}>{thread}</span>
//             </div>
//           ))}
//         </div>
//       )}

//       {tab === 'insights' && (
//         <div style={insightList}>
//           {insights.map(({ icon, title, text }) => (
//             <div key={title} style={insightCard}>
//               <div style={insightIcon}>{icon}</div>
//               <div>
//                 <div style={insightTitle}>{title}</div>
//                 <div style={insightText}>{text}</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// const outer = { padding: '4px 0', fontFamily: "'Space Mono', monospace" };
// const intro = { fontSize: '12px', color: '#94a3b8', lineHeight: '1.6', marginBottom: '18px', fontFamily: "'Outfit', sans-serif" };
// const tabs = { display: 'flex', gap: '8px', marginBottom: '16px' };
// const tabBtn = { padding: '6px 14px', borderRadius: '6px', border: '1px solid #334155', background: '#0f172a', color: '#64748b', fontSize: '11px', cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.18s' };
// const tabActive = { background: '#1e293b', color: '#00f5d4', borderColor: '#00f5d444' };
// const table = { display: 'flex', flexDirection: 'column', gap: '1px', borderRadius: '8px', overflow: 'hidden', border: '1px solid #1e293b' };
// const thead = { display: 'grid', gridTemplateColumns: '1fr 1.2fr 1.2fr', background: '#0f172a', padding: '8px 12px', gap: '8px' };
// const th = { fontSize: '10px', fontWeight: 'bold', color: '#64748b', letterSpacing: '0.08em', textTransform: 'uppercase' };
// const row = { display: 'grid', gridTemplateColumns: '1fr 1.2fr 1.2fr', background: '#020617', padding: '8px 12px', gap: '8px', borderTop: '1px solid #0f172a' };
// const cell = { fontSize: '11px', color: '#e2e8f0', lineHeight: '1.4', fontFamily: "'Outfit', sans-serif" };
// const insightList = { display: 'flex', flexDirection: 'column', gap: '12px' };
// const insightCard = { display: 'flex', gap: '14px', padding: '14px 16px', background: '#0f172a', borderRadius: '8px', border: '1px solid #1e293b' };
// const insightIcon = { fontSize: '1.4rem', flexShrink: 0, paddingTop: '2px' };
// const insightTitle = { fontSize: '13px', fontWeight: 'bold', color: '#e2e8f0', marginBottom: '6px' };
// const insightText = { fontSize: '11px', color: '#94a3b8', lineHeight: '1.6', fontFamily: "'Outfit', sans-serif" };
import React, { useState } from "react";
import { useTheme } from "../../../hooks/useTheme";

const comparisons = [
  { feature: "Concurrency Model",   node: "Event loop / non-blocking I/O",   thread: "Thread per request (blocking)",  winner: "node" },
  { feature: "Best For",            node: "I/O-heavy: APIs, real-time, streaming", thread: "CPU-heavy: ML, data processing", winner: "node" },
  { feature: "Language",            node: "JavaScript (same as frontend)",    thread: "Python / Java / C# etc.",        winner: "node" },
  { feature: "JSON Handling",       node: "Native, zero serialization cost",  thread: "Requires parsing/serialization",  winner: "node" },
  { feature: "Ecosystem (npm)",     node: "Largest package ecosystem",        thread: "Language-specific, varies",       winner: "node" },
  { feature: "CPU Tasks",           node: "Poor — blocks event loop",         thread: "Excellent — dedicated threads",   winner: "thread" },
  { feature: "Memory Usage",        node: "Low (single process)",             thread: "Higher (thread overhead)",        winner: "node" },
  { feature: "Real-time (WS)",      node: "Native, excellent support",        thread: "Possible but more complex",       winner: "node" },
];

const insights = [
  { icon: "⚡", title: "Event Loop Explained", text: "Node.js uses libuv under the hood. The event loop processes callbacks from I/O, timers, and network — never blocking on a single operation. This is why a single Node process can handle thousands of concurrent connections." },
  { icon: "🚫", title: "When NOT to use Node.js", text: "CPU-heavy tasks like image processing, ML inference, or cryptographic operations block the event loop. Use worker threads or offload to a Python microservice. I learned this while considering real-time video processing for AeroCare." },
  { icon: "📐", title: "My Rule of Thumb", text: "For REST APIs, real-time systems, and anything I/O-bound — Node.js is my first choice. For data pipelines and ML integration — Python (Django). For raw performance — look at Go or Rust in the future." },
];

export default function WhyNodeForAPIs() {
  const { isDark, colors } = useTheme();
  const [tab, setTab] = useState('compare');

  const getTabButtonStyle = (isActive) => ({
    padding: '6px 14px',
    borderRadius: '6px',
    border: `1px solid ${isActive ? colors.borderLight : colors.border}`,
    background: isActive ? colors.bgHover : colors.bg3,
    color: isActive ? colors.tagColor || '#00f5d4' : colors.muted,
    fontSize: '11px',
    cursor: 'pointer',
    fontFamily: 'inherit',
    transition: 'all 0.18s',
  });

  const getWinnerColor = (winner) => {
    return winner === 'node' ? colors.success : colors.muted;
  };

  return (
    <div style={{ padding: '4px 0', fontFamily: "'Space Mono', monospace" }}>
      <p style={{
        fontSize: '12px',
        color: colors.muted,
        lineHeight: '1.6',
        marginBottom: '18px',
        fontFamily: "'Outfit', sans-serif",
      }}>
        After building REST APIs in both Node.js and Django, here's my honest, evidence-based take on when to choose Node.js — and when not to.
      </p>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
        <button 
          style={getTabButtonStyle(tab === 'compare')}
          onClick={() => setTab('compare')}
        >
          Comparison
        </button>
        <button 
          style={getTabButtonStyle(tab === 'insights')}
          onClick={() => setTab('insights')}
        >
          Key Insights
        </button>
      </div>

      {tab === 'compare' && (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1px',
          borderRadius: '8px',
          overflow: 'hidden',
          border: `1px solid ${colors.border}`,
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.2fr 1.2fr',
            background: colors.bg3,
            padding: '8px 12px',
            gap: '8px',
          }}>
            <span style={{
              fontSize: '10px',
              fontWeight: 'bold',
              color: colors.muted,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}>
              Feature
            </span>
            <span style={{
              fontSize: '10px',
              fontWeight: 'bold',
              color: colors.success,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}>
              Node.js
            </span>
            <span style={{
              fontSize: '10px',
              fontWeight: 'bold',
              color: colors.mutedAlt,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}>
              Thread-based
            </span>
          </div>
          {comparisons.map(({ feature, node, thread, winner }) => (
            <div 
              key={feature} 
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1.2fr 1.2fr',
                background: colors.bg,
                padding: '8px 12px',
                gap: '8px',
                borderTop: `1px solid ${colors.border}`,
              }}
            >
              <span style={{
                fontSize: '11px',
                color: colors.text,
                lineHeight: '1.4',
                fontFamily: "'Outfit', sans-serif",
              }}>
                {feature}
              </span>
              <span style={{
                fontSize: '11px',
                color: getWinnerColor(winner === 'node' ? 'node' : 'default'),
                lineHeight: '1.4',
                fontFamily: "'Outfit', sans-serif",
              }}>
                {node}
              </span>
              <span style={{
                fontSize: '11px',
                color: getWinnerColor(winner === 'thread' ? 'thread' : 'default'),
                lineHeight: '1.4',
                fontFamily: "'Outfit', sans-serif",
              }}>
                {thread}
              </span>
            </div>
          ))}
        </div>
      )}

      {tab === 'insights' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {insights.map(({ icon, title, text }) => (
            <div 
              key={title} 
              style={{
                display: 'flex',
                gap: '14px',
                padding: '14px 16px',
                background: colors.bg3,
                borderRadius: '8px',
                border: `1px solid ${colors.border}`,
              }}
            >
              <div style={{ fontSize: '1.4rem', flexShrink: 0, paddingTop: '2px' }}>
                {icon}
              </div>
              <div>
                <div style={{
                  fontSize: '13px',
                  fontWeight: 'bold',
                  color: colors.white,
                  marginBottom: '6px',
                }}>
                  {title}
                </div>
                <div style={{
                  fontSize: '11px',
                  color: colors.muted,
                  lineHeight: '1.6',
                  fontFamily: "'Outfit', sans-serif",
                }}>
                  {text}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}