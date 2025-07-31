import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { scrollToElement } from '../../utils/helpers';
import { fadeInUp, fadeInDown, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from '../../utils/animations';
import { Button } from '../ui/Button';
import { personalInfo } from '../../utils/data';
import { FiDownload, FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi';
import ProfileCard from '../ProfileCard/ProfileCard';
import TextType from '../../textanimations/TextType/TextType';
import './HeroSection.css';

const HeroSection: React.FC = () => {
  const { ref, isInView } = useScrollAnimation();
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ['Fullstack Developer', 'React Specialist', 'Node.js Expert', 'UI/UX Enthusiast'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleScrollToProjects = () => {
    scrollToElement('projects');
  };

  const handleScrollToContact = () => {
    scrollToElement('contact');
  };

  return (
    <section id="hero" className="hero" ref={ref}>
      <div className="hero__background">
        <div className="hero__gradient"></div>
        <div className="hero__particles"></div>
      </div>
      
      <div className="hero__container">
        <motion.div
          className="hero__content"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className="hero__text" variants={staggerItem}>
            <motion.span className="hero__greeting" variants={fadeInUp}>
              👋 Halo, saya
            </motion.span>
            
            <motion.h1 className="hero__name" variants={fadeInUp}>
              <TextType
                text={personalInfo.name}
                typingSpeed={75}
                showCursor={true}
                cursorCharacter="|"
                loop={false}
                initialDelay={500}
                className="hero__name-text"
              />
            </motion.h1>
            
            <motion.div className="hero__role-container" variants={fadeInUp}>
              <span className="hero__role-prefix">Saya seorang </span>
              <motion.span 
                key={currentRole}
                className="hero__role"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {roles[currentRole]}
              </motion.span>
            </motion.div>
            
            <motion.p className="hero__description" variants={fadeInUp}>
              {personalInfo.bio}
            </motion.p>
            
            <motion.div className="hero__actions" variants={fadeInUp}>
              <Button
                variant="primary"
                size="lg"
                onClick={handleScrollToProjects}
                icon={<FiArrowDown />}
                iconPosition="right"
                className="hero__cta"
              >
                Lihat Portfolio
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={handleScrollToContact}
                icon={<FiMail />}
                iconPosition="left"
                className="hero__contact"
              >
                Hubungi Saya
              </Button>
            </motion.div>
            
            <motion.div className="hero__social" variants={fadeInUp}>
              <a href="https://github.com/fitrarizky" target="_blank" rel="noopener noreferrer" className="hero__social-link">
                <FiGithub />
              </a>
              <a href="https://linkedin.com/in/fitrarizky" target="_blank" rel="noopener noreferrer" className="hero__social-link">
                <FiLinkedin />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="hero__social-link">
                <FiMail />
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div className="hero__profile-card" variants={fadeInRight}>
            <ProfileCard
              avatarUrl={personalInfo.avatar}
              name={personalInfo.name}
              title={roles[currentRole]}
              handle={personalInfo.handle}
              status="Online"
              contactText="Contact"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={true}
              onContactClick={handleScrollToContact}
              className="hero__profile-card-component"
            />
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="hero__scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <div className="hero__scroll-line"></div>
          <span className="hero__scroll-text">Scroll untuk melihat lebih banyak</span>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;