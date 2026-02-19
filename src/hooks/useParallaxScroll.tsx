import { useEffect, useState, useRef } from 'react';

interface ParallaxScrollOptions {
  enableMouseDrag?: boolean;
  friction?: number;
  momentum?: number;
}

export const useParallaxScroll = ({
  enableMouseDrag = true,
  friction = 0.94,
  momentum = 1.35
}: ParallaxScrollOptions = {}) => {
  const [scrollY, setScrollY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartY = useRef(0);
  const lastMouseY = useRef(0);
  const velocity = useRef(0);
  const animationFrame = useRef<number>();

  // Enhanced smooth scrolling animation with improved momentum
  const animateScroll = () => {
    if (Math.abs(velocity.current) > 0.1) {
      const currentScroll = window.scrollY;
      const newScroll = Math.max(0, Math.min(
        document.documentElement.scrollHeight - window.innerHeight,
        currentScroll + velocity.current
      ));
      
      window.scrollTo(0, newScroll);
      velocity.current *= friction;
      animationFrame.current = requestAnimationFrame(animateScroll);
    }
  };

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (!isDragging) {
        setScrollY(window.scrollY);
      }
    };

    const throttledScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [isDragging]);

  // Enhanced mouse drag functionality with improved sensitivity
  useEffect(() => {
    if (!enableMouseDrag) return;

    const handleMouseDown = (e: MouseEvent) => {
      if (e.button !== 0) return;
      
      setIsDragging(true);
      dragStartY.current = e.clientY;
      lastMouseY.current = e.clientY;
      velocity.current = 0;
      
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
      
      document.body.style.cursor = 'grabbing';
      document.body.style.userSelect = 'none';
      e.preventDefault();
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;

      const deltaY = lastMouseY.current - e.clientY;
      const currentScroll = window.scrollY;
      const newScroll = Math.max(0, Math.min(
        document.documentElement.scrollHeight - window.innerHeight,
        currentScroll + deltaY * 2.5 // Enhanced sensitivity
      ));

      window.scrollTo(0, newScroll);
      setScrollY(newScroll);
      
      // Enhanced velocity calculation for better momentum
      velocity.current = deltaY * momentum;
      lastMouseY.current = e.clientY;
      
      e.preventDefault();
    };

    const handleMouseUp = () => {
      if (!isDragging) return;
      
      setIsDragging(false);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
      
      // Start enhanced momentum animation
      if (Math.abs(velocity.current) > 1) {
        animateScroll();
      }
    };

    // Add event listeners
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseUp);

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseUp);
      
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [enableMouseDrag, isDragging, friction, momentum]);

  return { 
    scrollY, 
    isDragging,
    getParallaxStyle: (speed: number) => ({
      transform: `translateY(${scrollY * speed}px)`
    })
  };
};
