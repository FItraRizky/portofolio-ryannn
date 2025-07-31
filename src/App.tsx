import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from './hooks/useTheme';
import { useScrollToTop } from './hooks/useScrollAnimation';
import { pageTransition, pageVariants } from './utils/animations';

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Section Components
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ServicesSection from './components/sections/ServicesSection';
import TestimonialSection from './components/sections/TestimonialSection';
import ContactSection from './components/sections/ContactSection';

// UI Components
import { Button } from './components/ui/Button';

// Icons
import { FiArrowUp } from 'react-icons/fi';

// Styles
import './App.css';

const App: React.FC = () => {
  const { theme } = useTheme();
  const { showScrollTop, scrollToTop } = useScrollToTop();

  return (
    <div className="app" data-theme={theme}>
      <AnimatePresence mode="wait">
        <motion.div
          key="portfolio"
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
          className="app__content"
        >
          {/* Navigation */}
          <Navbar />

          {/* Main Content */}
          <main className="app__main">
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <ServicesSection />
            <TestimonialSection />
            <ContactSection />
          </main>

          {/* Footer */}
          <Footer />

          {/* Scroll to Top Button */}
          <AnimatePresence>
            {showScrollTop && (
              <motion.div
                className="app__scroll-to-top"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  variant="primary"
                  size="sm"
                  icon={<FiArrowUp />}
                  onClick={scrollToTop}
                  className="scroll-to-top-btn"
                  aria-label="Scroll to top"
                >
                  Top
                  
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default App;
