import React from 'react';
import { motion } from 'framer-motion';
import './SectionHeading.css';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  kicker?: string;
  centered?: boolean;
  dark?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, kicker, centered = false, dark = false }) => {
  const words = title.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Faster
        delayChildren: 0.1
      }
    }
  };

  const wordVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any }
    }
  };

  return (
    <div className={`section-heading ${centered ? 'centered' : ''} ${dark ? 'dark' : ''}`}>
      {kicker && (
        <motion.span
          className="heading-kicker"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {kicker}
        </motion.span>
      )}
      <motion.h2
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', justifyContent: centered ? 'center' : 'flex-start' }}
      >
        {words.map((word, i) => (
          <motion.span key={i} variants={wordVariants} style={{ display: 'inline-block' }}>
            {word}
          </motion.span>
        ))}
      </motion.h2>
      <motion.div
        className="heading-divider"
        initial={{ width: 0 }}
        whileInView={{ width: '64px' }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      />
      {subtitle && (
        <motion.p
          className="heading-subtitle"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;
