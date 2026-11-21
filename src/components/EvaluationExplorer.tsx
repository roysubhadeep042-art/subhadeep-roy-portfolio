import React, { useState } from 'react';
import {
  Sparkles,
  Scale,
  CheckCircle2,
  AlertTriangle,
  FileCheck,
  Award,
  Code2,
} from 'lucide-react';
import {
  PROMPT_COT_EXAMPLES,
  HALLUCINATION_CASES,
  MULTI_MODEL_COMPARISONS,
} from '../data/evaluations';

export const EvaluationExplorer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'prompt' | 'hallucination' | 'rlhf'>('prompt');
  const [selectedPromptIdx, setSelectedPromptIdx] = useState(0);
  const [selectedHallucinationIdx, setSelectedHallucinationIdx] = useState(0);
  const [selectedComparisonIdx, setSelectedComparisonIdx] = useState(0);

  const currentPrompt = PROMPT_COT_EXAMPLES[selectedPromptIdx];
  const currentHallucination = HALLUCINATION_CASES[selectedHallucinationIdx];
  const currentComparison = MULTI_MODEL_COMPARISONS[selectedComparisonIdx];

  return (
    <section id="ai-evaluation" className="py-20 sm:py-28 border-b border-slate-200 dark:border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-800 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive AI Methodology Explorer</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Prompt Engineering & RLHF Evaluation Rubrics
          </h2>
          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-400">
            Explore live case studies showcasing Subhadeep's real-world methodology across chain-of-thought constraint structuring, rigorous fact-checking audits, and multi-model RLHF preference ranking.
          </p>

          {/* Master Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            <button
              onClick={() => setActiveTab('prompt')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'prompt'
                  ? 'bg-cyan-600 dark:bg-cyan-500 text-white shadow-lg shadow-cyan-600/30'
                  : 'bg-white dark:bg-slate-900/60 text-slate-700 dark:text-slate-400 hover:text-slate-950 dark:hover:text-slate-200 border border-slate-300 dark:border-slate-800 shadow-sm'
              }`}
            >
              <Code2 className="w-4 h-4" />
              <span>1. Prompt & CoT Structuring</span>
            </button>

            <button
              onClick={() => setActiveTab('hallucination')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'hallucination'
                  ? 'bg-amber-600 dark:bg-amber-500 text-white shadow-lg shadow-amber-600/30'
                  : 'bg-white dark:bg-slate-900/60 text-slate-700 dark:text-slate-400 hover:text-slate-950 dark:hover:text-slate-200 border border-slate-300 dark:border-slate-800 shadow-sm'
              }`}
            >
              <AlertTriangle className="w-4 h-4" />
              <span>2. Hallucination Detection & QA</span>
            </button>

            <button
              onClick={() => setActiveTab('rlhf')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'rlhf'
                  ? 'bg-indigo-600 dark:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30'
                  : 'bg-white dark:bg-slate-900/60 text-slate-700 dark:text-slate-400 hover:text-slate-950 dark:hover:text-slate-200 border border-slate-300 dark:border-slate-800 shadow-sm'
              }`}
            >
              <Scale className="w-4 h-4" />
              <span>3. Multi-Model RLHF Rubric</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Prompt & Chain-of-Thought Structuring */}
        {activeTab === 'prompt' && (
          <div className="space-y-6 max-w-5xl mx-auto">
            {/* Scenario Selector */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2">
              {PROMPT_COT_EXAMPLES.map((ex, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedPromptIdx(idx)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                    selectedPromptIdx === idx
                      ? 'bg-cyan-50 dark:bg-cyan-500/20 text-cyan-800 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-500/40 shadow-sm'
                      : 'bg-white dark:bg-slate-900/50 text-slate-700 dark:text-slate-400 border border-slate-300 dark:border-slate-800 hover:text-slate-900 dark:hover:text-slate-200'
                  }`}
                >
                  {ex.title}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Column: System & User Prompt + Guardrails */}
              <div className="space-y-4">
                <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider">
                      Target Task & Objective
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold border border-slate-200 dark:border-transparent">
                      CoT Schema
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                    {currentPrompt.task}
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-400 uppercase tracking-wider block">
                    System Instruction & Constraints
                  </span>
                  <pre className="text-xs font-mono text-slate-900 dark:text-slate-300 bg-slate-50 dark:bg-slate-950 p-3 rounded-xl border border-slate-200 dark:border-slate-800/80 overflow-x-auto whitespace-pre-wrap leading-relaxed">
                    {currentPrompt.systemPrompt}
                  </pre>
                </div>

                {/* Guardrails (WCAG AA Compliant Surface & Contrast) */}
                <div className="p-4 rounded-xl bg-emerald-50/90 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 shadow-sm space-y-2">
                  <span className="text-xs font-bold text-emerald-900 dark:text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400" />
                    <span>Enforced Guardrails & Quality Filters</span>
                  </span>
                  <ul className="space-y-1.5">
                    {currentPrompt.guardrails.map((g, idx) => (
                      <li key={idx} className="text-xs text-emerald-950 dark:text-slate-200 flex items-start gap-2 font-medium">
                        <span className="text-emerald-700 dark:text-emerald-400 mt-0.5 font-bold">•</span>
                        <span>{g}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column: Step-by-Step CoT + Final Output */}
              <div className="space-y-4">
                {/* Chain of Thought Reasoning Steps */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                  <span className="text-xs font-bold text-amber-800 dark:text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                    <span>Deconstructed Chain-of-Thought (CoT)</span>
                  </span>
                  <div className="space-y-2">
                    {currentPrompt.chainOfThought.map((step, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800/80 text-xs text-slate-800 dark:text-slate-300 font-medium"
                      >
                        <span className="flex items-center justify-center w-4 h-4 rounded-full bg-amber-100 dark:bg-amber-500/20 text-amber-900 dark:text-amber-300 font-mono text-[10px] font-bold shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <span className="leading-relaxed">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Grounded Output */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
                  <span className="text-xs font-bold text-cyan-800 dark:text-cyan-400 uppercase tracking-wider block">
                    Grounded Production Output
                  </span>
                  <div className="text-xs sm:text-sm text-slate-900 dark:text-slate-200 bg-slate-50 dark:bg-slate-950 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800/80 overflow-x-auto whitespace-pre-wrap font-sans leading-relaxed">
                    {currentPrompt.output}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Hallucination Detection & Fact-Checking Workflow */}
        {activeTab === 'hallucination' && (
          <div className="space-y-6 max-w-5xl mx-auto">
            {/* Case Selector */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2">
              {HALLUCINATION_CASES.map((hc, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedHallucinationIdx(idx)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                    selectedHallucinationIdx === idx
                      ? 'bg-amber-50 dark:bg-amber-500/20 text-amber-900 dark:text-amber-300 border border-amber-300 dark:border-amber-500/40 shadow-sm'
                      : 'bg-white dark:bg-slate-900/50 text-slate-700 dark:text-slate-400 border border-slate-300 dark:border-slate-800 hover:text-slate-900 dark:hover:text-slate-200'
                  }`}
                >
                  {hc.title}
                </button>
              ))}
            </div>

            <div className="p-4 sm:p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div>
                  <span className="text-xs font-bold text-amber-800 dark:text-amber-400 uppercase tracking-wider">
                    Audit Domain: {currentHallucination.domain}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-1">
                    {currentHallucination.title}
                  </h3>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-rose-100 dark:bg-rose-500/10 text-rose-800 dark:text-rose-400 border border-rose-200 dark:border-rose-500/20 font-bold">
                  {currentHallucination.hallucinations.length} Anomalies Flagged
                </span>
              </div>

              {/* Raw Output with Highlighting */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800">
                <span className="text-xs font-bold text-slate-700 dark:text-slate-400 uppercase tracking-wider block mb-2">
                  Raw Unaudited Model Output
                </span>
                <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-300 leading-relaxed font-medium">
                  {currentHallucination.rawOutput}
                </p>
              </div>

              {/* Flagged Hallucination Items */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-bold text-rose-800 dark:text-rose-400 uppercase tracking-wider block">
                  Detected Hallucinations & Canonical Verification
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {currentHallucination.hallucinations.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-rose-200 dark:border-rose-500/20 space-y-2 shadow-sm"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-rose-700 dark:text-rose-300 line-through">
                          "{item.flaggedText}"
                        </span>
                        <span
                          className={`text-[10px] uppercase font-mono px-1.5 py-0.5 rounded font-bold ${
                            item.severity === 'critical'
                              ? 'bg-rose-100 dark:bg-rose-500/20 text-rose-800 dark:text-rose-400 border border-rose-200 dark:border-transparent'
                              : 'bg-amber-100 dark:bg-amber-500/20 text-amber-800 dark:text-amber-400 border border-amber-200 dark:border-transparent'
                          }`}
                        >
                          {item.severity}
                        </span>
                      </div>
                      <div className="text-xs text-slate-800 dark:text-slate-300">
                        <strong className="text-slate-950 dark:text-slate-400 font-bold">Issue: </strong>
                        {item.issue}
                      </div>
                      <div className="text-xs text-emerald-950 dark:text-emerald-300 bg-emerald-100/80 dark:bg-emerald-500/5 p-2 rounded-lg border border-emerald-200 dark:border-emerald-500/20 font-medium">
                        <strong className="font-bold text-emerald-900 dark:text-emerald-300">Ground Truth: </strong>
                        {item.groundTruth}
                      </div>
                      <div className="text-[11px] text-slate-600 dark:text-slate-400 font-mono">
                        Source: {item.sourceVerification}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Corrected Production Revision */}
              <div className="p-4 rounded-xl bg-emerald-50/90 dark:bg-emerald-500/5 border border-emerald-200 dark:border-emerald-500/30 space-y-2 pt-3 shadow-sm">
                <span className="text-xs font-bold text-emerald-900 dark:text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                  <FileCheck className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
                  <span>Verified & Corrected Production Content</span>
                </span>
                <p className="text-xs sm:text-sm text-emerald-950 dark:text-slate-200 leading-relaxed font-medium">
                  {currentHallucination.correctedOutput}
                </p>
                <div className="text-[11px] text-slate-700 dark:text-slate-400 pt-1 border-t border-emerald-200 dark:border-emerald-500/20">
                  <strong className="text-emerald-800 dark:text-emerald-400 font-bold">Prevention Rubric: </strong>
                  {currentHallucination.preventionRubric}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Multi-Model Response Comparison (RLHF Rubric) */}
        {activeTab === 'rlhf' && (
          <div className="space-y-6 max-w-5xl mx-auto">
            {/* Scenario Selector */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2">
              {MULTI_MODEL_COMPARISONS.map((comp, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedComparisonIdx(idx)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                    selectedComparisonIdx === idx
                      ? 'bg-indigo-50 dark:bg-indigo-500/20 text-indigo-900 dark:text-indigo-300 border border-indigo-300 dark:border-indigo-500/40 shadow-sm'
                      : 'bg-white dark:bg-slate-900/50 text-slate-700 dark:text-slate-400 border border-slate-300 dark:border-slate-800 hover:text-slate-900 dark:hover:text-slate-200'
                  }`}
                >
                  {comp.title}
                </button>
              ))}
            </div>

            <div className="p-4 sm:p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
              <div>
                <span className="text-xs font-bold text-indigo-800 dark:text-indigo-400 uppercase tracking-wider">
                  Test Prompt Under Evaluation
                </span>
                <div className="mt-1.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-950 text-xs sm:text-sm text-slate-900 dark:text-slate-200 border border-slate-200 dark:border-slate-800 font-mono">
                  "{currentComparison.prompt}"
                </div>
              </div>

              {/* Side-by-Side Model Comparison */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Model A */}
                <div
                  className={`p-4 rounded-xl space-y-3 border ${
                    currentComparison.winner === 'Model A'
                      ? 'bg-emerald-50/50 dark:bg-emerald-500/5 border-emerald-300 dark:border-emerald-500/40'
                      : 'bg-slate-50 dark:bg-slate-950/70 border-slate-200 dark:border-slate-800'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900 dark:text-slate-200">
                      {currentComparison.modelA.name}
                    </span>
                    {currentComparison.winner === 'Model A' && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-400 border border-emerald-200 dark:border-transparent">
                        WINNER
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-800 dark:text-slate-300 leading-relaxed font-sans bg-white dark:bg-slate-900/70 p-3 rounded-lg border border-slate-200 dark:border-slate-800/80 whitespace-pre-wrap font-medium">
                    {currentComparison.modelA.response}
                  </p>

                  {/* Rubric Scores */}
                  <div className="space-y-1.5 pt-2">
                    <span className="text-[11px] font-bold text-slate-700 dark:text-slate-400 uppercase tracking-wider block">
                      Rubric Dimension Scores (/5.0)
                    </span>
                    <div className="grid grid-cols-2 gap-1.5 text-[11px]">
                      <div className="flex justify-between p-1.5 rounded bg-slate-100 dark:bg-slate-900">
                        <span className="text-slate-700 dark:text-slate-400 font-medium">Factuality:</span>
                        <span className="font-bold text-slate-900 dark:text-slate-200">
                          {currentComparison.modelA.scores.factuality}
                        </span>
                      </div>
                      <div className="flex justify-between p-1.5 rounded bg-slate-100 dark:bg-slate-900">
                        <span className="text-slate-700 dark:text-slate-400 font-medium">Instructions:</span>
                        <span className="font-bold text-slate-900 dark:text-slate-200">
                          {currentComparison.modelA.scores.instructionFollowing}
                        </span>
                      </div>
                      <div className="flex justify-between p-1.5 rounded bg-slate-100 dark:bg-slate-900">
                        <span className="text-slate-700 dark:text-slate-400 font-medium">Reasoning:</span>
                        <span className="font-bold text-slate-900 dark:text-slate-200">
                          {currentComparison.modelA.scores.reasoningDepth}
                        </span>
                      </div>
                      <div className="flex justify-between p-1.5 rounded bg-slate-100 dark:bg-slate-900">
                        <span className="text-slate-700 dark:text-slate-400 font-medium">Formatting:</span>
                        <span className="font-bold text-slate-900 dark:text-slate-200">
                          {currentComparison.modelA.scores.formatting}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="text-xs text-slate-800 dark:text-slate-400 bg-white dark:bg-slate-900/90 p-2.5 rounded-lg border border-slate-200 dark:border-slate-800">
                    <strong className="text-slate-950 dark:text-slate-300 font-bold">Critique: </strong>
                    {currentComparison.modelA.critique}
                  </div>
                </div>

                {/* Model B */}
                <div
                  className={`p-4 rounded-xl space-y-3 border ${
                    currentComparison.winner === 'Model B'
                      ? 'bg-emerald-50/50 dark:bg-emerald-500/5 border-emerald-300 dark:border-emerald-500/40 ring-1 ring-emerald-500/20'
                      : 'bg-slate-50 dark:bg-slate-950/70 border-slate-200 dark:border-slate-800'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-800 dark:text-emerald-400">
                      {currentComparison.modelB.name}
                    </span>
                    {currentComparison.winner === 'Model B' && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-500/20 text-emerald-900 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30">
                        WINNER (RLHF Preferred)
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-900 dark:text-slate-200 leading-relaxed font-sans bg-white dark:bg-slate-900/70 p-3 rounded-lg border border-slate-200 dark:border-slate-800/80 whitespace-pre-wrap font-medium">
                    {currentComparison.modelB.response}
                  </p>

                  {/* Rubric Scores */}
                  <div className="space-y-1.5 pt-2">
                    <span className="text-[11px] font-bold text-slate-700 dark:text-slate-400 uppercase tracking-wider block">
                      Rubric Dimension Scores (/5.0)
                    </span>
                    <div className="grid grid-cols-2 gap-1.5 text-[11px]">
                      <div className="flex justify-between p-1.5 rounded bg-slate-100 dark:bg-slate-900">
                        <span className="text-slate-700 dark:text-slate-400 font-medium">Factuality:</span>
                        <span className="font-bold text-emerald-700 dark:text-emerald-400">
                          {currentComparison.modelB.scores.factuality}
                        </span>
                      </div>
                      <div className="flex justify-between p-1.5 rounded bg-slate-100 dark:bg-slate-900">
                        <span className="text-slate-700 dark:text-slate-400 font-medium">Instructions:</span>
                        <span className="font-bold text-emerald-700 dark:text-emerald-400">
                          {currentComparison.modelB.scores.instructionFollowing}
                        </span>
                      </div>
                      <div className="flex justify-between p-1.5 rounded bg-slate-100 dark:bg-slate-900">
                        <span className="text-slate-700 dark:text-slate-400 font-medium">Reasoning:</span>
                        <span className="font-bold text-emerald-700 dark:text-emerald-400">
                          {currentComparison.modelB.scores.reasoningDepth}
                        </span>
                      </div>
                      <div className="flex justify-between p-1.5 rounded bg-slate-100 dark:bg-slate-900">
                        <span className="text-slate-700 dark:text-slate-400 font-medium">Formatting:</span>
                        <span className="font-bold text-emerald-700 dark:text-emerald-400">
                          {currentComparison.modelB.scores.formatting}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="text-xs text-slate-800 dark:text-slate-400 bg-white dark:bg-slate-900/90 p-2.5 rounded-lg border border-slate-200 dark:border-slate-800">
                    <strong className="text-slate-950 dark:text-slate-300 font-bold">Critique: </strong>
                    {currentComparison.modelB.critique}
                  </div>
                </div>
              </div>

              {/* RLHF Annotation & Consensus */}
              <div className="p-4 rounded-xl bg-indigo-50/90 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/30 flex items-start gap-3 shadow-sm">
                <Award className="w-5 h-5 text-indigo-700 dark:text-indigo-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <div className="text-xs font-bold text-indigo-950 dark:text-white uppercase tracking-wider">
                    RLHF Preference Decision & Alignment Note
                  </div>
                  <div className="text-xs sm:text-sm text-indigo-950 dark:text-slate-300 leading-relaxed font-medium">
                    {currentComparison.rlhfAnnotation}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
