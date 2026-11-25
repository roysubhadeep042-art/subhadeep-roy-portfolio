import type { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'tiyan-ai',
    title: 'TIYAN AI — Offline-First Windows Desktop AI Companion',
    subtitle: 'Multi-Provider AI Routing, Cross-Drive File Search, Instant PDF Extraction, and Dodo Payments Pro License',
    version: 'v0.1.0',
    category: 'Desktop AI & Local LLMs',
    stack: [
      'Electron',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'OmniRoute & Ollama',
      'SQLite',
      'Dodo Payments',
      'Windows System.Speech',
    ],
    highlights: [
      'Multi-provider AI routing via OmniRoute and local Ollama models with real-time streaming and automatic failover.',
      'Cross-drive Windows file search and instant on-disk PDF extraction & summarization with zero network dependency.',
      'Deterministic OS & browser execution: launching desktop apps, Chrome workflows, and WhatsApp share intents with single-launch guards.',
      'Date-grounded live web search with anti-hallucination safeguards, persistent SQLite memory, and Push-to-Talk STT/TTS voice interaction.',
      'Developed by শুভদীপ রায় (Subhadeep Roy) with Free Core + Pro License activation via Dodo Payments global Merchant-of-Record integration.',
    ],
    badge: 'Windows Desktop App • v0.1.0',
    isDesktop: true,
    githubUrl: 'https://github.com/roysubhadeep042-art/tiyan-ai',
    releaseUrl: 'https://github.com/roysubhadeep042-art/tiyan-ai/releases/tag/v0.1.0',
    dodoCheckoutUrl: import.meta.env?.VITE_DODO_CHECKOUT_URL || 'https://checkout.dodopayments.com/buy/tiyan-ai-pro',
    architectureDetails: {
      coreFlow: [
        'User Input (Push-to-Talk STT or Typed Chat UI) captured in Electron Renderer process.',
        'OmniRoute & Ollama Gateway routes requests across local Ollama models and priority cloud failover endpoints with real-time streaming.',
        'Cross-Drive File Indexer & PDF Extractor parses local documents instantly on-disk with SQLite persistent memory storage.',
        'Deterministic OS / Browser Executor triggers desktop apps, Chrome automation workflows, and WhatsApp share intents securely.',
        'Pro License Activation: Seamlessly verifies tokenized entitlements via Dodo Payments global Merchant-of-Record API.',
      ],
      keyComponents: [
        {
          name: 'OmniRoute & Ollama Gateway',
          desc: 'Dynamic multi-provider routing supporting local Ollama models and cloud LLMs with real-time token streaming.',
        },
        {
          name: 'Cross-Drive & PDF Engine',
          desc: 'High-speed Windows file search across drives with instant on-disk PDF text extraction and chunk summarization.',
        },
        {
          name: 'Deterministic Action Guard',
          desc: 'Safe OS and browser intent execution (launching apps, Chrome workflows, WhatsApp shares) with single-launch guards.',
        },
        {
          name: 'Dodo Payments Pro Licensing',
          desc: 'Global Merchant-of-Record integration for instant Pro license key acquisition and in-app activation.',
        },
      ],
      safetyMeasures: [
        'Strict path normalization and directory traversal protection for cross-drive file operations.',
        'Explicit user confirmation prompt before executing OS commands or browser automation workflows.',
        'Secure token validation for Dodo Payments webhook and license activation states.',
      ],
    },
    metrics: [
      { label: 'Release', value: 'v0.1.0 Windows' },
      { label: 'Monetization', value: 'Dodo Payments Pro' },
      { label: 'Privacy', value: 'Local + Cloud Hybrid' },
    ],
  },
  {
    id: 'ashuaitosh',
    title: 'AshuAITosh — AI Teaching Assistant for Assam',
    subtitle: 'Curriculum-Aligned NCF-FS Primary Education Assistant with OCR & Bilingual Pedagogy',
    category: 'EdTech & AI Web Apps',
    liveUrl: 'https://ashuaitosh.vercel.app',
    stack: [
      'React',
      'Vite',
      'TypeScript',
      'Tailwind CSS',
      'Google Gemini API',
      'PWA',
    ],
    highlights: [
      'Curriculum-aligned primary education Progressive Web App built specifically for grassroots educators in Assam.',
      'NCF-FS (National Curriculum Framework for Foundational Stage) Panchaadi five-step lesson planning (Adhiti, Bodh, Abhyas, Prayog, Prasar).',
      'Handwritten question paper digitization via Gemini multimodal vision OCR, generating structured question banks.',
      'Bilingual contextual story and pedagogical rhyme generation supporting Assamese and English educational modules.',
      'Offline-capable PWA architecture designed for low-connectivity rural school environments.',
    ],
    badge: 'Live Educational Web Application',
    isDesktop: false,
    architectureDetails: {
      coreFlow: [
        'Teacher selects foundational grade level, subject competency, and Panchaadi pedagogical phase.',
        'Structured prompt pipeline injects NEP 2020 / NCF-FS guidelines and regional curriculum constraints.',
        'Gemini Vision processes uploaded photos of hand-written teacher worksheets or blackboard sketches.',
        'Output formatters render clean, print-friendly question sheets, bilingual glossaries, and evaluation rubrics.',
        'Service Worker caches generated lesson templates for instant classroom access without active internet.',
      ],
      keyComponents: [
        {
          name: 'Panchaadi Engine',
          desc: 'Pedagogical structure generator enforcing the five stages of foundational learning from Indian educational philosophy.',
        },
        {
          name: 'Multimodal OCR Extractor',
          desc: 'Transforms irregular handwritten assessments into digital question papers with automatic typo-correction.',
        },
        {
          name: 'Bilingual Storyteller',
          desc: 'Generates culturally resonant folk-style fables aligned to specific moral and cognitive learning milestones.',
        },
      ],
      safetyMeasures: [
        'Age-appropriate content filtering guardrails enforced in system prompt instructions.',
        'No student PII stored on remote servers; all data cached in local device storage.',
        'Factuality checks ensuring historical and geographical accuracy for Northeast Indian regional studies.',
      ],
    },
    metrics: [
      { label: 'Framework', value: 'NCF-FS Panchaadi' },
      { label: 'Deployment', value: 'Vercel PWA' },
      { label: 'Audience', value: 'Primary Educators' },
    ],
  },
  {
    id: 'bharat-knowledge-hub',
    title: 'Bharat Knowledge Hub — Indian Heritage & Knowledge PWA',
    subtitle: 'Fact-Checked Educational Repository with Structured Prompt Engineering & Verified Modules',
    category: 'EdTech & AI Web Apps',
    liveUrl: 'https://bharat-knowledge-hub.netlify.app',
    stack: [
      'React',
      'Vite',
      'TypeScript',
      'Prompt Engineering',
      'PWA',
    ],
    highlights: [
      'Interactive educational Progressive Web App covering Indian history, geography, national parks, wildlife sanctuaries, mythology, and philosophy.',
      'Applied rigorous prompt engineering and systematic cross-checking methodology to eliminate historical hallucinations.',
      'Curated learning modules featuring interactive quiz banks, map coordinates, and chronological historical timelines.',
      'Optimized client-side rendering with instant search, category tag filtering, and lightweight mobile data consumption.',
    ],
    badge: 'Live Knowledge Web Application',
    isDesktop: false,
    architectureDetails: {
      coreFlow: [
        'Content ingestion pipeline guided by structured Prompt Engineering blueprints (system roles, few-shot examples, constraint checklists).',
        'Multi-stage verification protocol comparing AI outputs against NCERT, Archaeological Survey of India (ASI), and botanical survey records.',
        'Static JSON compilation with strict TypeScript schema validation preventing runtime schema drifts.',
        'Fast responsive React client with instant search, bookmarking, and offline PWA service worker.',
      ],
      keyComponents: [
        {
          name: 'Knowledge Taxonomy',
          desc: 'Hierarchical categorization spanning Vedic philosophy, classical empires, biodiversity hotspots, and heritage monuments.',
        },
        {
          name: 'Interactive Timeline & Maps',
          desc: 'Visual chronological milestones with precise geographic coordinates for national parks and UNESCO heritage sites.',
        },
        {
          name: 'Factuality Benchmarking',
          desc: 'All historical dates, wildlife conservation statuses (IUCN Red List), and legal acts cross-verified with official gazettes.',
        },
      ],
      safetyMeasures: [
        'Strict objective neutrality filters preventing modern biases from distorting ancient historical records.',
        'Canonical source attribution for all archaeological findings and wildlife reserve designations.',
      ],
    },
    metrics: [
      { label: 'Verification', value: 'Multi-Source Grounding' },
      { label: 'Platform', value: 'Netlify PWA' },
      { label: 'Coverage', value: 'Pan-India Heritage' },
    ],
  },
];
