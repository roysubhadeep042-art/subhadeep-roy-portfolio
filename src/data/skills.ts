import type { SkillPillar } from '../types';

export const SKILL_PILLARS: SkillPillar[] = [
  {
    title: 'AI Content & Evaluation',
    iconName: 'Sparkles',
    color: 'from-cyan-500 to-blue-600',
    accent: 'text-cyan-400',
    skills: [
      {
        name: 'Prompt Engineering',
        level: 'Expert',
        tags: ['CoT', 'Few-Shot', 'System Prompting', 'Negative Constraints'],
        description: 'Designing deterministic, role-specific prompts with structured reasoning pathways and schema enforcement.',
      },
      {
        name: 'AI Response Evaluation & Comparison',
        level: 'Expert',
        tags: ['RLHF', 'Rubrics', 'Side-by-Side', 'Elo Rating'],
        description: 'Rigorous comparative benchmarking of frontier LLMs against multi-dimensional quality and alignment rubrics.',
      },
      {
        name: 'Hallucination Detection',
        level: 'Expert',
        tags: ['Factuality Check', 'Source Grounding', 'Context Drift'],
        description: 'Systematic auditing of model outputs to detect subtle, moderate, and critical factual deviations.',
      },
      {
        name: 'Logical Reasoning Evaluation',
        level: 'Advanced',
        tags: ['Deductive Logic', 'Step Validation', 'Coherence'],
        description: 'Scrutinizing step-by-step reasoning chains for fallacies, circular logic, or unstated assumptions.',
      },
      {
        name: 'RLHF Workflows & Rubrics',
        level: 'Advanced',
        tags: ['Preference Ranking', 'Safety Filtering', 'Annotation'],
        description: 'Creating gold-standard preference datasets and annotation guidelines for supervised fine-tuning.',
      },
      {
        name: 'AI Content Strategy',
        level: 'Advanced',
        tags: ['Tone Guidelines', 'Audience Calibration', 'Editorial QA'],
        description: 'Structuring domain-specific content strategies tailored to learner demographics and enterprise contexts.',
      },
      {
        name: 'Fact-Checking & Research',
        level: 'Expert',
        tags: ['Primary Sources', 'Gazetteers', 'Archival Grounding'],
        description: 'Deep investigative verification using official registries, academic publications, and primary historical gazetteers.',
      },
      {
        name: 'Content Quality Assurance',
        level: 'Expert',
        tags: ['Grammar & Nuance', 'Clarity', 'Format Compliance'],
        description: 'High-precision editorial proofreading and style compliance across educational and technical texts.',
      },
    ],
  },
  {
    title: 'AI Engineering & Tooling',
    iconName: 'Cpu',
    color: 'from-emerald-500 to-teal-600',
    accent: 'text-emerald-400',
    skills: [
      {
        name: 'LangGraph & AI Agents (Python)',
        level: 'Advanced',
        tags: ['State Graphs', 'Cyclic Execution', 'Human-in-the-Loop'],
        description: 'Building multi-agent state machines with checkpointing, conditional branches, and tool orchestration.',
      },
      {
        name: 'RAG & LangChain',
        level: 'Advanced',
        tags: ['Vector DB', 'Chunking', 'Retrieval Grounding'],
        description: 'Architecting retrieval-augmented generation pipelines with context-aware semantic retrieval.',
      },
      {
        name: 'Claude & Claude Code',
        level: 'Expert',
        tags: ['Anthropic API', 'Artifacts', 'Tool Use', 'CLI'],
        description: 'Leveraging Claude 3.5 Sonnet and Claude Code for automated coding workflows, refactoring, and deep synthesis.',
      },
      {
        name: 'Local LLM Deployment (Ollama)',
        level: 'Advanced',
        tags: ['Offline Inference', 'Model Quantization', 'Failover'],
        description: 'Configuring quantized local models (Llama 3, Qwen 2.5, Phi) with zero cloud dependencies and fallback routing.',
      },
      {
        name: 'AI-Driven Product Management',
        level: 'Advanced',
        tags: ['PRDs', 'Feature Scoping', 'KPI Tracking'],
        description: 'Translating user pain points into technical AI specifications, model selection rationales, and evaluation metrics.',
      },
      {
        name: 'Web Development with AI (React, TS)',
        level: 'Advanced',
        tags: ['Vite', 'TypeScript', 'Tailwind CSS', 'PWA'],
        description: 'Rapid scaffolding and production deployment of reactive web apps and PWAs integrated with AI APIs.',
      },
    ],
  },
  {
    title: 'Engineering, Data & Security',
    iconName: 'ShieldCheck',
    color: 'from-amber-500 to-orange-600',
    accent: 'text-amber-400',
    skills: [
      {
        name: 'Industrial Automation (SCADA / PLC / HMI)',
        level: 'Certified',
        tags: ['Control Systems', 'Ladder Logic', 'Telemetry'],
        description: 'Rigorous engineering foundation in closed-loop control, deterministic signal processing, and industrial fail-safes.',
      },
      {
        name: 'Cyber Security Fundamentals',
        level: 'Certified',
        tags: ['PII Protection', 'CSP', 'Input Sanitization', 'OWASP'],
        description: 'Implementing defense-in-depth principles: bot traps, injection prevention, CSP headers, and data minimization.',
      },
      {
        name: 'Data Analysis & Advanced Excel',
        level: 'Advanced',
        tags: ['PivotTables', 'VLOOKUP / XLOOKUP', 'Statistical QA'],
        description: 'Cleaning, analyzing, and structuring quantitative datasets for error detection and trend identification.',
      },
      {
        name: 'Technical Documentation',
        level: 'Expert',
        tags: ['Architecture Docs', 'SOPs', 'API Specs'],
        description: 'Drafting clear, unambiguous technical manuals, runbooks, and pedagogical curriculum blueprints.',
      },
      {
        name: 'Troubleshooting & Root-Cause Diagnostics',
        level: 'Expert',
        tags: ['5 Whys', 'Fault Trees', 'Systematic Isolation'],
        description: 'Methodical hardware and software failure isolation developed through enterprise service engineering.',
      },
    ],
  },
  {
    title: 'Communication & Leadership',
    iconName: 'Users',
    color: 'from-indigo-500 to-purple-600',
    accent: 'text-indigo-400',
    skills: [
      {
        name: 'Instructional Design & Pedagogy',
        level: 'Expert',
        tags: ['NCF-FS', 'Panchaadi', 'D.El.Ed', '8+ Yrs Classroom'],
        description: '8+ years crafting differentiated instruction tailored to student cognitive milestones and multilingual contexts.',
      },
      {
        name: 'Curriculum Alignment',
        level: 'Expert',
        tags: ['NEP 2020', 'Learning Outcomes', 'Assessment Rubrics'],
        description: 'Mapping learning goals to national frameworks with measurable formative and summative metrics.',
      },
      {
        name: 'Cross-Functional Project Management',
        level: 'Advanced',
        tags: ['Milestones', 'Vendor Coordination', 'Risk Mitigation'],
        description: 'Managing complex deliverables across multidisciplinary teams in remote and field environments.',
      },
      {
        name: 'Remote & Independent Execution',
        level: 'Expert',
        tags: ['Self-Directed', 'Async Comms', 'High Ownership'],
        description: 'Proven track record of shipping end-to-end applications, datasets, and curricula autonomously.',
      },
    ],
  },
];
