import React from 'react';
import { motion } from 'framer-motion';
import { socialLinks, personalInfo } from '../../utils/data';
import { scrollToElement } from '../../utils/helpers';
import { Button } from '../ui/Button';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4
      }
    })
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.5 + i * 0.1,
        duration: 0.4,
        type: 'spring',
        stiffness: 300
      }
    })
  };

  const quickLinks = [
    { label: 'Beranda', href: 'hero' },
    { label: 'Tentang', href: 'about' },
    { label: 'Proyek', href: 'projects' },
    { label: 'Layanan', href: 'services' },
    { label: 'Blog', href: 'blog' },
    { label: 'Kontak', href: 'contact' }
  ];

  const services = [
    'Pengembangan Web',
    'Integrasi API',
    'Optimasi Performa',
    'Konsultasi Teknis',
    'Maintenance Website',
    'Code Review'
  ];

  return (
    <motion.footer
      className="footer"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, threshold: 0.1 }}
    >
      <div className="footer__container">
        {/* Main Footer Content */}
        <div className="footer__content">
          {/* Brand Section */}
          <div className="footer__brand">
            <motion.div
              className="footer__logo"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="footer__logo-text">Fitra</span>
              <span className="footer__logo-accent">RO</span>
            </motion.div>
            <p className="footer__description">
              Passionate fullstack developer yang berdedikasi untuk menciptakan 
              solusi web inovatif dan berkualitas tinggi.
            </p>
            <div className="footer__contact-info">
              <div className="footer__contact-item">
                <span className="footer__contact-icon">📧</span>
                <span>{personalInfo.email}</span>
              </div>
              <div className="footer__contact-item">
                <span className="footer__contact-icon">📱</span>
                <span>{personalInfo.phone}</span>
              </div>
              <div className="footer__contact-item">
                <span className="footer__contact-icon">📍</span>
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__section">
            <h3 className="footer__section-title">Quick Links</h3>
            <ul className="footer__links">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  variants={linkVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={index}
                >
                  <button
                    className="footer__link"
                    onClick={() => scrollToElement(link.href)}
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer__section">
            <h3 className="footer__section-title">Layanan</h3>
            <ul className="footer__links">
              {services.map((service, index) => (
                <motion.li
                  key={service}
                  variants={linkVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={index}
                >
                  <span className="footer__service">{service}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer__section">
            <h3 className="footer__section-title">Stay Connected</h3>
            <p className="footer__newsletter-text">
              Dapatkan update terbaru tentang artikel dan proyek saya.
            </p>
            <div className="footer__newsletter">
              <input
                type="email"
                placeholder="Email address"
                className="footer__newsletter-input"
              />
              <Button
                variant="primary"
                size="sm"
                className="footer__newsletter-button"
              >
                Subscribe
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="footer__social">
              <h4 className="footer__social-title">Follow Me</h4>
              <div className="footer__social-links">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__social-link"
                    variants={socialVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={index}
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 5,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={`Follow me on ${social.platform}`}
                  >
                    <span className="footer__social-icon">{social.icon}</span>
                    <span className="footer__social-label">{social.platform}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer__bottom">
          <div className="footer__bottom-content">
            <div className="footer__copyright">
              <p>
                © {currentYear} {personalInfo.name}. All rights reserved.
              </p>
              <p className="footer__made-with">
                Made with ❤️ using React & TypeScript
              </p>
            </div>
            
            <div className="footer__bottom-links">
              <button className="footer__bottom-link">
                Privacy Policy
              </button>
              <button className="footer__bottom-link">
                Terms of Service
              </button>
              <button 
                className="footer__bottom-link"
                onClick={() => scrollToElement('hero')}
              >
                Back to Top ↑
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="footer__decoration">
        <div className="footer__decoration-circle footer__decoration-circle--1"></div>
        <div className="footer__decoration-circle footer__decoration-circle--2"></div>
        <div className="footer__decoration-circle footer__decoration-circle--3"></div>
      </div>
    </motion.footer>
  );
};

export default Footer;