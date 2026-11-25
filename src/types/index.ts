export interface Project {
  id: string;
  title: string;
  subtitle: string;
  version?: string;
  category: 'Desktop AI & Local LLMs' | 'EdTech & AI Web Apps';
  stack: string[];
  highlights: string[];
  badge: string;
  liveUrl?: string;
  githubUrl?: string;
  releaseUrl?: string;
  dodoCheckoutUrl?: string;
  isDesktop?: boolean;
  architectureDetails: {
    coreFlow: string[];
    keyComponents: { name: string; desc: string }[];
    safetyMeasures: string[];
  };
  metrics?: { label: string; value: string }[];
}

export interface SkillItem {
  name: string;
  level?: string;
  tags?: string[];
  description?: string;
}

export interface SkillPillar {
  title: string;
  iconName: string;
  color: string;
  accent: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  badge: string;
  category: 'AI & Prompt Engineering' | 'Education & Pedagogy' | 'Engineering & Technical Operations';
  bullets: string[];
  highlightKeywords: string[];
}

export interface CredentialDegree {
  title: string;
  institution: string;
  period?: string;
  year?: string;
  highlights: string;
  icon: string;
  badge: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  date: string;
  category: 'AI Agents & LLMs' | 'Product & Security' | 'Engineering & Pedagogy';
  featured?: boolean;
}

export interface PromptCoTExample {
  title: string;
  task: string;
  userPrompt: string;
  systemPrompt: string;
  chainOfThought: string[];
  output: string;
  guardrails: string[];
}

export interface HallucinationCase {
  title: string;
  domain: string;
  rawOutput: string;
  hallucinations: {
    flaggedText: string;
    issue: string;
    severity: 'critical' | 'moderate' | 'subtle';
    groundTruth: string;
    sourceVerification: string;
  }[];
  correctedOutput: string;
  preventionRubric: string;
}

export interface MultiModelComparison {
  title: string;
  prompt: string;
  modelA: {
    name: string;
    response: string;
    scores: {
      factuality: number;
      instructionFollowing: number;
      reasoningDepth: number;
      safetyTone: number;
      formatting: number;
    };
    critique: string;
  };
  modelB: {
    name: string;
    response: string;
    scores: {
      factuality: number;
      instructionFollowing: number;
      reasoningDepth: number;
      safetyTone: number;
      formatting: number;
    };
    critique: string;
  };
  winner: 'Model A' | 'Model B' | 'Tie';
  rlhfAnnotation: string;
}
