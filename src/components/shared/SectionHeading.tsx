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
  return (
    <div className={`section-heading ${centered ? 'centered' : ''} ${dark ? 'dark' : ''}`}>
      {kicker && (
        <motion.span
          className="heading-kicker"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {kicker}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: kicker ? 0.1 : 0 }}
      >
        {title}
      </motion.h2>
      <motion.div
        className="heading-divider"
        initial={{ width: 0 }}
        whileInView={{ width: '64px' }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
      {subtitle && (
        <motion.p
          className="heading-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;
