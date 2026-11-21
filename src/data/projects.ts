import type { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'tiyan-ai',
    title: 'TIYAN AI — Offline-First Windows Desktop AI Companion',
    subtitle: 'Dual-Engine Local + Cloud Desktop AI with Windows-Native Speech & Sandboxed Workspace Tools',
    version: 'v0.1.0',
    category: 'Desktop AI & Local LLMs',
    stack: [
      'Electron',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'SQLite (sql.js)',
      'Multi-LLM Failover Gateway',
      'Ollama',
      'Windows System.Speech',
    ],
    highlights: [
      'Dual-engine desktop assistant routing seamlessly between local Ollama models and priority cloud failover combos.',
      '100% offline Windows-native speech recognition and Text-To-Speech (System.Speech.Synthesis) with zero cloud audio latency.',
      'Local SQLite (sql.js) persistent memory injection preserving multi-session context without external database dependencies.',
      'Permission-gated workspace tool architecture allowing the agent to read, edit, and build codebases safely with explicit human confirmation.',
    ],
    badge: 'Packaged Windows Desktop Application',
    isDesktop: true,
    architectureDetails: {
      coreFlow: [
        'User Input (Voice via System.Speech or Typed Chat UI) captured in Electron Renderer process.',
        'Failover Orchestrator checks local Ollama health (e.g. Qwen 2.5 / Llama 3.2); if unreachable, routes with seamless degraded fallback to cloud provider.',
        'Persistent Memory Layer fetches user preferences and chat history from local SQLite file.',
        'Agentic Tool Invocation: File read/write/shell actions pass through a strict security permission gate before execution.',
        'Audio synthesis rendered natively via Windows SAPI voice engine without transmitting audio tokens over the network.',
      ],
      keyComponents: [
        {
          name: 'Multi-LLM Gateway',
          desc: 'Dynamic health-checking and automatic failover switch between local Ollama endpoints and cloud APIs.',
        },
        {
          name: 'Native Speech Pipeline',
          desc: 'Direct bridge to Windows System.Speech runtime for zero-cloud latency and full offline voice conversations.',
        },
        {
          name: 'Sandboxed Tool Registry',
          desc: 'Strictly validated file system tools restricted to specified workspace boundaries with human-in-the-loop approval.',
        },
        {
          name: 'sql.js Embedded Store',
          desc: 'In-memory + disk-synced SQLite database for conversations, embeddings, and workspace session logs.',
        },
      ],
      safetyMeasures: [
        'Directory traversal defense and path normalization for all file tool arguments.',
        'Explicit UI prompt requiring user confirmation before any disk mutation or command execution.',
        'Zero telemetry and zero audio egress for local mode sessions.',
      ],
    },
    metrics: [
      { label: 'Latency', value: '<50ms Native Voice' },
      { label: 'Privacy', value: '100% Offline Capable' },
      { label: 'Architecture', value: 'Electron + SQLite' },
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
