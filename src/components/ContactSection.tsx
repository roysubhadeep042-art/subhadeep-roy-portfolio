import React, { useState } from 'react';
import {
  Mail,
  Copy,
  Check,
  Send,
  ShieldCheck,
  AlertCircle,
  MapPin,
  Lock,
} from 'lucide-react';
import { PROFILE } from '../data/profile';
import {
  getAssembledEmail,
  sanitizeInput,
  isValidEmail,
  createSafeMailto,
  isHoneypotClean,
} from '../utils/security';
import { LinkedinIcon } from './Icons';

interface ContactSectionProps {
  onCopyEmail: (email: string) => void;
  onToast: (msg: string, type?: 'success' | 'info' | 'error') => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onCopyEmail,
  onToast,
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [inquiryType, setInquiryType] = useState('AI Content & RLHF Evaluation');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState(''); // Anti-bot hidden trap
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const assembledEmail = getAssembledEmail();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(assembledEmail);
    setCopiedEmail(true);
    onCopyEmail(assembledEmail);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const validateForm = () => {
    const errs: { [key: string]: string } = {};

    // Check honeypot first
    if (!isHoneypotClean(honeypot)) {
      errs.honeypot = 'Automated bot activity detected.';
    }

    const cleanName = sanitizeInput(name, 80);
    if (!cleanName) {
      errs.name = 'Please provide your name.';
    }

    const cleanEmail = sanitizeInput(email, 100);
    if (!cleanEmail) {
      errs.email = 'Please provide your email address.';
    } else if (!isValidEmail(cleanEmail)) {
      errs.email = 'Please provide a valid email format.';
    }

    const cleanMsg = sanitizeInput(message, 2000);
    if (!cleanMsg) {
      errs.message = 'Please include an inquiry message.';
    } else if (cleanMsg.length < 15) {
      errs.message = 'Please provide a brief message of at least 15 characters.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleOpenMailto = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const safeName = sanitizeInput(name, 80);
    const safeEmail = sanitizeInput(email, 100);
    const safeType = sanitizeInput(inquiryType, 80);
    const safeMsg = sanitizeInput(message, 2000);

    const subject = `[Inquiry - ${safeType}] From ${safeName}`;
    const body = `Hello Subhadeep,

My name is: ${safeName}
My email: ${safeEmail}
Inquiry Category: ${safeType}

Message:
${safeMsg}

---
Sent via portfolio inquiry interface.`;

    const mailtoUrl = createSafeMailto(subject, body);
    window.location.href = mailtoUrl;
    onToast('Opened draft in your default email client!', 'success');
  };

  const handleCopyMessage = () => {
    if (!validateForm()) return;

    const safeName = sanitizeInput(name, 80);
    const safeEmail = sanitizeInput(email, 100);
    const safeType = sanitizeInput(inquiryType, 80);
    const safeMsg = sanitizeInput(message, 2000);

    const formatted = `To: ${assembledEmail}
Subject: [Inquiry - ${safeType}] From ${safeName}

Hello Subhadeep,

My name is: ${safeName} (${safeEmail})
Inquiry Category: ${safeType}

Message:
${safeMsg}`;

    navigator.clipboard.writeText(formatted);
    onToast('Inquiry drafted and copied to clipboard!', 'success');
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 text-cyan-800 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Inquiries & Collaboration</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Get in Touch
          </h2>
          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-400 font-medium">
            Available for remote AI response evaluation, prompt engineering consulting, edtech curriculum architecture, and full-stack AI development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          {/* Left Column: Direct Verified Channels & Security Badges (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Scraper-Protected Email Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-gradient-to-b dark:from-slate-900/90 dark:to-slate-950/90 border border-slate-200 dark:border-slate-800 shadow-lg dark:shadow-xl space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-cyan-800 dark:text-cyan-400 uppercase tracking-wider">
                <Lock className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>Anti-Scraper Protected Email</span>
              </div>
              <p className="text-xs text-slate-700 dark:text-slate-400 leading-relaxed font-medium">
                Assembled dynamically at client runtime to neutralize static web crawler harvesting:
              </p>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-2 shadow-inner">
                <span className="font-mono text-xs sm:text-sm text-cyan-800 dark:text-cyan-300 font-bold truncate">
                  {assembledEmail}
                </span>
                <button
                  onClick={handleCopyEmail}
                  aria-label="Copy verified email to clipboard"
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold bg-cyan-100 dark:bg-cyan-500/20 text-cyan-800 dark:text-cyan-300 hover:bg-cyan-200 dark:hover:bg-cyan-500/30 transition-colors shrink-0 cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Direct Verified Social & Location */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-lg dark:shadow-xl space-y-4">
              <h3 className="text-xs font-bold text-slate-700 dark:text-slate-400 uppercase tracking-wider">
                Verified Direct Coordinates
              </h3>

              <div className="space-y-3">
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 hover:border-cyan-500 text-slate-800 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-all group font-semibold shadow-sm"
                >
                  <div className="flex items-center gap-2.5">
                    <LinkedinIcon className="w-4 h-4 text-[#0A66C2]" />
                    <span className="text-xs sm:text-sm">
                      Subhadeep Roy on LinkedIn
                    </span>
                  </div>
                  <span className="text-xs text-cyan-700 dark:text-cyan-400 group-hover:translate-x-0.5 transition-transform">
                    View ↗
                  </span>
                </a>

                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 text-slate-800 dark:text-slate-300 font-medium">
                  <MapPin className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                  <div className="text-xs sm:text-sm">
                    <span className="font-bold text-slate-900 dark:text-white">Location: </span>
                    <span>{PROFILE.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Security & Privacy Commitment (WCAG AA Compliant Surface & Contrast) */}
            <div className="p-5 rounded-2xl bg-emerald-50/90 dark:bg-emerald-500/5 border border-emerald-200 dark:border-emerald-500/20 space-y-2 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-900 dark:text-emerald-400 uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
                <span>Zero Tracking & Privacy Hardened</span>
              </div>
              <p className="text-xs text-emerald-950 dark:text-slate-300 leading-relaxed font-medium">
                This site operates with <strong>zero unverified tracking scripts</strong>, zero third-party telemetry cookies, and strict client-side input sanitization.
              </p>
            </div>
          </div>

          {/* Right Column: Sanitized Interactive Composer Form (7 cols) */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleOpenMailto}
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-gradient-to-b dark:from-slate-900/90 dark:to-slate-950/90 border border-slate-200 dark:border-slate-800 shadow-lg dark:shadow-xl space-y-5"
            >
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
                <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">
                  Send a Structured Inquiry
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 font-medium">
                  Inputs are sanitized client-side before assembling a safe, encoded draft.
                </p>
              </div>

              {/* Anti-Bot Hidden Honeypot Field */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website_check">Leave this field blank</label>
                <input
                  type="text"
                  id="website_check"
                  name="website_check"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-800 dark:text-slate-300 block">
                    Your Name <span className="text-cyan-600 dark:text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    maxLength={80}
                    placeholder="e.g. Dr. Ananya Sen"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 focus:border-cyan-500 focus:outline-none text-slate-900 dark:text-slate-200 shadow-sm transition-colors font-medium"
                  />
                  {errors.name && (
                    <span className="text-[11px] text-rose-600 dark:text-rose-400 flex items-center gap-1 font-semibold">
                      <AlertCircle className="w-3 h-3" />
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-800 dark:text-slate-300 block">
                    Your Email <span className="text-cyan-600 dark:text-cyan-400">*</span>
                  </label>
                  <input
                    type="email"
                    maxLength={100}
                    placeholder="e.g. ananya@organization.org"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 focus:border-cyan-500 focus:outline-none text-slate-900 dark:text-slate-200 shadow-sm transition-colors font-medium"
                  />
                  {errors.email && (
                    <span className="text-[11px] text-rose-600 dark:text-rose-400 flex items-center gap-1 font-semibold">
                      <AlertCircle className="w-3 h-3" />
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              {/* Inquiry Type */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-800 dark:text-slate-300 block">
                  Inquiry Category
                </label>
                <select
                  value={inquiryType}
                  onChange={(e) => setInquiryType(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 focus:border-cyan-500 focus:outline-none text-slate-900 dark:text-slate-200 shadow-sm transition-colors font-semibold"
                >
                  <option value="AI Content & RLHF Evaluation">
                    AI Content Strategy & RLHF Response Evaluation
                  </option>
                  <option value="Prompt Engineering / AI Agents">
                    Prompt Engineering & AI Agent Architecture
                  </option>
                  <option value="EdTech Consulting">
                    EdTech Consulting & Curriculum Alignment (NCF-FS / NEP)
                  </option>
                  <option value="General Inquiries">
                    General Collaboration / Professional Inquiries
                  </option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-800 dark:text-slate-300 block">
                    Message Details <span className="text-cyan-600 dark:text-cyan-400">*</span>
                  </label>
                  <span className="text-[10px] text-slate-500 font-mono font-semibold">
                    {message.length}/2000 chars
                  </span>
                </div>
                <textarea
                  rows={4}
                  maxLength={2000}
                  placeholder="Outline your project scope, evaluation requirements, or consulting timeline..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 focus:border-cyan-500 focus:outline-none text-slate-900 dark:text-slate-200 shadow-sm transition-colors font-medium"
                />
                {errors.message && (
                  <span className="text-[11px] text-rose-600 dark:text-rose-400 flex items-center gap-1 font-semibold">
                    <AlertCircle className="w-3 h-3" />
                    {errors.message}
                  </span>
                )}
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleCopyMessage}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-slate-800 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-transparent transition-colors cursor-pointer"
                  title="Copy formatted message text to clipboard"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Formatted Text</span>
                </button>

                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 dark:from-cyan-500 dark:to-blue-600 dark:hover:from-cyan-400 dark:hover:to-blue-500 shadow-md shadow-cyan-600/25 transition-all cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Open Safe Mailto Draft</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
