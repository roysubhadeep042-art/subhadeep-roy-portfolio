import React, { useState } from 'react';
import {
  Sparkles,
  Cpu,
  ShieldCheck,
  Users,
  Search,
} from 'lucide-react';
import { SKILL_PILLARS } from '../data/skills';

export const SkillsSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPillar, setSelectedPillar] = useState<string>('All');

  const getPillarIcon = (name: string) => {
    switch (name) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
      case 'Users':
        return <Users className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />;
    }
  };

  const filteredPillars = SKILL_PILLARS.filter((pillar) => {
    if (selectedPillar !== 'All' && pillar.title !== selectedPillar) {
      return false;
    }
    return true;
  }).map((pillar) => {
    if (!searchTerm.trim()) return pillar;
    const term = searchTerm.toLowerCase();
    const matchingSkills = pillar.skills.filter(
      (s) =>
        s.name.toLowerCase().includes(term) ||
        s.description?.toLowerCase().includes(term) ||
        s.tags?.some((t) => t.toLowerCase().includes(term))
    );
    return { ...pillar, skills: matchingSkills };
  }).filter((pillar) => pillar.skills.length > 0);

  return (
    <section id="skills" className="py-20 sm:py-28 border-b border-slate-200 dark:border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-800 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>Comprehensive Core Competencies</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Categorized Skills Matrix
          </h2>
          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-400 font-medium">
            A cohesive intersection of frontier AI evaluation, agentic software engineering, industrial control rigor, and 8+ years of foundational pedagogical mastery.
          </p>

          {/* Search & Filter Controls */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-xl mx-auto">
            <div className="relative w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search skills, tools, or frameworks (e.g. RLHF, LangGraph, SCADA)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl text-xs sm:text-sm bg-white dark:bg-slate-900/80 border border-slate-300 dark:border-slate-800 focus:border-cyan-500 focus:outline-none text-slate-900 dark:text-slate-200 placeholder-slate-400 shadow-sm transition-colors font-medium"
              />
            </div>
          </div>

          {/* Pillar Selector Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-3">
            <button
              onClick={() => setSelectedPillar('All')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                selectedPillar === 'All'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white dark:bg-slate-900/50 text-slate-700 dark:text-slate-400 border border-slate-300 dark:border-slate-800 hover:text-slate-950 dark:hover:text-slate-200 shadow-sm'
              }`}
            >
              All 4 Pillars
            </button>
            {SKILL_PILLARS.map((p) => (
              <button
                key={p.title}
                onClick={() => setSelectedPillar(p.title)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedPillar === p.title
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white dark:bg-slate-900/50 text-slate-700 dark:text-slate-400 border border-slate-300 dark:border-slate-800 hover:text-slate-950 dark:hover:text-slate-200 shadow-sm'
                }`}
              >
                {p.title}
              </button>
            ))}
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {filteredPillars.map((pillar) => (
            <div
              key={pillar.title}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-gradient-to-b dark:from-slate-900/90 dark:to-slate-950/90 border border-slate-200 dark:border-slate-800 shadow-lg dark:shadow-xl space-y-6"
            >
              {/* Pillar Title Header */}
              <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800/80 pb-4">
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60">
                  {getPillarIcon(pillar.iconName)}
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">
                    {pillar.title}
                  </h3>
                  <span className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                    {pillar.skills.length} core competencies
                  </span>
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {pillar.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 transition-colors space-y-2 group"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 group-hover:text-cyan-700 dark:group-hover:text-cyan-400 transition-colors">
                        {skill.name}
                      </span>
                      {skill.level && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-cyan-100 dark:bg-cyan-500/10 text-cyan-800 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-500/20 shrink-0">
                          {skill.level}
                        </span>
                      )}
                    </div>

                    {skill.description && (
                      <p className="text-xs text-slate-700 dark:text-slate-400 leading-relaxed font-medium">
                        {skill.description}
                      </p>
                    )}

                    {skill.tags && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {skill.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] px-2 py-0.5 rounded bg-slate-200/80 dark:bg-slate-900 text-slate-700 dark:text-slate-400 font-mono font-semibold"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
