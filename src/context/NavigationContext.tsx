import { createContext, useContext, ReactNode, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// Order here sets the navigation order across all nav widgets.
export const sections = [
  { id: 'home', name: 'Home', path: '/' },
  { id: 'experience', name: 'Experience', path: '/experience' },
  { id: 'education', name: 'Education', path: '/education' },
  { id: 'projects', name: 'Projects', path: '/projects' },
  { id: 'skills', name: 'Skills', path: '/skills' },
  { id: 'contact', name: 'Contact', path: '/contact' },
];

interface NavigationContextType {
  currentSection: string;
  navigateToSection: (sectionId: string) => void;
  navigateToNextSection: () => void;
  navigateToPrevSection: () => void;
  sections: typeof sections;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const getCurrentSectionFromPath = useCallback(() => {
    const path = location.pathname;
    const currentSection = sections.find(section => section.path === path);
    return currentSection?.id || 'home';
  }, [location.pathname]);
  
  // Derived from the route during render — no effect/state needed.
  const currentSection = getCurrentSectionFromPath();

  const navigateToSection = useCallback((sectionId: string) => {
    const section = sections.find(s => s.id === sectionId);
    if (section) {
      navigate(section.path);
      window.scrollTo(0, 0);
    }
  }, [navigate]);

  const navigateToNextSection = useCallback(() => {
    const currentIndex = sections.findIndex(s => s.id === currentSection);
    if (currentIndex < sections.length - 1) {
      const nextSection = sections[currentIndex + 1];
      navigateToSection(nextSection.id);
    }
  }, [currentSection, navigateToSection]);

  const navigateToPrevSection = useCallback(() => {
    const currentIndex = sections.findIndex(s => s.id === currentSection);
    if (currentIndex > 0) {
      const prevSection = sections[currentIndex - 1];
      navigateToSection(prevSection.id);
    }
  }, [currentSection, navigateToSection]);
  
  return (
    <NavigationContext.Provider 
      value={{ 
        currentSection, 
        navigateToSection, 
        navigateToNextSection, 
        navigateToPrevSection,
        sections 
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = (): NavigationContextType => {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}; 