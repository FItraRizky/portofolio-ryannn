import React, { useEffect, useRef, useState } from 'react';

interface SmoothTransitionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  easing?: string;
  trigger?: boolean;
}

const SmoothTransition: React.FC<SmoothTransitionProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 600,
  easing = 'cubic-bezier(0.4, 0, 0.2, 1)',
  trigger = true
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && trigger) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observerRef.current?.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    observerRef.current.observe(elementRef.current);

    return () => {
      observerRef.current?.disconnect();
    };
  }, [delay, trigger]);

  const transitionStyle: React.CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    transition: `all ${duration}ms ${easing}`,
    willChange: 'transform, opacity'
  };

  return (
    <div
      ref={elementRef}
      className={className}
      style={transitionStyle}
    >
      {children}
    </div>
  );
};

export default SmoothTransition;

// Hook untuk smooth scroll
export const useSmoothScroll = () => {
  const scrollTo = (elementId: string, offset = 0) => {
    const element = document.getElementById(elementId);
    if (element) {
      const targetPosition = element.offsetTop - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return { scrollTo };
};

// Komponen untuk fade in animation
export const FadeIn: React.FC<{
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}> = ({ children, delay = 0, direction = 'up', className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const getTransform = () => {
    if (isVisible) return 'translate3d(0, 0, 0)';
    
    switch (direction) {
      case 'up': return 'translate3d(0, 30px, 0)';
      case 'down': return 'translate3d(0, -30px, 0)';
      case 'left': return 'translate3d(30px, 0, 0)';
      case 'right': return 'translate3d(-30px, 0, 0)';
      default: return 'translate3d(0, 30px, 0)';
    }
  };

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        willChange: 'transform, opacity'
      }}
    >
      {children}
    </div>
  );
};

// Komponen untuk staggered animations
export const StaggeredFadeIn: React.FC<{
  children: React.ReactNode[];
  staggerDelay?: number;
  className?: string;
}> = ({ children, staggerDelay = 100, className = '' }) => {
  return (
    <div className={className}>
      {children.map((child, index) => (
        <FadeIn key={index} delay={index * staggerDelay}>
          {child}
        </FadeIn>
      ))}
    </div>
  );
};