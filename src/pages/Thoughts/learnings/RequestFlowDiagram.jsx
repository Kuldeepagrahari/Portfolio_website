import React, { useState } from "react";

const steps = [
  { text: "Client (Browser / Mobile App)",    tag: "Mandatory", detail: "The user initiates a request — a typed URL, button click, or API call from your frontend." },
  { text: "DNS Resolution",                   tag: "Mandatory", detail: "DNS translates the domain (e.g. api.example.com) to an IP address. This is cached at multiple layers — browser, OS, ISP, and root servers." },
  { text: "TCP Connection",                   tag: "Mandatory", detail: "A reliable connection is established using the 3-way handshake: SYN → SYN-ACK → ACK. This ensures ordered, error-checked delivery." },
  { text: "TLS / HTTPS Handshake",            tag: "Optional",  detail: "If HTTPS is used, TLS negotiates encryption keys (via certificate exchange). Adds ~1–2 round trips but ensures secure, encrypted communication." },
  { text: "Internet Routing",                 tag: "Mandatory", detail: "Packets travel through multiple routers using BGP protocol. Each hop routes your packet closer to the destination IP." },
  { text: "CDN / Edge Layer",                 tag: "Optional",  detail: "Cloudflare, Akamai etc. serve cached static assets from servers geographically close to the user. Reduces latency significantly." },
  { text: "Load Balancer",                    tag: "Optional",  detail: "Distributes incoming requests across multiple app servers using algorithms like Round Robin, Least Connections, or IP Hash." },
  { text: "Reverse Proxy (e.g. Nginx)",       tag: "Optional",  detail: "Nginx sits in front of app servers to terminate SSL, serve static files, rate-limit, and forward dynamic requests to Node.js / Django." },
  { text: "Application Server",               tag: "Mandatory", detail: "Your backend code runs here — processes business logic, validates inputs, queries DB, and builds a response. This is where your Node.js or Django app lives." },
  { text: "Database / Cache Layer",           tag: "Optional",  detail: "Redis is checked first (cache hit). On miss, the query goes to PostgreSQL/MongoDB. ORM translates objects to SQL. Indexes speed up queries." },
  { text: "Response (same path back)",        tag: "Mandatory", detail: "The response travels back through the same layers in reverse: App → Proxy → LB → Internet → Client. JSON/HTML is rendered by the browser." },
];

const tagStyle = { Mandatory: '#22c55e', Optional: '#f59e0b' };

export default function RequestFlow() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <div style={outer}>
      <p style={intro}>
        Every URL request you make traverses up to 11 distinct layers before you see a response.
        Click any step to understand what's actually happening.
      </p>

      <div style={flow}>
        {steps.map((step, i) => (
          <div key={i} style={stepWrap}>
            <div
              style={{
                ...box,
                background: openIdx === i ? '#1e293b' : '#0f172a',
                borderColor: openIdx === i ? tagStyle[step.tag] + '66' : '#334155',
                cursor: 'pointer',
              }}
              onClick={() => setOpenIdx(openIdx === i ? null : i)}
            >
              {/* Step number */}
              <span style={stepNum}>{String(i + 1).padStart(2, '0')}</span>
              <span style={stepText}>{step.text}</span>
              <span style={{ ...tagBadge, background: tagStyle[step.tag] }}>
                {step.tag}
              </span>
              <span style={chevron}>{openIdx === i ? '▲' : '▼'}</span>
            </div>

            {/* Expandable detail */}
            {openIdx === i && (
              <div style={detailBox}>
                {step.detail}
              </div>
            )}

            {i !== steps.length - 1 && (
              <div style={arrow}>↓</div>
            )}
          </div>
        ))}
      </div>

      {/* Legend */}
      <div style={legend}>
        <div style={legendItem}><span style={{ ...dot, background: '#22c55e' }} />Mandatory — always present</div>
        <div style={legendItem}><span style={{ ...dot, background: '#f59e0b' }} />Optional — depends on architecture</div>
      </div>
    </div>
  );
}

const outer = {
  padding: '4px 0',
  fontFamily: "'Space Mono', 'Courier New', monospace",
};
const intro = {
  fontSize: '12px', color: '#94a3b8', lineHeight: '1.6',
  marginBottom: '20px', fontFamily: 'inherit',
};
const flow = { display: 'flex', flexDirection: 'column', alignItems: 'center' };
const stepWrap = { display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: '520px' };
const box = {
  position: 'relative',
  display: 'flex', alignItems: 'center', gap: '10px',
  padding: '10px 14px',
  border: '1px solid #334155', borderRadius: '8px',
  color: '#e2e8f0', width: '100%', fontSize: '12px',
  transition: 'all 0.18s ease',
};
const stepNum = { fontSize: '10px', color: '#475569', fontWeight: 'bold', minWidth: '20px' };
const stepText = { flex: 1, textAlign: 'left' };
const tagBadge = {
  fontSize: '9px', padding: '2px 7px', borderRadius: '4px',
  color: '#000', fontWeight: 'bold', flexShrink: 0,
};
const chevron = { fontSize: '9px', color: '#64748b', flexShrink: 0 };
const detailBox = {
  width: '100%', maxWidth: '520px',
  background: '#0a0f1e', border: '1px solid #1e293b',
  borderTop: 'none', borderRadius: '0 0 8px 8px',
  padding: '10px 14px',
  fontSize: '11px', color: '#94a3b8', lineHeight: '1.6',
  fontFamily: "'Outfit', sans-serif",
};
const arrow = { margin: '5px 0', color: '#334155', fontSize: '14px' };
const legend = { display: 'flex', gap: '20px', marginTop: '20px', justifyContent: 'center', flexWrap: 'wrap' };
const legendItem = { display: 'flex', alignItems: 'center', gap: '7px', fontSize: '10px', color: '#64748b' };
const dot = { width: '8px', height: '8px', borderRadius: '50%', display: 'inline-block', flexShrink: 0 };