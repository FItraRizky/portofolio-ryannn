import { useCallback, useEffect, useRef } from 'react';

// Debounce hook untuk mengoptimalkan event handling
export const useDebounce = <T extends (...args: any[]) => any>(
  callback: T,
  delay: number
): T => {
  const timeoutRef = useRef<NodeJS.Timeout>();

  const debouncedCallback = useCallback(
    (...args: Parameters<T>) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay]
  ) as T;

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return debouncedCallback;
};

// Throttle hook untuk membatasi frekuensi eksekusi
export const useThrottle = <T extends (...args: any[]) => any>(
  callback: T,
  delay: number
): T => {
  const lastRun = useRef(Date.now());

  const throttledCallback = useCallback(
    (...args: Parameters<T>) => {
      if (Date.now() - lastRun.current >= delay) {
        callback(...args);
        lastRun.current = Date.now();
      }
    },
    [callback, delay]
  ) as T;

  return throttledCallback;
};

// Hook untuk mengoptimalkan animasi dengan requestAnimationFrame
export const useAnimationFrame = (callback: () => void, deps: any[] = []) => {
  const requestRef = useRef<number>();

  const animate = useCallback(() => {
    callback();
    requestRef.current = requestAnimationFrame(animate);
  }, deps);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [animate]);
};

// Hook untuk lazy loading komponen
export const useLazyLoad = (threshold = 0.1, rootMargin = '50px') => {
  const elementRef = useRef<HTMLElement>(null);
  const isIntersecting = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        isIntersecting.current = entry.isIntersecting;
      },
      {
        threshold,
        rootMargin
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { elementRef, isIntersecting: isIntersecting.current };
};

// Hook untuk mengoptimalkan scroll performance
export const useOptimizedScroll = (callback: (scrollY: number) => void) => {
  const ticking = useRef(false);

  const updateScrollPosition = useCallback(() => {
    callback(window.scrollY);
    ticking.current = false;
  }, [callback]);

  const handleScroll = useCallback(() => {
    if (!ticking.current) {
      requestAnimationFrame(updateScrollPosition);
      ticking.current = true;
    }
  }, [updateScrollPosition]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);
};

// Hook untuk preloading resources
export const usePreloadImages = (imageUrls: string[]) => {
  useEffect(() => {
    const preloadImage = (url: string) => {
      const img = new Image();
      img.src = url;
    };

    imageUrls.forEach(preloadImage);
  }, [imageUrls]);
};

// Hook untuk mengoptimalkan resize events
export const useOptimizedResize = (callback: () => void) => {
  const timeoutRef = useRef<NodeJS.Timeout>();

  const handleResize = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(callback, 150);
  }, [callback]);

  useEffect(() => {
    window.addEventListener('resize', handleResize, { passive: true });
    return () => {
      window.removeEventListener('resize', handleResize);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [handleResize]);
};

export default {
  useDebounce,
  useThrottle,
  useAnimationFrame,
  useLazyLoad,
  useOptimizedScroll,
  usePreloadImages,
  useOptimizedResize
};