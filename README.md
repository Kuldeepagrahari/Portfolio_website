<div align="center">

# Kuldeep Agrahari — Developer Portfolio

**Backend-focused Software Engineer · Final Year CSE · PDPM IIIT Jabalpur**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Portfolio-00f5d4?style=for-the-badge&logo=vercel&logoColor=black)](https://my-portfolio-weld-beta-40.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-Kuldeepagrahari-181717?style=for-the-badge&logo=github)](https://github.com/Kuldeepagrahari)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/Kuldeepagrahari/)

</div>

---

## 🖥️ Live Preview

![Home](https://github.com/user-attachments/assets/ee0d3b32-a159-4a54-a151-5d6cef8f1816)

---

## 📖 Overview

A modern, dark-themed developer portfolio built with **React.js** and **Framer Motion**. Designed around a **Noir Technik** aesthetic — deep charcoal backgrounds, electric teal accents, and bold condensed typography. Every section is scroll-tracked, fully responsive, and built to perform well from desktop down to 380px mobile screens.

Built as a living document — content and interactive notes grow as I build and learn.

---

## ✨ Features

### 🎨 Design System
- **Noir Technik** theme — `#06060f` base, `#00f5d4` teal accent, `#ff4e00` orange secondary
- Custom CSS variable system (`global.css`) shared across all components
- `Barlow Condensed` (display) · `Outfit` (body) · `Space Mono` (code/labels) font stack
- Ambient background orbs, dot-grid backgrounds, and layered glassmorphism effects

### 🏠 Home
- Typewriter role animation (`react-simple-typewriter`)
- Large outlined name with cyan accent on `HARI`
- Rotating animated focus tags (Backend Development → APIs → Problem Solving → System Fundamentals)
- Desktop: circular profile photo with dual spinning ring frames and 6 floating tech badges
- Mobile: compact right-aligned photo beside tagline, no layout shift
- Clean 2-button CTA layout on mobile (Resume full-width · Work + GitHub + LinkedIn in one row)
- Inline tech icon strip on mobile
- 2×2 stat grid at the bottom (3+ years · 7+ projects · 1200+ DSA · 1400+ GitHub)

### 👤 About
- Engineering-focused bio (not generic)
- 4 impact metrics: 15+ APIs · 1200+ DSA · 1400+ commits · 20+ mentored
- **Architecture Highlights** strip — 3 real projects with actual stack and one-line architecture note
- "What I Build" cards: Backend Systems · Distributed System Exposure · Full Stack & Mobile
- Profile photo with corner bracket accents and floating "Backend Engineer · Open to Roles" badge

### ⚡ Skills
- **3D rotating sphere** — Fibonacci sphere distribution, 28 tags orbit in real-time (pure JS/DOM, no library)
- **7 category tabs** — Backend, Frontend, Database, Languages, Cloud & DevOps, Distributed Systems, Tools
- Each tech card shows icon + name + one-line context note
- Horizontally scrollable tabs on mobile (no wrapping, no reflow)
- Typewriter moves below title on mobile (eliminates layout shift)
- Sphere hidden on mobile; clean tab+card layout takes over
- Soft skills strip at the bottom

### 💼 Work (Projects + Experience)
- Tabbed layout: **Projects** tab and **Experience** tab in one section
- Projects: auto-fill card grid with image, description, GitHub/Live/Admin links, "In Progress" badge
- Experience: timeline cards for **Fusion ERP (Backend)** and **AeroCare (Mobile/Backend)**
- All data matches resume — exact bullet points, tech tags, dates

### 🏆 Achievements
- Platform cards: LeetCode (700+ · Knight Badge) · GFG (500+ · 4★) · GitHub (1400+) · CodeChef (3★ · 1650+)
- Each card shows large stat number with brand-accurate icon color
- Mentor card with BitByte Programming Club logo (`tpc.png`) — responsive across all breakpoints

### 🎓 Education
- Sticky left heading + right vertical timeline
- Glowing dot connectors per entry
- Year badge chip, school name, percentage/score

### 📝 Dev Notes (Engineering Notes)
- 6 engineering notes with modal-based reading experience
- Click "Open →" → full-screen blur modal renders interactive content
- ESC / click-outside / X button closes modal
- **`learnings/` folder** — each note is a standalone React component:
  - `RequestFlow.jsx` — click-to-expand 11-step request lifecycle diagram
  - `NodeVsDjango.jsx` — 3-tab comparison (observations · when Node · when Django)
  - Future notes map to `null` → "Still Writing This One" state
- `learnings/index.js` — simple map of `thoughtId → component`, easy to extend
- Tone: learner documenting real project observations, not expert explanations

### 📬 Contact
- Left panel: heading + description + email + phone + location + social links + availability badge
- Right panel: clean form with labeled fields, focus glow states
- Success/error status with styled feedback
- EmailJS integration

### 🔗 Follow / Footer
- CSS-only infinite marquee strip
- Brand block + social icon grid
- Copyright bar

### 🧭 Navigation
- Fixed 180px sidebar on desktop with icon + label items
- Active indicator: left border glow + background gradient
- **Scroll-tracked active state** — `IntersectionObserver` in `Display.jsx` detects which section is in view and updates nav automatically. No more stale active state on scroll.
- Full-screen overlay on mobile with staggered Framer Motion entrance
- Resume button at bottom of sidebar

---

## 🗂️ Section Order

Optimised for hiring manager scroll attention:

```
Home → About → Work → Skills → Achievements → Education → Dev Notes → Contact → Follow
```

---

## 🛠️ Tech Stack

| Layer | Tech |
|---|---|
| Framework | React.js (Vite) |
| Animations | Framer Motion |
| Icons | React Icons |
| Typewriter | react-simple-typewriter |
| Email | EmailJS |
| 3D Sphere | Vanilla JS + requestAnimationFrame |
| Fonts | Google Fonts (Barlow Condensed, Outfit, Space Mono) |
| Deployment | Vercel |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar/
│   │   ├── Nav.jsx          # Scroll-tracked active state via IntersectionObserver
│   │   └── nav.css
│   └── Footer/
│       ├── Footer.jsx       # Marquee strip + social links
│       └── footer.css
│
├── pages/
│   ├── Home/                # Typewriter · photo frame · floating badges · stats
│   ├── About/               # Bio · metrics · architecture highlights · What I Build
│   ├── Work/                # Tabbed: Projects + Experience
│   ├── Skills/              # 3D sphere · category tabs · tech cards
│   ├── Achievements/        # Platform stats · mentor card
│   ├── Education/           # Timeline with sticky header
│   ├── Thoughts/            # Dev Notes with modal system
│   │   ├── Thoughts.jsx
│   │   ├── thoughts.css
│   │   └── learnings/
│   │       ├── index.js          # thoughtId → component map
│   │       ├── RequestFlow.jsx   # Interactive request lifecycle
│   │       └── NodeVsDjango.jsx  # Tabbed framework comparison
│   └── Contact/             # EmailJS form · info panel
│
├── Display.jsx              # Root layout · IntersectionObserver scroll tracking
├── global.css               # CSS variables · shared utilities · orb classes
├── display.css
└── index.css
```


---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/Kuldeepagrahari/my-portfolio.git

# Install dependencies
cd my-portfolio
npm install

# Start dev server
npm run dev
```

### Add your profile photo
Place your photo as `profile.png` in the `/public` folder.

### Configure EmailJS
In `Contact.jsx`, replace the three constants with your EmailJS credentials:
```js
emailjs.sendForm(
  "YOUR_SERVICE_ID",
  "YOUR_TEMPLATE_ID",
  form.current,
  "YOUR_PUBLIC_KEY"
)
```

### Add a Dev Note
1. Create `src/pages/Thoughts/learnings/YourNote.jsx` — export a default React component
2. Import it in `learnings/index.js` and add `id: YourComponent`
3. Set `hasContent: true` in the matching entry in `Thoughts.jsx`

---

## 📬 Contact

| | |
|---|---|
| Email | kuldeepagrahari9103@gmail.com |
| Phone | +91 88718 05535 |
| Location | Prayagraj, Uttar Pradesh, India |
| LinkedIn | [Kuldeepagrahari](https://www.linkedin.com/in/Kuldeepagrahari/) |
| LeetCode | [kuldeep144](https://leetcode.com/kuldeep144/) — Knight Badge · 700+ problems |
| GeeksForGeeks | [kuldeepagre919](https://www.geeksforgeeks.org/user/kuldeepagre919) — 4★ · Top-15 in the college |

---

<div align="center">

Designed & built by **Kuldeep Agrahari**  
B.Tech CSE · PDPM IIIT Jabalpur · 2022–2026

</div>
