import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface WordRevealProps {
  text: string;
  className?: string;
}

const WordReveal: React.FC<WordRevealProps> = ({ text, className = "" }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const words = text.split(' ');

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "end 0.5"]
  });

  return (
    <p ref={containerRef} className={`flex flex-wrap ${className}`}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
};

interface WordProps {
  children: string;
  progress: any;
  range: [number, number];
}

const Word: React.FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <span className="relative mr-2 lg:mr-3 mt-2">
      <motion.span style={{ opacity }}>
        {children}
      </motion.span>
    </span>
  );
};

export default WordReveal;
