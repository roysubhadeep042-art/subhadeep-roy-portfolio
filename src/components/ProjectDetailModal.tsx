import React from 'react';
import { X, ExternalLink, ShieldAlert, Cpu, CheckCircle2 } from 'lucide-react';
import type { Project } from '../types';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
}) => {
  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in"
    >
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 shadow-2xl text-slate-800 dark:text-slate-100 p-6 sm:p-8 space-y-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-cyan-100 dark:bg-cyan-500/10 text-cyan-800 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-500/20 font-bold">
                {project.badge}
              </span>
              {project.version && (
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-300 font-semibold">
                  {project.version}
                </span>
              )}
            </div>
            <h2 id="modal-title" className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 font-medium">
              {project.subtitle}
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tech Stack Chips */}
        <div>
          <h3 className="text-xs font-bold text-slate-700 dark:text-slate-400 uppercase tracking-wider mb-2">
            Engineering & Technology Stack
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="text-xs px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700/60 font-semibold"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Execution Flow & Architecture */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold text-cyan-800 dark:text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
            <Cpu className="w-4 h-4" />
            <span>Architecture & Data Flow</span>
          </h3>
          <div className="space-y-2 p-4 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800">
            {project.architectureDetails.coreFlow.map((step, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 dark:text-slate-300 font-medium">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-cyan-100 dark:bg-cyan-500/20 text-cyan-800 dark:text-cyan-300 font-mono text-[11px] font-bold shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span className="leading-relaxed">{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Key Engineering Components */}
        <div className="space-y-2">
          <h3 className="text-xs font-bold text-slate-700 dark:text-slate-400 uppercase tracking-wider">
            Subsystems & Modules
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.architectureDetails.keyComponents.map((comp) => (
              <div
                key={comp.name}
                className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50"
              >
                <div className="text-xs font-bold text-slate-900 dark:text-white mb-1">
                  {comp.name}
                </div>
                <div className="text-xs text-slate-700 dark:text-slate-400 leading-relaxed font-medium">
                  {comp.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Security & Sandboxing Measures (WCAG AA Compliant Surface & Contrast) */}
        <div className="p-4 rounded-xl bg-amber-50/90 dark:bg-amber-500/5 border border-amber-200 dark:border-amber-500/20 space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-900 dark:text-amber-400 uppercase tracking-wider">
            <ShieldAlert className="w-4 h-4 text-amber-700 dark:text-amber-400" />
            <span>Cybersecurity, Privacy & Sandboxing Guardrails</span>
          </div>
          <ul className="space-y-1.5">
            {project.architectureDetails.safetyMeasures.map((measure, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-xs text-amber-950 dark:text-slate-300 leading-relaxed font-medium"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5" />
                <span>{measure}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-200 dark:border-slate-800">
          <span className="text-xs text-slate-500 dark:text-slate-400 font-mono font-semibold">
            ID: {project.id}
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-bold rounded-xl text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
            >
              Close
            </button>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-xl text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 shadow-md shadow-cyan-600/20 transition-all"
              >
                <span>Launch Live App</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
