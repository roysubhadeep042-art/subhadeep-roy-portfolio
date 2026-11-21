import React from 'react';
import { PROFILE } from '../data/profile';
import { PROJECTS } from '../data/projects';
import { EXPERIENCES } from '../data/experience';
import { DEGREES, CERTIFICATIONS } from '../data/credentials';
import { SKILL_PILLARS } from '../data/skills';
import { getAssembledEmail } from '../utils/security';

export const CVPrintView: React.FC = () => {
  const email = getAssembledEmail();

  return (
    <div className="print-only text-black bg-white p-8 max-w-[850px] mx-auto text-xs font-sans leading-relaxed">
      {/* Header */}
      <div className="border-b-2 border-slate-900 pb-4 mb-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
              {PROFILE.nameEn} ({PROFILE.nameBn})
            </h1>
            <p className="text-xs font-semibold text-slate-700 mt-0.5">
              {PROFILE.subheadline}
            </p>
          </div>
          <div className="text-right text-[11px] text-slate-600 space-y-0.5 font-mono">
            <div>Email: {email}</div>
            <div>Location: {PROFILE.location}</div>
            <div>LinkedIn: linkedin.com/in/subhadeep-roy-5bb3a6110</div>
          </div>
        </div>
        <p className="text-[11px] text-slate-700 mt-2.5 leading-snug">
          {PROFILE.executiveSummary}
        </p>
      </div>

      {/* Core Competencies Matrix */}
      <div className="mb-4">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
          Core Competencies & Technical Pillars
        </h2>
        <div className="grid grid-cols-2 gap-2 text-[11px]">
          {SKILL_PILLARS.map((pillar) => (
            <div key={pillar.title} className="space-y-0.5">
              <strong className="text-slate-900">{pillar.title}: </strong>
              <span className="text-slate-700">
                {pillar.skills.map((s) => s.name).join(', ')}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Shipped AI Applications */}
      <div className="mb-4">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
          Featured Shipped AI Systems & Products
        </h2>
        <div className="space-y-2.5">
          {PROJECTS.map((proj) => (
            <div key={proj.id} className="print-break-inside-avoid">
              <div className="flex items-center justify-between text-[11px]">
                <span className="font-bold text-slate-900">{proj.title}</span>
                <span className="font-mono text-slate-600 text-[10px]">
                  {proj.category}
                </span>
              </div>
              <div className="text-[10px] text-slate-600 italic">
                Stack: {proj.stack.join(', ')}
              </div>
              <ul className="list-disc list-inside text-[11px] text-slate-700 mt-0.5 space-y-0.5">
                {proj.highlights.slice(0, 3).map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Professional Experience */}
      <div className="mb-4 print-break-before">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
          Professional Experience
        </h2>
        <div className="space-y-3">
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="print-break-inside-avoid">
              <div className="flex items-center justify-between text-[11px]">
                <strong className="text-slate-900">{exp.role}</strong>
                <span className="font-mono text-slate-600 text-[10px]">{exp.period}</span>
              </div>
              <div className="text-[10px] text-slate-600">
                {exp.company} — {exp.location}
              </div>
              <ul className="list-disc list-inside text-[11px] text-slate-700 mt-1 space-y-0.5">
                {exp.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Education & Qualifications */}
      <div className="mb-4 print-break-inside-avoid">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
          Education & Formal Qualifications
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
          {DEGREES.map((deg, i) => (
            <div key={i} className="p-2 border border-slate-200 rounded">
              <div className="font-bold text-slate-900">{deg.title}</div>
              <div className="text-[10px] text-slate-600">{deg.institution} {deg.year ? `(${deg.year})` : ''}</div>
              <div className="text-[10px] text-slate-700 mt-0.5">{deg.highlights}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Key Certifications */}
      <div className="print-break-inside-avoid">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-1">
          Select Verified Certifications (25+ Total)
        </h2>
        <div className="text-[10px] text-slate-700 leading-normal">
          {CERTIFICATIONS.filter((c) => c.featured)
            .map((c) => `${c.name} (${c.issuer}, ${c.date})`)
            .join(' • ')}
        </div>
      </div>
    </div>
  );
};
