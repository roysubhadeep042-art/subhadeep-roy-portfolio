import React, { useState, useEffect } from 'react';
import { Moon, Sun, Printer, Menu, X, ArrowUpRight } from 'lucide-react';
import { PROFILE } from '../data/profile';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  onPrintCV: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  toggleDarkMode,
  onPrintCV,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'AI Evaluation', href: '#ai-evaluation' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Credentials', href: '#credentials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 no-print ${
        isScrolled
          ? 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800/80 shadow-md dark:shadow-black/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Identity */}
          <a
            href="#about"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-lg cursor-pointer"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-600 flex items-center justify-center font-extrabold text-white shadow-md shadow-cyan-600/20 group-hover:scale-105 transition-transform">
              <span className="text-sm">SR</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-base sm:text-lg tracking-tight text-slate-900 dark:text-white group-hover:text-cyan-700 dark:group-hover:text-cyan-400 transition-colors">
                  {PROFILE.nameEn}
                </span>
                <span className="text-xs px-1.5 py-0.5 rounded bg-cyan-100 dark:bg-cyan-500/10 text-cyan-800 dark:text-cyan-400 font-bold border border-cyan-200 dark:border-cyan-500/20">
                  {PROFILE.nameBn}
                </span>
              </div>
              <span className="text-[11px] font-mono text-slate-600 dark:text-slate-400 hidden sm:inline font-medium">
                AI Content Specialist & Prompt Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/90 dark:bg-slate-900/60 p-1.5 rounded-full border border-slate-300/80 dark:border-slate-800/80 shadow-sm backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-cyan-700 dark:hover:text-cyan-300 hover:bg-slate-100 dark:hover:bg-slate-800/60 rounded-full transition-all cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2">
            {/* Dark / Light Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              aria-label={darkMode ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
              className="p-2 rounded-xl text-slate-700 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 border border-slate-300 dark:border-slate-800 shadow-sm transition-colors cursor-pointer"
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            {/* Print / Save CV Button */}
            <button
              onClick={onPrintCV}
              aria-label="Print or Save CV as PDF"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-xl text-slate-800 dark:text-slate-200 hover:text-cyan-700 dark:hover:text-cyan-300 hover:bg-slate-100 dark:hover:bg-slate-800/60 border border-slate-300 dark:border-slate-800 shadow-sm transition-colors cursor-pointer"
              title="Open Print Dialog (Optimized 2-Page CV)"
            >
              <Printer className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              <span>Print / Save CV</span>
            </button>

            {/* Direct Contact Button */}
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-1 px-3.5 py-1.5 text-xs font-bold rounded-xl text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 dark:from-cyan-500 dark:to-blue-600 dark:hover:from-cyan-400 dark:hover:to-blue-500 shadow-sm shadow-cyan-600/25 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="lg:hidden p-2 rounded-xl text-slate-700 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 border border-slate-300 dark:border-slate-800 shadow-sm cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 rounded-2xl bg-white/95 dark:bg-slate-900/95 border border-slate-200 dark:border-slate-800 shadow-2xl backdrop-blur-xl animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-bold text-slate-800 dark:text-slate-200 hover:text-cyan-700 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800/50 rounded-xl transition-all"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onPrintCV();
                  }}
                  className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-cyan-700 dark:hover:text-cyan-400 px-3 py-2 cursor-pointer"
                >
                  <Printer className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  Print / Save CV
                </button>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2 text-xs font-bold rounded-xl text-white bg-gradient-to-r from-cyan-600 to-blue-600"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
