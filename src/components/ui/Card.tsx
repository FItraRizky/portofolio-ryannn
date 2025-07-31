import React from 'react';
import { motion } from 'framer-motion';
import './Card.css';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
  shadow?: 'sm' | 'md' | 'lg' | 'xl';
  rounded?: 'sm' | 'md' | 'lg' | 'xl';
  onClick?: () => void;
  gradient?: boolean;
  variant?: string;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = true,
  padding = 'md',
  shadow = 'md',
  rounded = 'lg',
  onClick,
  gradient = false
}) => {
  const cardClasses = `
    card 
    card--padding-${padding} 
    card--shadow-${shadow} 
    card--rounded-${rounded}
    ${gradient ? 'card--gradient' : ''}
    ${onClick ? 'card--clickable' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  const cardVariants = {
    initial: { y: 0, boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' },
    hover: hover ? {
      y: -5,
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
      transition: { duration: 0.3 }
    } : {}
  };

  return (
    <motion.div
      className={cardClasses}
      onClick={onClick}
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
      whileTap={onClick ? { scale: 0.98 } : {}}
    >
      {children}
    </motion.div>
  );
};

// Card Header Component
interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ children, className = '' }) => (
  <div className={`card__header ${className}`}>
    {children}
  </div>
);

// Card Body Component
interface CardBodyProps {
  children: React.ReactNode;
  className?: string;
}

export const CardBody: React.FC<CardBodyProps> = ({ children, className = '' }) => (
  <div className={`card__body ${className}`}>
    {children}
  </div>
);

// Card Footer Component
interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

export const CardFooter: React.FC<CardFooterProps> = ({ children, className = '' }) => (
  <div className={`card__footer ${className}`}>
    {children}
  </div>
);

export { Card };
export default Card;