import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { VscHome, VscArchive, VscAccount, VscMail, VscColorMode } from 'react-icons/vsc';
import './App.css';
import Dock from './components/Dock';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Noise from './components/Noise';

// Dark mode context
const DarkModeContext = createContext();

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }
  return context;
};

// Navigation component with dock
function AppContent() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [currentSection, setCurrentSection] = useState(0);
  const sectionsRef = useRef([]);
  const isScrolling = useRef(false);

  const sections = [
    { path: '/', component: Home, label: 'Home', icon: <VscHome size={18} /> },
    { path: '/projects', component: Projects, label: 'Projects', icon: <VscArchive size={18} /> },
    { path: '/skills', component: Skills, label: 'Skills', icon: <VscAccount size={18} /> },
    { path: '/contact', component: Contact, label: 'Contact', icon: <VscMail size={18} /> },
  ];

  const items = [
    { 
      icon: <VscHome size={18} />, 
      label: 'Home', 
      onClick: () => scrollToSection(0),
      className: currentSection === 0 ? 'active' : ''
    },
    { 
      icon: <VscArchive size={18} />, 
      label: 'Projects', 
      onClick: () => scrollToSection(1),
      className: currentSection === 1 ? 'active' : ''
    },
    { 
      icon: <VscAccount size={18} />, 
      label: 'Skills', 
      onClick: () => scrollToSection(2),
      className: currentSection === 2 ? 'active' : ''
    },
    { 
      icon: <VscMail size={18} />, 
      label: 'Contact', 
      onClick: () => scrollToSection(3),
      className: currentSection === 3 ? 'active' : ''
    },
    { 
      icon: <VscColorMode size={18} />, 
      label: darkMode ? 'Light Mode' : 'Dark Mode', 
      onClick: toggleDarkMode,
      className: 'dark-mode-toggle'
    },
  ];

  const scrollToSection = (sectionIndex) => {
    if (sectionsRef.current[sectionIndex]) {
      isScrolling.current = true;
      sectionsRef.current[sectionIndex].scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      setCurrentSection(sectionIndex);
      setTimeout(() => {
        isScrolling.current = false;
      }, 1000);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling.current) return;

      const scrollPosition = window.scrollY + window.innerHeight / 2;
      sectionsRef.current.forEach((section, index) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          const sectionTop = rect.top + window.scrollY;
          const sectionBottom = sectionTop + rect.height;
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            if (currentSection !== index) {
              setCurrentSection(index);
            }
          }
        }
      });
    };
    const handleCustomScroll = (e) => {
      if (typeof e.detail === 'number') {
        scrollToSection(e.detail);
      }
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scrollToSection', handleCustomScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scrollToSection', handleCustomScroll);
  }, [currentSection]);

  return (
    <div className={`min-h-screen bg-white dark:bg-black overflow-x-hidden ${darkMode ? 'dark' : ''}`} style={{position: 'relative'}}>
      <Noise
        patternSize={250}
        patternScaleX={1}
        patternScaleY={1}
        patternRefreshInterval={2}
        patternAlpha={15}
      />
      
      <div className="sections-container">
        {sections.map((section, index) => {
          const Component = section.component;
          return (
            <div
              key={section.path}
              ref={(el) => (sectionsRef.current[index] = el)}
              className="section-wrapper"
            >
              <Component />
            </div>
          );
        })}
      </div>
      
      <Dock 
        items={items}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
        darkMode={darkMode}
      />
    </div>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode

  useEffect(() => {
    // Apply dark mode to html element for Tailwind CSS
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <Router>
        <AppContent />
      </Router>
    </DarkModeContext.Provider>
  );
}

export default App; 