import React, { useState } from 'react';
import {
  ExternalLink,
  Laptop,
  Globe,
  Sparkles,
  Info,
  CheckCircle2,
  Terminal,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { PROJECTS } from '../data/projects';
import type { Project } from '../types';
import { ProjectDetailModal } from './ProjectDetailModal';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = [
    'All',
    'EdTech & AI Web Apps',
    'Desktop AI & Local LLMs',
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  const dodoCheckoutUrl =
    'https://checkout.dodopayments.com/buy/pdt_0NsdQshlK53MIZsmJfFNL?quantity=1';

  return (
    <section id="projects" className="py-20 sm:py-28 border-b border-slate-200 dark:border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 text-cyan-800 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Shipped AI Systems & Applications</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Production AI Products & Offline Architectures
          </h2>
          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-400 font-medium">
            Real-world educational web platforms and privacy-first local desktop applications combining frontier models, rigorous prompt engineering, and fail-safe architectures.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-cyan-600 dark:bg-cyan-500 text-white shadow-md shadow-cyan-600/30'
                    : 'bg-white dark:bg-slate-900/60 text-slate-700 dark:text-slate-400 hover:text-slate-950 dark:hover:text-slate-200 border border-slate-300 dark:border-slate-800 shadow-sm'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col justify-between rounded-2xl bg-white dark:bg-gradient-to-b dark:from-slate-900/95 dark:to-slate-950/95 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-lg dark:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="p-6 sm:p-7 space-y-5">
                {/* Card Top: Badge & Icon */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <div className="p-2.5 rounded-xl bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-500/20">
                      {project.isDesktop ? (
                        <Laptop className="w-5 h-5" />
                      ) : (
                        <Globe className="w-5 h-5" />
                      )}
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-800 dark:text-cyan-400 block">
                        {project.category}
                      </span>
                      {project.version && (
                        <span className="text-[10px] font-mono text-slate-600 dark:text-slate-400 font-semibold">
                          Build {project.version}
                        </span>
                      )}
                    </div>
                  </div>
                  <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-300 font-bold border border-slate-200 dark:border-slate-700">
                    {project.badge}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white group-hover:text-cyan-700 dark:group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-700 dark:text-slate-400 mt-1.5 leading-relaxed font-medium">
                    {project.subtitle}
                  </p>
                </div>

                {/* Key Bullet Highlights */}
                <div className="space-y-2 pt-1 border-t border-slate-200 dark:border-slate-800/60">
                  {project.highlights.slice(0, 3).map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-xs text-slate-800 dark:text-slate-300 leading-relaxed font-medium"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Metrics */}
                {project.metrics && (
                  <div className="grid grid-cols-3 gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800/80 text-center">
                    {project.metrics.map((m, idx) => (
                      <div key={idx}>
                        <div className="text-[11px] font-extrabold text-slate-900 dark:text-white">
                          {m.value}
                        </div>
                        <div className="text-[9px] text-slate-600 dark:text-slate-400 font-medium">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Chips */}
                <div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800/70 text-slate-800 dark:text-slate-300 font-semibold border border-slate-200 dark:border-transparent"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 5 && (
                      <span className="text-[11px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800/40 text-slate-600 dark:text-slate-400 font-semibold">
                        +{project.stack.length - 5} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer: Action Links */}
              <div className="p-4 sm:px-7 sm:pb-6 pt-0 border-t border-slate-200 dark:border-slate-800/60 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-700 dark:text-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>Inspect Architecture</span>
                </button>

                <div className="flex items-center gap-2">
                  {project.releaseUrl && (
                    <a
                      href={project.releaseUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold text-cyan-700 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-500/10 hover:bg-cyan-100 dark:hover:bg-cyan-500/20 border border-cyan-200 dark:border-cyan-500/30 transition-all"
                      title="Download v0.1.0 release & source code"
                    >
                      <span>Download v0.1.0</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}

                  {project.dodoCheckoutUrl && (
                    <a
                      href={project.dodoCheckoutUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-sm shadow-emerald-600/30 transition-all"
                      title="Get Pro License ($25) via Dodo Payments"
                    >
                      <span>Pro License ($25)</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}

                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-cyan-600 hover:bg-cyan-500 shadow-sm shadow-cyan-600/30 transition-all"
                    >
                      <span>Live App</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (!project.releaseUrl && (
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-800 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-transparent transition-colors cursor-pointer"
                    >
                      <span>View Blueprint</span>
                      <Terminal className="w-3 h-3" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* TIYAN AI PRICING & LICENSING COMPARISON SECTION (DODO PAYMENTS COMPLIANCE) */}
        {/* ========================================================================= */}
        <div id="pricing" className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border border-emerald-500/30 shadow-2xl overflow-hidden p-6 sm:p-10 text-white relative">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-8">
            {/* Header */}
            <div className="text-center space-y-3 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Merchant-of-Record Compliance & Licensing Breakdown</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
                TIYAN AI Pricing & Licensing Tiers
              </h3>
              <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed">
                Transparent side-by-side comparison for compliance reviewers (Dodo Payments) and Windows users. Verify our open-source release and lifetime Pro license activation.
              </p>
            </div>

            {/* Pricing Cards Grid (Side-by-Side) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              {/* Tier 1: Core Edition (Free Forever) */}
              <div className="flex flex-col justify-between rounded-2xl bg-slate-950/80 border border-slate-800 p-6 sm:p-8 space-y-6 shadow-lg">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase font-bold tracking-wider text-cyan-400 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                      Open Source Core
                    </span>
                    <span className="text-xs font-mono text-slate-400">v0.1.0</span>
                  </div>

                  <div>
                    <h4 className="text-xl sm:text-2xl font-extrabold text-white">Core Edition</h4>
                    <div className="flex items-baseline gap-1 mt-2">
                      <span className="text-3xl sm:text-4xl font-black text-white">$0</span>
                      <span className="text-xs text-slate-400 font-medium">Free Forever</span>
                    </div>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                      Designed for local privacy, offline operation, and community accessibility on Windows 11.
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-800/80">
                    <div className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>Local Ollama + OmniRoute chat integration</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>Basic Windows desktop assistant interface</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>Full open-source v0.1.0 installer via GitHub</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>Local SQLite chat history & SQLite logs</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/80">
                  <a
                    href="https://github.com/roysubhadeep042-art/tiyan-ai/releases/tag/v0.1.0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-cyan-300 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 transition-all cursor-pointer"
                  >
                    <span>Download v0.1.0 on GitHub</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Tier 2: Pro License ($25.00 One-Time) */}
              <div className="flex flex-col justify-between rounded-2xl bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border-2 border-emerald-500/50 p-6 sm:p-8 space-y-6 shadow-2xl relative">
                <div className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-emerald-600 text-white text-[10px] font-extrabold uppercase tracking-widest shadow-md">
                  Most Popular • Lifetime Access
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase font-bold tracking-wider text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center gap-1">
                      <Zap className="w-3 h-3" />
                      <span>Pro Edition</span>
                    </span>
                    <span className="text-xs font-mono text-emerald-400 font-semibold">One-Time Pay</span>
                  </div>

                  <div>
                    <h4 className="text-xl sm:text-2xl font-extrabold text-white">Pro License</h4>
                    <div className="flex items-baseline gap-1.5 mt-2">
                      <span className="text-3xl sm:text-4xl font-black text-white">$25.00</span>
                      <span className="text-xs text-emerald-400 font-bold">One-Time Lifetime License</span>
                    </div>
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                      Advanced automation, cross-drive file search, instant PDF extraction, and priority updates.
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-800">
                    <div className="flex items-start gap-2.5 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Unlimited multi-provider AI routing & cloud failover</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Cross-drive Windows file search & instant PDF extraction</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Deterministic OS, Chrome & WhatsApp automation workflows</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Persistent SQLite vector & conversation memory</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Priority updates & direct developer support</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-800">
                  <a
                    href={dodoCheckoutUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-extrabold text-white bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-500 hover:to-teal-500 shadow-lg shadow-emerald-600/30 transition-all transform hover:-translate-y-0.5 cursor-pointer"
                  >
                    <span>Get Pro License — $25.00</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <p className="text-[11px] text-slate-400 text-center leading-relaxed">
                    Secure global checkout & license delivery powered by <strong className="text-slate-200">Dodo Payments</strong> · 7-day refund guarantee for unsupported Windows 11 environments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Architecture Modal */}
      <ProjectDetailModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
