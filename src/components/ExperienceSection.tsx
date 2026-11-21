import React from 'react';
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Building2,
} from 'lucide-react';
import { EXPERIENCES } from '../data/experience';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 sm:py-28 border-b border-slate-200 dark:border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 text-indigo-800 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Milestones & Roles</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Professional Experience Timeline
          </h2>
          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-400 font-medium">
            A non-linear journey demonstrating engineering diagnostics, structured English instructional authorship, talent evaluation, and frontier AI prompt & RLHF specialization.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Center Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-gradient-to-b from-cyan-500 via-indigo-500 to-slate-400 dark:to-slate-800" />

          {/* Timeline Nodes */}
          <div className="space-y-12">
            {EXPERIENCES.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={exp.id}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Center Dot Indicator */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white dark:bg-slate-950 border-2 border-cyan-500 dark:border-cyan-400 flex items-center justify-center z-10 shadow-md shadow-cyan-500/20 mt-1">
                    <div className="w-2 h-2 rounded-full bg-cyan-600 dark:bg-cyan-400" />
                  </div>

                  {/* Spacer for Alternate layout */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Experience Card */}
                  <div className="ml-10 sm:ml-0 sm:w-1/2 sm:px-6">
                    <div className="p-6 rounded-2xl bg-white dark:bg-gradient-to-b dark:from-slate-900/90 dark:to-slate-950/90 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-lg dark:shadow-xl transition-all duration-300 space-y-4">
                      {/* Badge & Period */}
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <span className="text-xs px-2.5 py-0.5 rounded-full bg-cyan-100 dark:bg-cyan-500/10 text-cyan-800 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-500/20 font-bold">
                          {exp.badge}
                        </span>
                        <div className="flex items-center gap-1 text-xs text-slate-600 dark:text-slate-400 font-mono font-semibold">
                          <Calendar className="w-3.5 h-3.5 text-slate-500" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      {/* Role & Company */}
                      <div>
                        <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 text-xs text-slate-800 dark:text-slate-300 font-bold mt-1">
                          <Building2 className="w-3.5 h-3.5 text-slate-600 dark:text-slate-400 shrink-0" />
                          <span>{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 mt-0.5 font-medium">
                          <MapPin className="w-3 h-3 text-slate-500 shrink-0" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      {/* Bullet Highlights */}
                      <ul className="space-y-2 border-t border-slate-200 dark:border-slate-800/80 pt-3">
                        {exp.bullets.map((bullet, bIdx) => (
                          <li
                            key={bIdx}
                            className="flex items-start gap-2 text-xs sm:text-sm text-slate-800 dark:text-slate-300 leading-relaxed font-medium"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Highlight Keywords */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {exp.highlightKeywords.map((kw) => (
                          <span
                            key={kw}
                            className="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-400 font-mono font-semibold border border-slate-200 dark:border-transparent"
                          >
                            {kw}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
