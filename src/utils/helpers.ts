// Format date
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// Calculate reading time
export const calculateReadingTime = (text: string): number => {
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
};

// Smooth scroll to element
export const scrollToElement = (elementId: string, offset = 80): void => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.offsetTop - offset;
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  }
};

// Copy to clipboard
export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error('Failed to copy text: ', err);
    return false;
  }
};

// Debounce function
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Throttle function
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Generate unique ID
export const generateId = (): string => {
  return Math.random().toString(36).substr(2, 9);
};

// Validate email
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Get skill level color
export const getSkillLevelColor = (level: string): string => {
  switch (level) {
    case 'beginner':
      return '#ef4444'; // red
    case 'intermediate':
      return '#f59e0b'; // amber
    case 'advanced':
      return '#10b981'; // emerald
    case 'expert':
      return '#8b5cf6'; // violet
    default:
      return '#6b7280'; // gray
  }
};

// Get project category color
export const getProjectCategoryColor = (category: string): string => {
  switch (category) {
    case 'frontend':
      return '#3b82f6'; // blue
    case 'backend':
      return '#10b981'; // emerald
    case 'fullstack':
      return '#8b5cf6'; // violet
    case 'mobile':
      return '#f59e0b'; // amber
    case 'devops':
      return '#ef4444'; // red
    case 'opensource':
      return '#06b6d4'; // cyan
    default:
      return '#6b7280'; // gray
  }
};