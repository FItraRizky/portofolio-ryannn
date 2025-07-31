import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheck, FiStar } from 'react-icons/fi';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { services } from '../../utils/data';
import type { Service } from '../../types/data';
import { fadeInUp, staggerContainer, staggerItem } from '../../utils/animations';
import { Card, CardHeader, CardBody, CardFooter } from '../ui/Card';
import { Button } from '../ui/Button';
import { Modal, ModalHeader, ModalBody, ModalFooter } from '../ui/Modal';
import './ServicesSection.css';

const ServicesSection: React.FC = () => {
  const { ref, isInView } = useScrollAnimation();
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  const getServiceIcon = (iconName: string) => {
    // This would typically use a proper icon mapping
    return <span className="services__icon">{iconName}</span>;
  };

  const getPriceDisplay = (service: Service) => {
    if (!service.pricing) {
      return 'Contact for pricing';
    }
    if (service.pricing.type === 'fixed') {
      return `$${service.pricing.amount}`;
    } else if (service.pricing.type === 'hourly') {
      return `$${service.pricing.amount}/hr`;
    } else {
      return `$${service.pricing.min} - $${service.pricing.max}`;
    }
  };

  return (
    <section id="services" className="services" ref={ref}>
      <div className="services__container">
        <motion.div
          className="services__header"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.span className="services__subtitle" variants={fadeInUp}>
            What I Offer
          </motion.span>
          <motion.h2 className="services__title" variants={fadeInUp}>
            My Services
          </motion.h2>
          <motion.p className="services__description" variants={fadeInUp}>
            I provide comprehensive digital solutions to help bring your ideas to life.
            From concept to deployment, I ensure quality and excellence in every project.
          </motion.p>
        </motion.div>

        <motion.div
          className="services__grid"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="services__item"
              variants={staggerItem}
              onClick={() => handleServiceClick(service)}
            >
              <Card className="services__card" hover gradient>
                <CardHeader>
                  <div className="services__card-header">
                    <div className="services__card-icon">
                      {getServiceIcon(service.icon)}
                    </div>
                    <div className="services__card-badge">
                      <FiStar className="services__badge-icon" />
                      <span>{service.rating}</span>
                    </div>
                  </div>
                  <h3 className="services__card-title">{service.title}</h3>
                  <p className="services__card-description">{service.description}</p>
                </CardHeader>

                <CardBody>
                  <div className="services__card-features">
                    <h4>Key Features:</h4>
                    <ul>
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx}>
                          <FiCheck className="services__feature-icon" />
                          <span>{feature}</span>
                        </li>
                      ))}
                      {service.features.length > 3 && (
                        <li className="services__feature-more">
                          +{service.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="services__card-pricing">
                    <div className="services__price">
                      <span className="services__price-label">Starting at</span>
                      <span className="services__price-amount">
                        {getPriceDisplay(service)}
                      </span>
                    </div>
                    <div className="services__delivery">
                      <span className="services__delivery-label">Delivery:</span>
                      <span className="services__delivery-time">
                        {service.deliveryTime}
                      </span>
                    </div>
                  </div>
                </CardBody>

                <CardFooter>
                  <div className="services__card-footer">
                    <div className="services__card-stats">
                      <span className="services__stat">
                        <strong>{service.projectsCompleted}</strong> Projects
                      </span>
                      <span className="services__stat">
                        <strong>{service.clientSatisfaction}%</strong> Satisfaction
                      </span>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      icon={<FiArrowRight />}
                      iconPosition="right"
                      className="services__card-button"
                    >
                      Learn More
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="services__cta"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="services__cta-content">
            <h3>Need a Custom Solution?</h3>
            <p>
              Don't see exactly what you're looking for? Let's discuss your unique
              requirements and create a tailored solution that fits your needs perfectly.
            </p>
            <Button
              variant="primary"
              size="lg"
              icon={<FiArrowRight />}
              iconPosition="right"
            >
              Get Custom Quote
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Service Detail Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        size="lg"
        title={selectedService?.title}
      >
        {selectedService && (
          <>
            <ModalHeader>
              <div className="services__modal-header">
                <div className="services__modal-icon">
                  {getServiceIcon(selectedService.icon)}
                </div>
                <div className="services__modal-info">
                  <div className="services__modal-badges">
                    <span className="services__modal-rating">
                      <FiStar className="services__rating-icon" />
                      {selectedService.rating} Rating
                    </span>
                    <span className="services__modal-category">
                      {selectedService.category}
                    </span>
                  </div>
                  <div className="services__modal-stats">
                    <span>{selectedService.projectsCompleted} Projects Completed</span>
                    <span>{selectedService.clientSatisfaction}% Client Satisfaction</span>
                    <span>Delivery: {selectedService.deliveryTime}</span>
                  </div>
                </div>
              </div>
            </ModalHeader>

            <ModalBody>
              <div className="services__modal-content">
                <div className="services__modal-description">
                  <h4>Service Overview</h4>
                  <p>{selectedService.description}</p>
                  {selectedService.longDescription && (
                    <p>{selectedService.longDescription}</p>
                  )}
                </div>

                <div className="services__modal-features">
                  <h4>What's Included</h4>
                  <ul>
                    {selectedService.features.map((feature, index) => (
                      <li key={index}>
                        <FiCheck className="services__feature-check" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="services__modal-process">
                  <h4>My Process</h4>
                  <div className="services__process-steps">
                    {selectedService.process?.map((step, index) => (
                      <div key={index} className="services__process-step">
                        <div className="services__step-number">{index + 1}</div>
                        <div className="services__step-content">
                          <h5>{step.title}</h5>
                          <p>{step.description}</p>
                          <span className="services__step-duration">
                            {step.duration}
                          </span>
                        </div>
                      </div>
                    )) || (
                      <p>Process details will be discussed during consultation.</p>
                    )}
                  </div>
                </div>

                <div className="services__modal-pricing">
                  <h4>Pricing Information</h4>
                  <div className="services__pricing-details">
                    <div className="services__pricing-main">
                      <span className="services__pricing-label">
                        {selectedService.pricing.type === 'fixed' ? 'Fixed Price' :
                         selectedService.pricing.type === 'hourly' ? 'Hourly Rate' :
                         'Price Range'}
                      </span>
                      <span className="services__pricing-amount">
                        {getPriceDisplay(selectedService)}
                      </span>
                    </div>
                    <div className="services__pricing-notes">
                      <p>
                        <strong>Delivery Time:</strong> {selectedService.deliveryTime}
                      </p>
                      {selectedService.pricing.notes && (
                        <p>
                          <strong>Note:</strong> {selectedService.pricing.notes}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {selectedService.technologies && (
                  <div className="services__modal-technologies">
                    <h4>Technologies Used</h4>
                    <div className="services__tech-grid">
                      {selectedService.technologies.map((tech, index) => (
                        <span key={index} className="services__tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </ModalBody>

            <ModalFooter>
              <div className="services__modal-actions">
                <Button
                  variant="outline"
                  onClick={closeModal}
                >
                  Close
                </Button>
                <Button
                  variant="primary"
                  icon={<FiArrowRight />}
                  iconPosition="right"
                >
                  Get Started
                </Button>
              </div>
            </ModalFooter>
          </>
        )}
      </Modal>
    </section>
  );
};

export default ServicesSection;