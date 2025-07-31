import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiSend, 
  FiUser, 
  FiMessageSquare,
  FiClock,
  FiGlobe,
  FiCheck,
  FiAlertCircle
} from 'react-icons/fi';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { personalInfo, socialLinks } from '../../utils/data';
import type { ContactForm } from '../../types/contact';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from '../../utils/animations';
import { Button } from '../ui/Button';
import { Card, CardHeader, CardBody } from '../ui/Card';
import { isValidEmail } from '../../utils/helpers';
import './ContactSection.css';

const ContactSection: React.FC = () => {
  const { ref, isInView } = useScrollAnimation();
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: '',
    budget: '',
    timeline: '',
    projectType: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<ContactForm>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof ContactForm]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactForm> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', formData);
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        budget: '',
        timeline: '',
        projectType: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FiMail />,
      title: 'Email',
      value: personalInfo.email,
      link: `mailto:${personalInfo.email}`,
      description: 'Send me an email anytime'
    },
    {
      icon: <FiPhone />,
      title: 'Phone',
      value: personalInfo.phone,
      link: `tel:${personalInfo.phone}`,
      description: 'Call me for urgent matters'
    },
    {
      icon: <FiMapPin />,
      title: 'Location',
      value: personalInfo.location,
      link: '#',
      description: 'Based in this timezone'
    },
    {
      icon: <FiGlobe />,
      title: 'Website',
      value: personalInfo.website,
      link: personalInfo.website,
      description: 'Visit my portfolio'
    }
  ];

  const projectTypes = [
    'Web Development',
    'Mobile App',
    'E-commerce',
    'UI/UX Design',
    'Consulting',
    'Other'
  ];

  const budgetRanges = [
    'Under $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000+',
    'Let\'s discuss'
  ];

  const timelineOptions = [
    'ASAP',
    '1-2 weeks',
    '1 month',
    '2-3 months',
    '3+ months',
    'Flexible'
  ];

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="contact__container">
        <motion.div
          className="contact__header"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.span className="contact__subtitle" variants={fadeInUp as any}>
            Get In Touch
          </motion.span>
          <motion.h2 className="contact__title" variants={fadeInUp as any}>
            Let's Work Together
          </motion.h2>
          <motion.p className="contact__description" variants={fadeInUp as any}>
            Have a project in mind? I'd love to hear about it. Let's discuss how we can
            bring your ideas to life and create something amazing together.
          </motion.p>
        </motion.div>

        <div className="contact__content">
          <motion.div
            className="contact__info"
            variants={fadeInLeft as any}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <Card className="contact__info-card">
              <CardHeader>
                <h3>Contact Information</h3>
                <p>Feel free to reach out through any of these channels</p>
              </CardHeader>
              <CardBody>
                <div className="contact__info-list">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.link}
                      className="contact__info-item"
                      variants={staggerItem as any}
                      whileHover={{ x: 5 }}
                      target={info.title === 'Website' ? '_blank' : undefined}
                      rel={info.title === 'Website' ? 'noopener noreferrer' : undefined}
                    >
                      <div className="contact__info-icon">
                        {info.icon}
                      </div>
                      <div className="contact__info-content">
                        <h4>{info.title}</h4>
                        <p className="contact__info-value">{info.value}</p>
                        <span className="contact__info-description">
                          {info.description}
                        </span>
                      </div>
                    </motion.a>
                  ))}
                </div>

                <div className="contact__social">
                  <h4>Follow Me</h4>
                  <div className="contact__social-links">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.url}
                        className="contact__social-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="contact__social-icon">{social.icon}</span>
                        <span className="contact__social-name">{social.platform}</span>
                      </motion.a>
                    ))}
                  </div>
                </div>

                <div className="contact__availability">
                  <div className="contact__availability-header">
                    <FiClock className="contact__availability-icon" />
                    <h4>Availability</h4>
                  </div>
                  <p>Currently available for new projects</p>
                  <div className="contact__status">
                    <div className="contact__status-indicator"></div>
                    <span>Usually responds within 24 hours</span>
                  </div>
                </div>
              </CardBody>
            </Card>
          </motion.div>

          <motion.div
            className="contact__form-wrapper"
            variants={fadeInRight as any}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <Card className="contact__form-card">
              <CardHeader>
                <h3>Send Me a Message</h3>
                <p>Tell me about your project and let's get started</p>
              </CardHeader>
              <CardBody>
                {submitStatus === 'success' && (
                  <motion.div
                    className="contact__success"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <FiCheck className="contact__success-icon" />
                    <div>
                      <h4>Message Sent Successfully!</h4>
                      <p>Thank you for reaching out. I'll get back to you soon.</p>
                    </div>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    className="contact__error"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <FiAlertCircle className="contact__error-icon" />
                    <div>
                      <h4>Something went wrong</h4>
                      <p>Please try again or contact me directly via email.</p>
                    </div>
                  </motion.div>
                )}

                <form className="contact__form" onSubmit={handleSubmit}>
                  <div className="contact__form-row">
                    <div className="contact__form-group">
                      <label htmlFor="name" className="contact__form-label">
                        <FiUser className="contact__form-label-icon" />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`contact__form-input ${errors.name ? 'contact__form-input--error' : ''}`}
                        placeholder="Your full name"
                        disabled={isSubmitting}
                      />
                      {errors.name && (
                        <span className="contact__form-error">{errors.name}</span>
                      )}
                    </div>

                    <div className="contact__form-group">
                      <label htmlFor="email" className="contact__form-label">
                        <FiMail className="contact__form-label-icon" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`contact__form-input ${errors.email ? 'contact__form-input--error' : ''}`}
                        placeholder="your.email@example.com"
                        disabled={isSubmitting}
                      />
                      {errors.email && (
                        <span className="contact__form-error">{errors.email}</span>
                      )}
                    </div>
                  </div>

                  <div className="contact__form-row">
                    <div className="contact__form-group">
                      <label htmlFor="projectType" className="contact__form-label">
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="contact__form-select"
                        disabled={isSubmitting}
                      >
                        <option value="">Select project type</option>
                        {projectTypes.map((type, index) => (
                          <option key={index} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>

                    <div className="contact__form-group">
                      <label htmlFor="budget" className="contact__form-label">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="contact__form-select"
                        disabled={isSubmitting}
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range, index) => (
                          <option key={index} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="contact__form-row">
                    <div className="contact__form-group">
                      <label htmlFor="timeline" className="contact__form-label">
                        Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="contact__form-select"
                        disabled={isSubmitting}
                      >
                        <option value="">Select timeline</option>
                        {timelineOptions.map((option, index) => (
                          <option key={index} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>

                    <div className="contact__form-group">
                      <label htmlFor="subject" className="contact__form-label">
                        <FiMessageSquare className="contact__form-label-icon" />
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className={`contact__form-input ${errors.subject ? 'contact__form-input--error' : ''}`}
                        placeholder="Brief description of your project"
                        disabled={isSubmitting}
                      />
                      {errors.subject && (
                        <span className="contact__form-error">{errors.subject}</span>
                      )}
                    </div>
                  </div>

                  <div className="contact__form-group">
                    <label htmlFor="message" className="contact__form-label">
                      <FiMessageSquare className="contact__form-label-icon" />
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`contact__form-textarea ${errors.message ? 'contact__form-input--error' : ''}`}
                      placeholder="Tell me more about your project, goals, and requirements..."
                      rows={6}
                      disabled={isSubmitting}
                    />
                    {errors.message && (
                      <span className="contact__form-error">{errors.message}</span>
                    )}
                    <div className="contact__form-counter">
                      {formData.message.length} characters
                    </div>
                  </div>

                  <div className="contact__form-actions">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      icon={<FiSend />}
                      iconPosition="right"
                      disabled={isSubmitting}
                      className="contact__form-submit"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                    <p className="contact__form-note">
                      * Required fields. I'll respond within 24 hours.
                    </p>
                  </div>
                </form>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;