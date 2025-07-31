import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { projects } from '../../utils/data';
import type { Project } from '../../types/data';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import { Card, CardBody } from '../ui/Card';
import { Button } from '../ui/Button';
import { Modal } from '../ui/Modal';
import ScrollVelocity from '../../textanimations/ScrollVelocity/ScrollVelocity';
import './ProjectsSection.css';

const ProjectsSection: React.FC = () => {
  const { ref, isInView } = useScrollAnimation();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = useMemo(() => {
    const cats = ['All', ...new Set(projects.map(project => project.category))];
    return cats;
  }, []);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return projects;
    return projects.filter(project => project.category === selectedCategory);
  }, [selectedCategory]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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

  const filterVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: 'easeOut'
      }
    }
  };

  const projectCardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.3
      }
    }
  };

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  const getCategoryIcon = (category: string): string => {
    const icons: { [key: string]: string } = {
      'Web Application': '🌐',
      'Mobile App': '📱',
      'E-commerce': '🛒',
      'Dashboard': '📊',
      'API': '🔌',
      'Tool': '🛠️',
      'Game': '🎮',
      'Other': '💡'
    };
    return icons[category] || '💻';
  };

  const getStatusColor = (status: string): string => {
    const colors: { [key: string]: string } = {
      'Completed': '#10b981',
      'In Progress': '#f59e0b',
      'Planning': '#6b7280',
      'Maintenance': '#3b82f6'
    };
    return colors[status] || '#6b7280';
  };

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="projects__container">
        {/* Section Header */}
        <motion.div
          className="projects__header"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.span className="projects__subtitle" variants={itemVariants as any}>
            Portfolio
          </motion.span>
          <motion.h2 className="projects__title" variants={itemVariants as any}>
            <ScrollVelocity
              texts={['Proyek & Karya Terbaik', 'Projects & Best Works', 'Portfolio Showcase']}
              velocity={100}
              className="projects__title-scroll"
              damping={50}
              stiffness={400}
              numCopies={3}
            />
          </motion.h2>
          <motion.p className="projects__description" variants={itemVariants as any}>
            Koleksi proyek-proyek yang telah saya kerjakan, mulai dari aplikasi web 
            hingga mobile app. Setiap proyek mencerminkan dedikasi saya dalam 
            menciptakan solusi teknologi yang inovatif dan berkualitas.
          </motion.p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          className="projects__filters"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              className={`projects__filter ${
                selectedCategory === category ? 'projects__filter--active' : ''
              }`}
              variants={filterVariants as any}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
            >
              <span className="projects__filter-icon">
                {category === 'All' ? '🎯' : getCategoryIcon(category)}
              </span>
              <span className="projects__filter-text">{category}</span>
              <span className="projects__filter-count">
                {category === 'All' 
                  ? projects.length 
                  : projects.filter(p => p.category === category).length
                }
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="projects__grid"
          layout
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={`${selectedCategory}-${project.id}`}
                className="projects__item"
                variants={projectCardVariants as any}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
                layoutId={project.id}
                whileHover={{ y: -10 }}
                onClick={() => handleProjectClick(project)}
              >
                <Card className="projects__card" variant="project">
                  <div className="projects__card-image">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="projects__image"
                    />
                    <div className="projects__card-overlay">
                      <div className="projects__card-actions">
                        <Button
                          variant="primary"
                          size="sm"
                          onClick={(e) => {
                            e?.stopPropagation();
                            window.open(project.liveUrl, '_blank');
                          }}
                        >
                          <span>🔗</span>
                          Live Demo
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={(e) => {
                            e?.stopPropagation();
                            window.open(project.githubUrl, '_blank');
                          }}
                        >
                          <span>📂</span>
                          Code
                        </Button>
                      </div>
                    </div>
                    
                    {/* Status Badge */}
                    <div 
                      className="projects__status-badge"
                      style={{ backgroundColor: getStatusColor(project.status || '') }}
                    >
                      {project.status}
                    </div>
                    
                    {/* Category Badge */}
                    <div className="projects__category-badge">
                      <span className="projects__category-icon">
                        {getCategoryIcon(project.category)}
                      </span>
                      {project.category}
                    </div>
                  </div>

                  <CardBody>
                    <div className="projects__card-content">
                      <h3 className="projects__card-title">{project.title}</h3>
                      <p className="projects__card-description">
                        {project.description}
                      </p>
                      
                      <div className="projects__card-tech">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span key={tech} className="projects__tech-tag">
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="projects__tech-more">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>
                      
                      <div className="projects__card-meta">
                        <div className="projects__card-date">
                          <span className="projects__meta-icon">📅</span>
                          {project.year}
                        </div>
                        <div className="projects__card-duration">
                          <span className="projects__meta-icon">⏱️</span>
                          {project.duration}
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="projects__empty"
            variants={fadeInUp as any}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <div className="projects__empty-icon">🔍</div>
            <h3>Tidak ada proyek ditemukan</h3>
            <p>Coba pilih kategori lain atau kembali ke semua proyek.</p>
            <Button
              variant="primary"
              onClick={() => setSelectedCategory('All')}
            >
              Lihat Semua Proyek
            </Button>
          </motion.div>
        )}
      </div>

      {/* Project Detail Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        size="lg"
        title={selectedProject?.title}
      >
        {selectedProject && (
          <div className="projects__modal-content">
            <div className="projects__modal-image">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="projects__modal-img"
              />
            </div>
            
            <div className="projects__modal-info">
              <div className="projects__modal-header">
                <div className="projects__modal-badges">
                  <span 
                    className="projects__modal-status"
                    style={{ backgroundColor: getStatusColor(selectedProject.status || '') }}
                  >
                    {selectedProject.status}
                  </span>
                  <span className="projects__modal-category">
                    {getCategoryIcon(selectedProject.category)} {selectedProject.category}
                  </span>
                </div>
                
                <div className="projects__modal-meta">
                  <span>📅 {selectedProject.year}</span>
                  <span>⏱️ {selectedProject.duration}</span>
                  <span>👥 {selectedProject.teamSize || 'Solo'}</span>
                </div>
              </div>
              
              <div className="projects__modal-description">
                <h4>Deskripsi Proyek</h4>
                <p>{selectedProject.longDescription || selectedProject.description}</p>
              </div>
              
              {selectedProject.features && selectedProject.features.length > 0 && (
                <div className="projects__modal-features">
                  <h4>Fitur Utama</h4>
                  <ul>
                    {selectedProject.features?.map((feature: string, index: number) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {selectedProject.challenges && selectedProject.challenges.length > 0 && (
                <div className="projects__modal-challenges">
                  <h4>Tantangan & Solusi</h4>
                  <ul>
                    {selectedProject.challenges?.map((challenge: string, index: number) => (
                      <li key={index}>{challenge}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="projects__modal-technologies">
                <h4>Teknologi yang Digunakan</h4>
                <div className="projects__modal-tech-grid">
                  {selectedProject.technologies.map((tech) => (
                    <span key={tech} className="projects__modal-tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="projects__modal-actions">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => window.open(selectedProject.liveUrl, '_blank')}
                >
                  <span>🔗</span>
                  Live Demo
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => window.open(selectedProject.githubUrl, '_blank')}
                >
                  <span>📂</span>
                  View Code
                </Button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default ProjectsSection;