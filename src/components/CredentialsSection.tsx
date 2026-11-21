import React, { useState } from 'react';
import {
  Award,
  GraduationCap,
  Cpu,
  BookOpen,
  Music,
  Search,
} from 'lucide-react';
import { DEGREES, CERTIFICATIONS } from '../data/credentials';
import { PROFILE } from '../data/profile';

export const CredentialsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'AI Agents & LLMs',
    'Product & Security',
    'Engineering & Pedagogy',
  ];

  const filteredCerts = CERTIFICATIONS.filter((c) => {
    if (selectedCategory !== 'All' && c.category !== selectedCategory) {
      return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        c.name.toLowerCase().includes(q) ||
        c.issuer.toLowerCase().includes(q) ||
        c.date.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const getDegreeIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
      case 'Music':
        return <Music className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      default:
        return <Award className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />;
    }
  };

  return (
    <section id="credentials" className="py-20 sm:py-28 border-b border-slate-200 dark:border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 text-amber-800 dark:text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Academic Rigor & Verified Certifications</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education, Credentials & Creative Arts
          </h2>
          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-400 font-medium">
            Premier institute engineering education, specialized industrial automation, state-certified pedagogical qualifications, and 25+ verified frontier AI credentials.
          </p>
        </div>

        {/* 4 Core Degree / Diplomas Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          {DEGREES.map((deg, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-gradient-to-b dark:from-slate-900/90 dark:to-slate-950/90 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-lg dark:shadow-xl transition-all space-y-4"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60">
                  {getDegreeIcon(deg.icon)}
                </div>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-cyan-100 dark:bg-cyan-500/10 text-cyan-800 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-500/20 font-bold">
                  {deg.badge}
                </span>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">
                  {deg.title}
                </h3>
                <div className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-300 mt-1">
                  {deg.institution}
                </div>
                {(deg.year || deg.period) && (
                  <div className="text-xs font-mono text-slate-600 dark:text-slate-400 mt-0.5 font-semibold">
                    {deg.year || deg.period}
                  </div>
                )}
              </div>

              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-400 leading-relaxed pt-2 border-t border-slate-200 dark:border-slate-800/80 font-medium">
                {deg.highlights}
              </p>
            </div>
          ))}
        </div>

        {/* Creative Discipline Highlight Banner (Mokshakobi & Classical Tabla) */}
        <div className="max-w-5xl mx-auto mb-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-indigo-50/90 via-slate-50 to-white dark:from-indigo-950/50 dark:via-slate-900/90 dark:to-slate-950/90 border border-indigo-200 dark:border-indigo-500/30 shadow-lg dark:shadow-2xl flex flex-col md:flex-row items-center gap-6">
          <div className="w-14 h-14 rounded-2xl bg-indigo-100 dark:bg-indigo-500/20 border border-indigo-200 dark:border-indigo-500/30 flex items-center justify-center shrink-0">
            <Music className="w-7 h-7 text-indigo-700 dark:text-indigo-400" />
          </div>
          <div className="space-y-1.5 text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start flex-wrap">
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-500/20 text-indigo-900 dark:text-indigo-300 font-mono border border-indigo-200 dark:border-transparent">
                Artistic Identity: {PROFILE.creativePersona.penName}
              </span>
              <span className="text-xs text-slate-700 dark:text-slate-400 font-medium">
                {PROFILE.creativePersona.craft}
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">
              The Intersection of Classical Meter & Algorithmic Thinking
            </h3>
            <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-300 leading-relaxed font-medium">
              {PROFILE.creativePersona.background}
            </p>
          </div>
        </div>

        {/* Filterable 25+ Certifications Vault */}
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
            <div>
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                <span>Verified Certifications Vault</span>
                <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-500/10 text-emerald-800 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20 font-bold">
                  {CERTIFICATIONS.length} Total
                </span>
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 font-medium">
                Targeted specializations in AI Agents, LangGraph, Claude, Security, and Pedagogy.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-64">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Filter credentials..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 rounded-xl text-xs bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:border-cyan-500 shadow-sm font-medium"
              />
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-amber-600 text-white shadow-md'
                    : 'bg-white dark:bg-slate-900/60 text-slate-700 dark:text-slate-400 hover:text-slate-950 dark:hover:text-slate-200 border border-slate-300 dark:border-slate-800 shadow-sm'
                }`}
              >
                {cat === 'All' ? `All (${CERTIFICATIONS.length})` : cat}
              </button>
            ))}
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {filteredCerts.map((cert, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm transition-colors flex flex-col justify-between space-y-2"
              >
                <div>
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-400 font-semibold border border-slate-200 dark:border-transparent">
                      {cert.category}
                    </span>
                    {cert.featured && (
                      <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-amber-100 dark:bg-amber-500/20 text-amber-800 dark:text-amber-400 border border-amber-200 dark:border-transparent">
                        FEATURED
                      </span>
                    )}
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-snug">
                    {cert.name}
                  </h4>
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-600 dark:text-slate-400 pt-1 border-t border-slate-100 dark:border-slate-800/60 font-mono font-medium">
                  <span>{cert.issuer}</span>
                  <span className="text-slate-500">{cert.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
