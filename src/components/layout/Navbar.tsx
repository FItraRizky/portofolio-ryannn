import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../hooks/useTheme';
import { useActiveSection } from '../../hooks/useScrollAnimation';
import { scrollToElement } from '../../utils/helpers';
import { Button } from '../ui/Button';
import './Navbar.css';

interface NavItem {
  label: string;
  href: string;
  icon?: string;
}

const navItems: NavItem[] = [
  { label: 'Beranda', href: 'hero', icon: 'Home' },
  { label: 'Tentang', href: 'about', icon: 'About' },
  { label: 'Keahlian', href: 'skills', icon: 'Skills' },
  { label: 'Proyek', href: 'projects', icon: 'Projects' },
  { label: 'Layanan', href: 'services', icon: 'Services' },
  { label: 'Testimoni', href: 'testimonials', icon: 'Reviews' },
  { label: 'Blog', href: 'blog', icon: 'Blog' },
  { label: 'Kontak', href: 'contact', icon: 'Contact' }
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const activeSection = useActiveSection(navItems.map(item => item.href));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    scrollToElement(href);
    setIsMobileMenuOpen(false);
  };

  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      x: '100%'
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: 'easeOut'
      }
    },
    exit: {
      opacity: 0,
      x: '100%',
      transition: {
        duration: 0.3,
        ease: 'easeIn'
      }
    }
  };

  const menuItemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3
      }
    })
  };

  return (
    <motion.nav
      className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}
      variants={navbarVariants as any}
      initial="hidden"
      animate="visible"
    >
      <div className="navbar__container">
        {/* Logo */}
        <motion.div
          className="navbar__logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleNavClick('hero')}
        >
          <span className="navbar__logo-text">Fitra</span>
          <span className="navbar__logo-accent">RO</span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="navbar__nav">
          {navItems.map((item, index) => (
            <motion.button
              key={item.href}
              className={`navbar__link ${
                activeSection === item.href ? 'navbar__link--active' : ''
              }`}
              onClick={() => handleNavClick(item.href)}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="navbar__link-icon">{item.icon}</span>
              <span className="navbar__link-text">{item.label}</span>
            </motion.button>
          ))}
        </div>

        {/* Theme Toggle & Mobile Menu Button */}
        <div className="navbar__actions">
          <motion.button
            className="navbar__theme-toggle"
            onClick={toggleTheme}
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </motion.button>

          <motion.button
            className="navbar__mobile-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle mobile menu"
          >
            <div className={`hamburger ${isMobileMenuOpen ? 'hamburger--active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="navbar__mobile-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              className="navbar__mobile-menu"
              variants={mobileMenuVariants as any}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="navbar__mobile-header">
                <div className="navbar__logo">
                  <span className="navbar__logo-text">Fitra</span>
                  <span className="navbar__logo-accent">RO</span>
                </div>
                <button
                  className="navbar__mobile-close"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  ✕
                </button>
              </div>
              
              <div className="navbar__mobile-nav">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.href}
                    className={`navbar__mobile-link ${
                      activeSection === item.href ? 'navbar__mobile-link--active' : ''
                    }`}
                    onClick={() => handleNavClick(item.href)}
                    variants={menuItemVariants as any}
                    initial="hidden"
                    animate="visible"
                    custom={index}
                  >
                    <span className="navbar__link-icon">{item.icon}</span>
                    <span className="navbar__link-text">{item.label}</span>
                  </motion.button>
                ))}
              </div>

              <div className="navbar__mobile-footer">
                <Button
                  variant="primary"
                  onClick={() => handleNavClick('contact')}
                  className="navbar__cta-button"
                >
                  Hubungi Saya
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;