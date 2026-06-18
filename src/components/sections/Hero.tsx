import { useNavigation } from '../../context/NavigationContext';
import { useState, useEffect } from 'react';

// Get the base URL from Vite
const baseUrl = import.meta.env.BASE_URL;

const titles = [
  'Senior Software Engineer',
  '.NET Developer',
  'Competitive Programmer',
  'Senior Backend Developer',
  'AI Solution Expert'
];

// Skip the typewriter animation for users who prefer reduced motion.
const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const Hero = () => {
  const { navigateToSection } = useNavigation();
  const [displayText, setDisplayText] = useState(() =>
    prefersReducedMotion() ? titles[0] : ''
  );
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const handleTyping = () => {
      const currentIndex = loopNum % titles.length;
      const fullText = titles[currentIndex];

      setDisplayText(
        isDeleting
          ? fullText.substring(0, displayText.length - 1)
          : fullText.substring(0, displayText.length + 1)
      );

      // Set typing speed
      if (isDeleting) {
        setTypingSpeed(80); // Faster when deleting
      } else {
        setTypingSpeed(150); // Normal speed when typing
      }

      // If completed typing the word
      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500); // Wait before starting to delete
      }
      // If deleted the word
      else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500); // Pause before typing next word
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed]);

  return (
    <section id="home" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Md Erfanul Islam Bhuiyan
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-600 dark:text-blue-400 h-10">
              <span className="typewriter">{displayText}</span>
              <span className="cursor-blink">|</span>
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-lg">
              Backend and AI-focused Software Engineer with 4+ years building enterprise platforms, AI workflows, and distributed systems. I turn complex business requirements into reliable services across .NET, Python, RAG, and event-driven architectures.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => navigateToSection('contact')}
                className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Contact Me
              </button>
              <a
                href="https://app.flowcv.com/api/public/download_resume?token=3o90gnnmlts0"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-md hover:bg-blue-600 hover:text-white dark:hover:text-white transition-colors flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                View Resume
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl border-4 border-white dark:border-gray-800">
              {/* Erfan's profile image with fallback */}
              <img
                src={`${baseUrl}profile-erfan.jpg`}
                alt="Md Erfanul Islam Bhuiyan"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // If image fails to load, show a fallback
                  const target = e.target as HTMLImageElement;
                  target.onerror = null; // Prevent infinite loop
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.classList.add('bg-blue-100', 'dark:bg-blue-900', 'flex', 'items-center', 'justify-center');
                    const initials = document.createElement('span');
                    initials.textContent = 'EIB';
                    initials.className = 'text-4xl font-bold text-blue-600 dark:text-blue-400';
                    parent.appendChild(initials);
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 