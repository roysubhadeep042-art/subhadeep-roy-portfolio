# Subhadeep Roy (শুভদীপ রায়) — Portfolio & AI Systems Showcase

> **Detail-Oriented Writer and Analyst | AI Content Specialist | Educator | Full-Stack AI Builder**  
> B.Tech in Electrical Engineering (NIT Silchar) · 8+ Years Pedagogy · RLHF & Prompt Engineering Specialist

---

## 🛡️ 1. Cybersecurity, Privacy & Production Hardening

This portfolio is engineered with defense-in-depth principles:
- **Zero Raw PII Exposure:**
  - Email (`roy.subhadeep042@gmail.com`) is never hardcoded as raw readable text or static `mailto:` links in the HTML source. It is assembled dynamically at client runtime via JavaScript: `['roy.subhadeep042', 'gmail.com'].join('@')` and accompanied by a one-click **Copy Email** action.
  - Zero local machine paths (`C:\...`, `localhost`) or personal phone numbers are present anywhere on the public site.
- **Form Input Sanitization & Anti-Bot Honeypot:**
  - Input sanitizer strips `<` and `>` tags, removes dangerous ASCII control characters, and enforces strict character limits.
  - Includes a hidden honeypot trap field (`website_check`) to block automated bot submissions.
  - Form mailto URLs are strictly generated using `encodeURIComponent()` to avoid header or parameter injection.
- **Link Safety:**
  - Every external URL (`https://ashuaitosh.vercel.app`, `https://bharat-knowledge-hub.netlify.app`, `https://www.linkedin.com/in/subhadeep-roy-5bb3a6110`) strictly enforces `target="_blank" rel="noopener noreferrer"`.
- **Zero Third-Party Trackers:**
  - No analytics trackers, no tracking pixels, no advertising cookies, no `eval()`, and no `dangerouslySetInnerHTML`.
- **Vercel HTTP Security Headers (`vercel.json`):**
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: DENY`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy: camera=(), microphone=(), geolocation=()`
  - Clean `Content-Security-Policy` permitting self-hosted assets and Google Fonts.

---

## 🎨 2. Design & Craft Aesthetic

- **Dual-Language Branding:** Signature branding displays **শুভদীপ রায়** alongside **Subhadeep Roy** across the sticky navbar, hero, and footer.
- **Theme Support:** Seamless Dark / Light mode toggle (defaults to an obsidian dark theme with cyan, emerald, and amber accents).
- **Print / Save CV Mode:** Clicking the **"Print / Save CV"** button triggers `window.print()` with a dedicated print stylesheet (`@media print`) rendering an executive curriculum vitae formatted for standard A4/Letter paper.

---

## 🚀 3. Shipped AI Projects

### 1. TIYAN AI — Offline-First Windows Desktop AI Companion (`v0.1.0`)
- **Category:** `Desktop AI & Local LLMs`
- **Stack:** Electron, React, TypeScript, Tailwind CSS, SQLite (`sql.js`), Multi-LLM Failover Gateway, Ollama, Windows `System.Speech`.
- **Highlights:** Dual-engine desktop assistant routing between local Ollama models and cloud failover combos; 100% offline Windows-native speech recognition & TTS; local SQLite persistent memory; permission-gated workspace tools for inspecting and editing local codebases with human confirmation.

### 2. AshuAITosh — AI Teaching Assistant for Assam
- **Category:** `EdTech & AI Web Apps`
- **Live URL:** [ashuaitosh.vercel.app](https://ashuaitosh.vercel.app)
- **Stack:** React, Vite, TypeScript, Tailwind CSS, Google Gemini API, PWA.
- **Highlights:** Primary education PWA aligned with NCF-FS (National Curriculum Framework for Foundational Stage) Panchaadi five-step lesson planning (Adhiti, Bodh, Abhyas, Prayog, Prasar), handwritten worksheet OCR digitization, and bilingual Assamese-English story generation.

### 3. Bharat Knowledge Hub — Indian Heritage & Knowledge PWA
- **Category:** `EdTech & AI Web Apps`
- **Live URL:** [bharat-knowledge-hub.netlify.app](https://bharat-knowledge-hub.netlify.app)
- **Stack:** React, Vite, TypeScript, Structured Prompt Engineering, PWA.
- **Highlights:** Interactive educational repository covering Indian history, geography, national parks, wildlife sanctuaries, and philosophy, built with rigorous prompt engineering and multi-source ground-truth verification against official gazetteers.

---

## 🔬 4. Interactive AI Quality Assurance Explorer

Visitors can explore Subhadeep's real-world AI evaluation methodology across three interactive tabs:
1. **Prompt Engineering & CoT Structuring:** System prompts, step-by-step chain-of-thought breakdown, explicit guardrails, and structured outputs.
2. **Hallucination Detection & Fact-Checking Workflow:** Raw ungrounded model outputs with tagged factual deviations (critical, moderate), ground-truth citations, and verified production revisions.
3. **Multi-Model Response Comparison (RLHF Rubric):** Side-by-side comparison of baseline vs aligned models across a 5-dimension rubric (Factuality, Instruction Following, Reasoning Depth, Safety & Tone, Formatting) with RLHF preference annotations.

---

## 🛠️ 5. Development & Deployment

### Local Setup
```bash
# Install dependencies
npm install

# Start Vite local development server
npm run dev

# Run TypeScript check & build production assets
npm run build

# Preview production build locally
npm run preview
```

### Vercel Deployment
This repository is pre-configured with `vercel.json` for zero-configuration, security-hardened deployment on Vercel:
1. Push repository to GitHub/GitLab.
2. Import repository into [Vercel](https://vercel.com).
3. Framework Preset: **Vite**.
4. Build Command: `npm run build`.
5. Output Directory: `dist`.
6. Deploy! All security headers and SPA rewrites will be applied automatically from `vercel.json`.

---

## 📜 License & Copyright

© 2026 **শুভদীপ রায় (Subhadeep Roy)**. All rights reserved. Built with React, TypeScript & Security-First Engineering.
