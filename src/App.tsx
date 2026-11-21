import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { EvaluationExplorer } from './components/EvaluationExplorer';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { CredentialsSection } from './components/CredentialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import { CVPrintView } from './components/CVPrintView';

export function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    // Default to rich obsidian/slate dark theme
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
    }
    // Initialize dark class on document element immediately
    if (typeof document !== 'undefined') {
      document.documentElement.classList.add('dark');
    }
    return true;
  });

  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastType, setToastType] = useState<'success' | 'info' | 'error'>('success');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const showToast = (message: string, type: 'success' | 'info' | 'error' = 'success') => {
    setToastMessage(message);
    setToastType(type);
  };

  const handlePrintCV = () => {
    window.print();
  };

  const handleCopyEmail = (email: string) => {
    showToast(`Email copied: ${email}`, 'success');
  };

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-200">
      {/* Screen Presentation (Hidden on Print) */}
      <div className="no-print">
        <Navbar
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          onPrintCV={handlePrintCV}
        />

        <main id="main-content">
          <Hero onCopyEmail={handleCopyEmail} />
          <ProjectsSection />
          <EvaluationExplorer />
          <SkillsSection />
          <ExperienceSection />
          <CredentialsSection />
          <ContactSection onCopyEmail={handleCopyEmail} onToast={showToast} />
        </main>

        <Footer />

        {/* Global Toast Feedback */}
        {toastMessage && (
          <Toast
            message={toastMessage}
            type={toastType}
            onClose={() => setToastMessage(null)}
          />
        )}
      </div>

      {/* Print-Only Executive CV Layout */}
      <CVPrintView />
    </div>
  );
}

export default App;
