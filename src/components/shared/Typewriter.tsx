import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface TypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
}

const Typewriter: React.FC<TypewriterProps> = ({ 
  text, 
  speed = 50, 
  delay = 0,
  className = "" 
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    setDisplayedText('');
    setIsFinished(false);
    
    const startTyping = () => {
      let i = 0;
      const timer = setInterval(() => {
        setDisplayedText(text.substring(0, i + 1));
        i++;
        if (i >= text.length) {
          clearInterval(timer);
          setIsFinished(true);
        }
      }, speed);
      return timer;
    };

    timeout = setTimeout(() => {
      const timer = startTyping();
      return () => clearInterval(timer);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, speed, delay]);

  return (
    <span className={className}>
      {displayedText}
      {!isFinished && (
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
          style={{ display: 'inline-block', width: '2px', height: '1.2em', backgroundColor: 'var(--accent-gold, #FFD700)', marginLeft: '2px', verticalAlign: 'middle' }}
        />
      )}
    </span>
  );
};

export default Typewriter;
