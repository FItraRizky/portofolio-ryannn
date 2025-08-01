import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { skills, experiences, education } from '../../utils/data';
import { fadeInUp, fadeInLeft, fadeInRight } from '../../utils/animations';
import { Card, CardHeader, CardBody } from '../ui/Card';
import Hyperspeed from '../../backgrounds/Hyperspeed/Hyperspeed';

import './AboutSection.css';

const AboutSection: React.FC = () => {
  const { ref, isInView } = useScrollAnimation();
  const [activeTab, setActiveTab] = useState<'skills' | 'experience' | 'education'>('skills');
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: 'easeOut',
        delay: 0.5
      }
    })
  };

  const getSkillLevelText = (level: number): string => {
    if (level >= 90) return 'Expert';
    if (level >= 75) return 'Advanced';
    if (level >= 60) return 'Intermediate';
    return 'Beginner';
  };

  const getSkillColor = (category: string): string => {
    const colors: { [key: string]: string } = {
      'Frontend': 'var(--primary-color)',
      'Backend': 'var(--secondary-color)',
      'Database': 'var(--accent-color)',
      'DevOps': '#ff6b6b',
      'Tools': '#4ecdc4',
      'Other': '#45b7d1'
    };
    return colors[category] || 'var(--primary-color)';
  };

  const tabs = [
    { id: 'skills', label: 'Skills & Expertise', icon: '🚀' },
    { id: 'experience', label: 'Work Experience', icon: '💼' },
    { id: 'education', label: 'Education', icon: '🎓' }
  ];

  return (
    <section id="about" className="about" ref={ref}>
      {/* Hyperspeed Background */}
      <div className="about__background">
        <Hyperspeed effectOptions={{
          distortion: "turbulentDistortion",
          length: 400,
          roadWidth: 10,
          islandWidth: 2,
          lanesPerRoad: 3,
          fov: 90,
          fovSpeedUp: 150,
          speedUp: 2,
          carLightsFade: 0.4,
          totalSideLightSticks: 20,
          lightPairsPerRoadWay: 40,
          shoulderLinesWidthPercentage: 0.05,
          brokenLinesWidthPercentage: 0.1,
          brokenLinesLengthPercentage: 0.5,
          lightStickWidth: [0.12, 0.5] as [number, number],
          lightStickHeight: [1.3, 1.7] as [number, number],
          movingAwaySpeed: [60, 80] as [number, number],
          movingCloserSpeed: [-120, -160] as [number, number],
          carLightsLength: [12, 80] as [number, number],
          carLightsRadius: [0.05, 0.14] as [number, number],
          carWidthPercentage: [0.3, 0.5] as [number, number],
          carShiftX: [-0.8, 0.8] as [number, number],
          carFloorSeparation: [0, 5] as [number, number],
          colors: {
            roadColor: 0x080808,
            islandColor: 0x0a0a0a,
            background: 0x000000,
            shoulderLines: 0x131318,
            brokenLines: 0x131318,
            leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
            rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
            sticks: 0x03b3c3,
          }
        }} />
      </div>
      <div className="about__container">
        {/* Section Header */}
        <motion.div
          className="about__header"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.span className="about__subtitle" variants={itemVariants as any}>
            Tentang Saya
          </motion.span>
          <motion.h2 className="about__title" variants={itemVariants as any}>
            Passion, Dedikasi & Inovasi
          </motion.h2>
          <motion.p className="about__description" variants={itemVariants as any}>
            Seorang fullstack developer yang passionate dalam menciptakan solusi teknologi 
            yang memberikan dampak positif. Dengan pengalaman lebih dari 3 tahun, saya 
            terus belajar dan berkembang dalam dunia teknologi yang dinamis.
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <div className="about__content">
          {/* Personal Story */}
          <motion.div
            className="about__story"
            variants={fadeInLeft as any}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <Card className="about__story-card" variant="gradient">
              <CardHeader>
                <h3>Perjalanan Saya</h3>
              </CardHeader>
              <CardBody>
                <div className="about__story-content">
                  <div className="about__story-text">
                    <p>
                      Perjalanan saya dimulai dari rasa penasaran terhadap bagaimana 
                      website dan aplikasi bekerja. Dari seorang pemula yang belajar 
                      HTML dan CSS, kini saya telah berkembang menjadi fullstack developer 
                      yang mampu menangani proyek dari konsep hingga deployment.
                    </p>
                    <p>
                      Saya percaya bahwa teknologi adalah alat untuk memecahkan masalah 
                      nyata. Setiap baris kode yang saya tulis memiliki tujuan untuk 
                      menciptakan pengalaman yang lebih baik bagi pengguna.
                    </p>
                    <p>
                      Di luar coding, saya senang berbagi pengetahuan melalui blog, 
                      mentoring junior developer, dan berkontribusi pada open source projects.
                    </p>
                  </div>
                  
                  <div className="about__story-highlights">
                    <div className="about__highlight">
                      <span className="about__highlight-icon">🎯</span>
                      <div>
                        <h4>Mission</h4>
                        <p>Menciptakan solusi teknologi yang user-centric dan scalable</p>
                      </div>
                    </div>
                    <div className="about__highlight">
                      <span className="about__highlight-icon">💡</span>
                      <div>
                        <h4>Vision</h4>
                        <p>Menjadi developer yang dapat memberikan dampak positif melalui teknologi</p>
                      </div>
                    </div>
                    <div className="about__highlight">
                      <span className="about__highlight-icon">⚡</span>
                      <div>
                        <h4>Values</h4>
                        <p>Continuous learning, collaboration, dan quality-driven development</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </motion.div>

          {/* Tabs Navigation */}
          <motion.div
            className="about__tabs"
            variants={fadeInUp as any}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <div className="about__tabs-nav">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`about__tab ${activeTab === tab.id ? 'about__tab--active' : ''}`}
                  onClick={() => setActiveTab(tab.id as any)}
                >
                  <span className="about__tab-icon">{tab.icon}</span>
                  <span className="about__tab-label">{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="about__tabs-content">
              {/* Skills Tab */}
              {activeTab === 'skills' && (
                <motion.div
                  className="about__skills"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  key="skills"
                >
                  <div className="about__skills-grid">
                    {skills && Object.entries(
                      skills.reduce((acc, skill) => {
                        if (!acc[skill.category]) acc[skill.category] = [];
                        acc[skill.category].push(skill);
                        return acc;
                      }, {} as Record<string, typeof skills>)
                    ).map(([category, categorySkills]) => (
                      <motion.div
                        key={category}
                        className="about__skill-category"
                        variants={itemVariants as any}
                      >
                        <h4 
                          className="about__skill-category-title"
                          style={{ color: getSkillColor(category) }}
                        >
                          {category}
                        </h4>
                        <div className="about__skill-list">
                          {categorySkills.map((skill) => (
                            <motion.div
                              key={skill.name}
                              className="about__skill-item"
                              variants={skillVariants as any}
                              whileHover={{ scale: 1.05 }}
                              onHoverStart={() => setSelectedSkill(skill.name)}
                              onHoverEnd={() => setSelectedSkill(null)}
                            >
                              <div className="about__skill-header">
                                <div className="about__skill-info">
                                  <span className="about__skill-icon">{skill.icon}</span>
                                  <span className="about__skill-name">{skill.name}</span>
                                </div>
                                <div className="about__skill-level">
                                  <span className="about__skill-percentage">{skill.level}%</span>
                                  <span className="about__skill-level-text">
                                    {getSkillLevelText(Number(skill.level))}
                                  </span>
                                </div>
                              </div>
                              
                              <div className="about__skill-progress">
                                <motion.div
                                  className="about__skill-progress-bar"
                                  variants={progressVariants as any}
                                  custom={skill.level}
                                  style={{ backgroundColor: getSkillColor(category) }}
                                />
                              </div>
                              
                              {selectedSkill === skill.name && (
                                <motion.div
                                  className="about__skill-description"
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                >
                                  <p>{skill.description}</p>
                                </motion.div>
                              )}
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Experience Tab */}
              {activeTab === 'experience' && (
                <motion.div
                  className="about__experience"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  key="experience"
                >
                  <div className="about__timeline">
                    {experiences.map((exp) => (
                      <motion.div
                        key={exp.id}
                        className="about__timeline-item"
                        variants={itemVariants as any}
                      >
                        <div className="about__timeline-marker">
                          <div className="about__timeline-dot"></div>
                          <div className="about__timeline-line"></div>
                        </div>
                        
                        <Card className="about__experience-card">
                          <CardHeader>
                            <div className="about__experience-header">
                              <div>
                                <h4 className="about__experience-title">{exp.position}</h4>
                                <p className="about__experience-company">{exp.company}</p>
                              </div>
                              <div className="about__experience-period">
                                <span className="about__experience-duration">{exp.duration}</span>
                                <span className="about__experience-type">{exp.type}</span>
                              </div>
                            </div>
                          </CardHeader>
                          
                          <CardBody>
                            <p className="about__experience-description">{exp.description}</p>
                            
                            {exp.achievements && exp.achievements.length > 0 && (
                              <div className="about__experience-achievements">
                                <h5>Key Achievements:</h5>
                                <ul>
                                  {exp.achievements.map((achievement: string, i: number) => (
                                    <li key={i}>{achievement}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            
                            <div className="about__experience-technologies">
                              <h5>Technologies Used:</h5>
                              <div className="about__tech-tags">
                                {exp.technologies.map((tech) => (
                                  <span key={tech} className="about__tech-tag">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </CardBody>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Education Tab */}
              {activeTab === 'education' && (
                <motion.div
                  className="about__education"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  key="education"
                >
                  <div className="about__education-grid">
                    {education.map((edu) => (
                      <motion.div
                        key={edu.id}
                        className="about__education-item"
                        variants={itemVariants as any}
                      >
                        <Card className="about__education-card">
                          <CardHeader>
                            <div className="about__education-header">
                              <div className="about__education-icon">
                                {edu.type === 'degree' ? '🎓' : '📜'}
                              </div>
                              <div>
                                <h4 className="about__education-title">{edu.degree}</h4>
                                <p className="about__education-institution">{edu.institution}</p>
                                <span className="about__education-year">{edu.year}</span>
                              </div>
                            </div>
                          </CardHeader>
                          
                          <CardBody>
                            <p className="about__education-description">{edu.description}</p>
                            
                            {edu.achievements && edu.achievements.length > 0 && (
                              <div className="about__education-achievements">
                                <h5>Achievements:</h5>
                                <ul>
                                  {edu.achievements.map((achievement: string, i: number) => (
                                    <li key={i}>{achievement}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            
                            {edu.relevantCourses && edu.relevantCourses.length > 0 && (
                              <div className="about__education-courses">
                                <h5>Relevant Courses:</h5>
                                <div className="about__course-tags">
                                  {edu.relevantCourses.map((course: string) => (
                                    <span key={course} className="about__course-tag">
                                      {course}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}
                          </CardBody>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Personal Info & Fun Facts */}
        <motion.div
          className="about__personal"
          variants={fadeInRight as any}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <div className="about__fun-facts-header">
            <h3>Fun Facts & Interests</h3>
          </div>
          <div className="about__fun-facts-grid">
            <motion.div
              className="about__fact-card"
              variants={itemVariants as any}
            >
              <div className="about__fact">
                <span className="about__fact-icon">☕</span>
                <div>
                  <h4>Coffee Enthusiast</h4>
                  <p>Mengonsumsi rata-rata 4 cangkir kopi per hari untuk fuel coding sessions</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="about__fact-card"
              variants={itemVariants as any}
            >
              <div className="about__fact">
                <span className="about__fact-icon">🌱</span>
                <div>
                  <h4>Continuous Learner</h4>
                  <p>Selalu mengikuti perkembangan teknologi terbaru dan mengambil online courses</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="about__fact-card"
              variants={itemVariants as any}
            >
              <div className="about__fact">
                <span className="about__fact-icon">🎮</span>
                <div>
                  <h4>Gaming & Problem Solving</h4>
                  <p>Bermain strategy games untuk melatih logical thinking dan problem solving</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="about__fact-card"
              variants={itemVariants as any}
            >
              <div className="about__fact">
                <span className="about__fact-icon">📚</span>
                <div>
                  <h4>Tech Blogger</h4>
                  <p>Menulis artikel teknis dan tutorial untuk berbagi knowledge dengan community</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="about__fact-card"
              variants={itemVariants as any}
            >
              <div className="about__fact">
                <span className="about__fact-icon">🏃‍♂️</span>
                <div>
                  <h4>Work-Life Balance</h4>
                  <p>Rutin olahraga dan hiking untuk menjaga kesehatan fisik dan mental</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;