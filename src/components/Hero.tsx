import React, { useState } from 'react';
import {
  MapPin,
  Copy,
  Check,
  Sparkles,
  ArrowRight,
  Layers,
  Award,
  Terminal,
} from 'lucide-react';
import { PROFILE } from '../data/profile';
import { getAssembledEmail } from '../utils/security';
import { LinkedinIcon } from './Icons';

interface HeroProps {
  onCopyEmail: (email: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onCopyEmail }) => {
  const [copied, setCopied] = useState(false);
  const assembledEmail = getAssembledEmail();

  const handleCopy = () => {
    navigator.clipboard.writeText(assembledEmail);
    setCopied(true);
    onCopyEmail(assembledEmail);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="about"
      className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden border-b border-slate-200 dark:border-slate-800/60"
    >
      {/* Background Decorative Mesh & Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none -z-10 opacity-30 dark:opacity-40">
        <div className="absolute top-10 left-1/4 w-72 h-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute top-20 right-1/4 w-80 h-80 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 text-emerald-800 dark:text-emerald-400 text-xs sm:text-sm font-semibold shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600 dark:bg-emerald-500"></span>
            </span>
            <span>{PROFILE.badge}</span>
          </div>

          {/* Bilingual Headline */}
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-400">
                {PROFILE.nameBn}
              </span>{' '}
              <span className="text-slate-400 dark:text-slate-600 font-light">·</span>{' '}
              <span>{PROFILE.nameEn}</span>
            </h1>
            <p className="text-base sm:text-xl font-bold text-slate-800 dark:text-slate-300 max-w-3xl mx-auto">
              {PROFILE.subheadline}
            </p>
          </div>

          {/* Executive Summary */}
          <p className="text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300 max-w-3xl mx-auto text-balance font-medium">
            {PROFILE.executiveSummary}
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 dark:from-cyan-500 dark:to-blue-600 dark:hover:from-cyan-400 dark:hover:to-blue-500 shadow-lg shadow-cyan-600/25 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Explore Shipped Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-900 dark:text-slate-200 bg-white dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 shadow-sm transition-all cursor-pointer"
            >
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Direct Verified Links & Info Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs sm:text-sm">
            {/* Scraper-Protected Copy Email Pill */}
            <div
              className="group inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900/80 border border-slate-300 dark:border-slate-800 text-slate-800 dark:text-slate-300 hover:border-cyan-500 shadow-sm transition-colors"
              title="Protected from bot harvesters via runtime JS assembly"
            >
              <span className="font-mono text-cyan-700 dark:text-cyan-400 font-bold">
                {assembledEmail}
              </span>
              <button
                onClick={handleCopy}
                aria-label="Copy verified email to clipboard"
                className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded bg-cyan-100 dark:bg-cyan-500/20 text-cyan-800 dark:text-cyan-300 hover:bg-cyan-200 dark:hover:bg-cyan-500/30 transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Location Pill */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900/80 border border-slate-300 dark:border-slate-800 text-slate-800 dark:text-slate-300 shadow-sm font-medium">
              <MapPin className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
              <span>{PROFILE.location}</span>
            </div>

            {/* LinkedIn Pill */}
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900/80 border border-slate-300 dark:border-slate-800 text-slate-800 dark:text-slate-300 hover:text-cyan-700 dark:hover:text-cyan-400 hover:border-cyan-500 shadow-sm transition-colors font-medium"
            >
              <LinkedinIcon className="w-3.5 h-3.5 text-[#0A66C2] shrink-0" />
              <span>LinkedIn Profile</span>
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
        </div>

        {/* Impact Metrics Strip (4 KPI Cards) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12 sm:mt-16 max-w-5xl mx-auto">
          {PROFILE.kpis.map((kpi, idx) => (
            <div
              key={idx}
              className="relative p-4 sm:p-5 rounded-2xl bg-white dark:bg-gradient-to-b dark:from-slate-900/90 dark:to-slate-950/90 border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700 shadow-md dark:shadow-xl transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {kpi.value}
                </span>
                {idx === 0 && <Layers className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />}
                {idx === 1 && <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />}
                {idx === 2 && <Terminal className="w-4 h-4 text-amber-600 dark:text-amber-400" />}
                {idx === 3 && <Award className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />}
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-200">
                {kpi.label}
              </div>
              <div className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 mt-0.5 font-medium">
                {kpi.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
