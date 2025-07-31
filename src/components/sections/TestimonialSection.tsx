import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { testimonials } from '../../utils/data';
import { Card, CardBody } from '../ui/Card';
import { Button } from '../ui/Button';
import './TestimonialSection.css';

const TestimonialSection: React.FC = () => {
  const { ref, isInView } = useScrollAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FiStar
        key={i}
        className={`testimonial__star ${i < rating ? 'testimonial__star--filled' : ''}`}
      />
    ));
  };

  return (
    <section id="testimonials" className="testimonial" ref={ref}>
      <div className="testimonial__container">
        {/* Section Header */}
        <motion.div
          className="testimonial__header"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 className="testimonial__title" variants={staggerItem}>
            Testimoni Klien
          </motion.h2>
          <motion.p className="testimonial__subtitle" variants={staggerItem}>
            Apa kata klien tentang layanan saya
          </motion.p>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          className="testimonial__carousel"
          variants={fadeInUp as any}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="testimonial__carousel-container">
            <motion.div
              className="testimonial__slides"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonial__slide">
                  <Card className="testimonial__card" variant="testimonial">
                    <CardBody>
                      <div className="testimonial__content">
                        <div className="testimonial__rating">
                          {renderStars(testimonial.rating || 5)}
                        </div>
                        <blockquote className="testimonial__quote">
                          "{testimonial.content}"
                        </blockquote>
                        <div className="testimonial__author">
                          <div className="testimonial__author-info">
                            <h4 className="testimonial__author-name">{testimonial.name}</h4>
                            <p className="testimonial__author-position">
                              {testimonial.position} at {testimonial.company}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Controls */}
          <div className="testimonial__controls">
            <Button
              variant="outline"
              size="sm"
              icon={<FiChevronLeft />}
              onClick={prevTestimonial}
              className="testimonial__nav-btn testimonial__nav-btn--prev"
              aria-label="Previous testimonial"
            >
              Prev
            </Button>
            <Button
              variant="outline"
              size="sm"
              icon={<FiChevronRight />}
              onClick={nextTestimonial}
              className="testimonial__nav-btn testimonial__nav-btn--next"
              aria-label="Next testimonial"
            >
              Next
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="testimonial__dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`testimonial__dot ${
                  index === currentIndex ? 'testimonial__dot--active' : ''
                }`}
                onClick={() => goToTestimonial(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;