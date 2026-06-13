import { motion, useScroll, useSpring } from 'framer-motion';
import React from 'react';

const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      style={{
        scaleX,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: 'linear-gradient(to right, #8B5CF6, var(--accent-gold, #FFD700))',
        transformOrigin: '0%',
        zIndex: 1000,
      }}
    />
  );
};

export default ScrollProgress;
