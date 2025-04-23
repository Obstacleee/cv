import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isOverNav, setIsOverNav] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Check if cursor is over navigation
      const header = document.querySelector('header');
      if (header) {
        const headerRect = header.getBoundingClientRect();
        setIsOverNav(
          e.clientY <= headerRect.bottom && 
          e.clientY >= headerRect.top
        );
      }
      
      // Check if the cursor is over a clickable element
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') !== null ||
        target.closest('button') !== null
      );
      
      setIsVisible(true);
    };
    
    const handleMouseDown = () => setIsActive(true);
    const handleMouseUp = () => setIsActive(false);
    const handleMouseLeave = () => setIsVisible(false);
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Don't render on touch devices
  if (typeof navigator !== 'undefined' && navigator.maxTouchPoints > 0) {
    return null;
  }

  return (
    <>
      <motion.div
        className={`fixed pointer-events-none rounded-full border border-dark-400 dark:border-dark-500 mix-blend-difference ${
          isOverNav ? 'z-[90]' : 'z-[110]'
        }`}
        animate={{
          x: position.x - 24,
          y: position.y - 24,
          scale: isActive ? 0.8 : isPointer ? 1.5 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
        style={{
          width: '48px',
          height: '48px',
        }}
      />
      <motion.div
        className={`fixed pointer-events-none rounded-full bg-primary-500 dark:bg-primary-400 mix-blend-difference ${
          isOverNav ? 'z-[90]' : 'z-[110]'
        }`}
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          scale: isActive ? 1.2 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 1000,
          damping: 28,
          mass: 0.1,
        }}
        style={{
          width: '8px',
          height: '8px',
        }}
      />
    </>
  );
};

export default CustomCursor;