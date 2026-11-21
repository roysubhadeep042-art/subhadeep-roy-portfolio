import React from 'react';
import { ArrowUp, CheckCircle2 } from 'lucide-react';
import { PROFILE } from '../data/profile';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-400 py-12 no-print relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand Signature */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg text-slate-900 dark:text-white tracking-tight">
                {PROFILE.nameBn}
              </span>
              <span className="text-slate-400 dark:text-slate-500">·</span>
              <span className="font-extrabold text-lg text-slate-800 dark:text-slate-200">
                {PROFILE.nameEn}
              </span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 max-w-md font-medium">
              Detail-Oriented Writer and Analyst | AI Content Specialist | Educator | Full-Stack AI Builder
            </p>
          </div>

          {/* Quick Jump Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-bold">
            <a href="#about" className="hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors">
              About
            </a>
            <a href="#projects" className="hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors">
              Projects
            </a>
            <a href="#ai-evaluation" className="hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors">
              AI Evaluation
            </a>
            <a href="#skills" className="hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors">
              Skills
            </a>
            <a href="#experience" className="hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors">
              Experience
            </a>
            <a href="#credentials" className="hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors">
              Credentials
            </a>
            <a href="#contact" className="hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors">
              Contact
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white shadow-sm transition-colors cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-900 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600 dark:text-slate-500 font-medium">
          <p>© 2026 {PROFILE.nameBn} ({PROFILE.nameEn}) · Built with React, TypeScript & Security-First Engineering.</p>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1 text-[11px] text-emerald-700 dark:text-emerald-400 font-bold">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>Zero-Tracker Hardened</span>
            </span>
            <span className="text-slate-300 dark:text-slate-700">|</span>
            <span className="text-[11px] font-semibold">Vercel Edge Ready</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
