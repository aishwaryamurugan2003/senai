import React, { useEffect, useState, useCallback } from 'react';

interface TextScrambleProps {
  text: string;
  duration?: number;
  autostart?: boolean;
}

const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ1234567890@#';

const TextScramble: React.FC<TextScrambleProps> = ({ 
  text, 
  duration = 1.0, 
  autostart = true 
}) => {
  const [displayText, setDisplayText] = useState(text);
  
  useEffect(() => {
    if (!autostart) {
      setDisplayText(text);
      return;
    }

    let iteration = 0;
    const interval = setInterval(() => {
      const current = text
        .split('')
        .map((char, index) => {
          if (char === ' ') return ' ';
          if (index < iteration) {
            return text[index];
          }
          if (index < iteration + 3) {
            return chars[Math.floor(Math.random() * chars.length)];
          }
          return text[index];
        })
        .join('');
      
      setDisplayText(current);

      if (iteration >= text.length) {
        clearInterval(interval);
        setDisplayText(text); // Final safety update
      }

      iteration += text.length / 12; 
    }, 40);

    return () => clearInterval(interval);
  }, [text, autostart]);

  return (
    <span>
      {displayText}
    </span>
  );
};

export default TextScramble;
