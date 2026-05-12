import React, { useState } from "react";

const beforeAfter = [
  {
    aspect: "Eye Contact",
    before: "Looking down, glancing away, avoiding direct gaze",
    after: "Steady eye contact throughout — shows confidence & engagement",
    impact: "⚡ Critical"
  },
  {
    aspect: "Enthusiasm",
    before: "Monotone delivery, flat responses, lack of energy",
    after: "Animated tone, genuine excitement, energy in voice & body",
    impact: "⚡ Critical"
  },
  {
    aspect: "Pacing",
    before: "Rambling, over-explaining, getting lost in details",
    after: "Concise, to-the-point answers with structured flow",
    impact: "⚡ Critical"
  },
  {
    aspect: "Body Language",
    before: "Rigid posture, no hand movement, closed body",
    after: "Open posture, purposeful hand gestures, natural movement",
    impact: "⚡ Important"
  },
  {
    aspect: "Facial Expression",
    before: "Blank face, no smile, neutral expression",
    after: "Warm smile, nodding, expressive face that shows interest",
    impact: "⚡ Important"
  },
  {
    aspect: "Listening",
    before: "Waiting to talk, thinking ahead",
    after: "Active listening, pausing to understand, thoughtful pauses",
    impact: "⚡ Important"
  },
];

const practiceCheckpoints = [
  {
    emoji: "👀",
    title: "Eye Contact Lock",
    desc: "Maintain 70-80% eye contact. Look at bridge of nose if direct gaze feels uncomfortable. Never look away while talking."
  },
  {
    emoji: "🎤",
    title: "Energy Injection",
    desc: "Your voice should rise and fall. Emphasis on key words. Match your content's excitement with vocal tone. Practice saying the same answer in boring vs enthusiastic voice."
  },
  {
    emoji: "⏱️",
    title: "The 60-Second Rule",
    desc: "Most answers should fit in 60 seconds. Technical deep-dive? 90 seconds max. If you're talking more, you're elaborating."
  },
  {
    emoji: "🤝",
    title: "Hand Grammar",
    desc: "Use hands to emphasize: listing points (1, 2, 3), showing scale (small vs big), showing flow (before → after). NOT fidgeting or hiding."
  },
  {
    emoji: "😊",
    title: "Micro-Expressions",
    desc: "Smile when appropriate. Nod while they're talking. Show curiosity with raised eyebrows when asked a question. Your face should react naturally."
  },
  {
    emoji: "🔄",
    title: "Pause & Reflect",
    desc: "When asked something, pause for 1-2 seconds. Shows you're thinking, not just blurting. This buys time and shows maturity."
  },
];

const sampleAnswers = [
  {
    question: "Tell me about yourself",
    bad: "I'm a software engineer with 2 years of experience. I've worked on backend systems. I know JavaScript, Python, and some C++. I've done web development and infrastructure work. I've worked on APIs and databases and frontend stuff too.",
    good: "I'm a backend engineer focused on building scalable systems. My last project? Built a real-time notification service handling 10K events/sec with Node.js. I'm excited about system design — how pieces fit together under load. Beyond code, I mentor junior devs and contribute to open-source infrastructure projects."
  },
  {
    question: "What's your biggest weakness?",
    bad: "I sometimes overthink things and spend too much time on details. I can also be a perfectionist sometimes, which can slow me down.",
    good: "I used to dive too deep into optimizations before shipping. Learned this on deadline — shipped a 'good enough' feature in 3 days instead of an 'optimal' one in 2 weeks. Now I ask: 'What's the minimum viable solution?' first, then optimize."
  },
];

export default function InterviewCommunication() {
  const [tab, setTab] = useState('before-after');

  return (
    <div style={outer}>
      <p style={intro}>
        Your technical knowledge is solid. Your trainer's feedback? The missing piece isn't what you say—it's <strong>how</strong> you say it. 
        Eye contact, enthusiasm, and concise answers separate good candidates from hired ones. Here's the framework.
      </p>

      {/* Tabs */}
      <div style={tabs}>
        <button 
          style={{ ...tabBtn, ...(tab === 'before-after' ? tabActive : {}) }} 
          onClick={() => setTab('before-after')}
        >
          Before & After
        </button>
        <button 
          style={{ ...tabBtn, ...(tab === 'practice' ? tabActive : {}) }} 
          onClick={() => setTab('practice')}
        >
          Practice Checklist
        </button>
        <button 
          style={{ ...tabBtn, ...(tab === 'examples' ? tabActive : {}) }} 
          onClick={() => setTab('examples')}
        >
          Answer Examples
        </button>
      </div>

      {/* Before & After */}
      {tab === 'before-after' && (
        <div style={table}>
          <div style={thead}>
            <span style={th}>Aspect</span>
            <span style={{ ...th, color: '#ff6b6b' }}>Before (You)</span>
            <span style={{ ...th, color: '#22c55e' }}>After (Hired)</span>
            <span style={{ ...th, color: '#ffa116' }}>Priority</span>
          </div>
          {beforeAfter.map(({ aspect, before, after, impact }) => (
            <div key={aspect} style={row}>
              <span style={cell}>{aspect}</span>
              <span style={{ ...cell, color: '#ff6b6b' }}>{before}</span>
              <span style={{ ...cell, color: '#22c55e' }}>{after}</span>
              <span style={{ ...cell, color: '#ffa116' }}>{impact}</span>
            </div>
          ))}
        </div>
      )}

      {/* Practice Checklist */}
      {tab === 'practice' && (
        <div style={checklistContainer}>
          {practiceCheckpoints.map(({ emoji, title, desc }, i) => (
            <div key={title} style={{...checklistItem, ...(i % 2 === 0 ? {} : { background: '#020617' })}}>
              <div style={checklistEmoji}>{emoji}</div>
              <div>
                <div style={checklistTitle}>{title}</div>
                <div style={checklistDesc}>{desc}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Answer Examples */}
      {tab === 'examples' && (
        <div style={examplesContainer}>
          {sampleAnswers.map(({ question, bad, good }) => (
            <div key={question} style={exampleCard}>
              <div style={questionStyle}>❓ {question}</div>
              
              <div style={{...answerBlock, borderLeft: '3px solid #ff6b6b'}}>
                <div style={answerLabel}>❌ Without Enthusiasm (Lost Candidate)</div>
                <div style={answerText}>{bad}</div>
                <div style={answerHint}>→ Flat delivery, rambling, unfocused</div>
              </div>

              <div style={{...answerBlock, borderLeft: '3px solid #22c55e'}}>
                <div style={answerLabel}>✓ With Enthusiasm (Hired Candidate)</div>
                <div style={answerText}>{good}</div>
                <div style={answerHint}>→ Specific, energetic, shows impact & growth</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Key Insight */}
      <div style={insightBox}>
        <div style={{ fontSize: '1.4rem', marginBottom: '8px' }}>💡</div>
        <div style={insightTitle}>The Real Truth</div>
        <div style={insightText}>
          Interviewers already assume you can code. They're evaluating: Can you communicate clearly? 
          Do you care about the impact? Are you someone I'd want on my team? 
          Those answers come through your eyes, voice, and hands—not just your words.
        </div>
      </div>
    </div>
  );
}

const outer = { padding: '4px 0', fontFamily: "'Space Mono', monospace" };
const intro = { fontSize: '12px', color: '#94a3b8', lineHeight: '1.6', marginBottom: '18px', fontFamily: "'Outfit', sans-serif" };
const tabs = { display: 'flex', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' };
const tabBtn = { padding: '6px 14px', borderRadius: '6px', border: '1px solid #334155', background: '#0f172a', color: '#64748b', fontSize: '11px', cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.18s' };
const tabActive = { background: '#1e293b', color: '#00f5d4', borderColor: '#00f5d444' };

const table = { display: 'flex', flexDirection: 'column', gap: '1px', borderRadius: '8px', overflow: 'hidden', border: '1px solid #1e293b' };
const thead = { display: 'grid', gridTemplateColumns: '0.8fr 1.2fr 1.2fr 0.8fr', background: '#0f172a', padding: '8px 12px', gap: '8px' };
const th = { fontSize: '10px', fontWeight: 'bold', color: '#64748b', letterSpacing: '0.08em', textTransform: 'uppercase' };
const row = { display: 'grid', gridTemplateColumns: '0.8fr 1.2fr 1.2fr 0.8fr', background: '#020617', padding: '8px 12px', gap: '8px', borderTop: '1px solid #0f172a' };
const cell = { fontSize: '11px', color: '#e2e8f0', lineHeight: '1.4', fontFamily: "'Outfit', sans-serif" };

const checklistContainer = { display: 'flex', flexDirection: 'column', gap: '1px', borderRadius: '8px', overflow: 'hidden', border: '1px solid #1e293b' };
const checklistItem = { display: 'flex', gap: '14px', padding: '14px 16px', background: '#0f172a', borderTop: '1px solid #1e293b' };
const checklistEmoji = { fontSize: '1.4rem', flexShrink: 0, paddingTop: '2px' };
const checklistTitle = { fontSize: '13px', fontWeight: 'bold', color: '#e2e8f0', marginBottom: '4px' };
const checklistDesc = { fontSize: '11px', color: '#94a3b8', lineHeight: '1.5', fontFamily: "'Outfit', sans-serif" };

const examplesContainer = { display: 'flex', flexDirection: 'column', gap: '18px' };
const exampleCard = { padding: '16px', background: '#0f172a', borderRadius: '8px', border: '1px solid #1e293b' };
const questionStyle = { fontSize: '12px', fontWeight: 'bold', color: '#00f5d4', marginBottom: '12px', letterSpacing: '0.05em' };
const answerBlock = { padding: '12px 14px', borderRadius: '6px', background: '#020617', marginBottom: '10px' };
const answerLabel = { fontSize: '11px', fontWeight: 'bold', color: '#e2e8f0', marginBottom: '6px' };
const answerText = { fontSize: '11px', color: '#94a3b8', lineHeight: '1.6', marginBottom: '6px', fontStyle: 'italic' };
const answerHint = { fontSize: '10px', color: '#64748b', fontFamily: "'Space Mono', monospace" };

const insightBox = { marginTop: '20px', padding: '16px 18px', background: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px', borderLeft: '3px solid #ffa116' };
const insightTitle = { fontSize: '13px', fontWeight: 'bold', color: '#e2e8f0', marginBottom: '8px' };
const insightText = { fontSize: '11px', color: '#94a3b8', lineHeight: '1.6', fontFamily: "'Outfit', sans-serif" };