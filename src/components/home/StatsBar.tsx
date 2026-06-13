import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, FlaskConical, CalendarDays } from 'lucide-react';
import './StatsBar.css';

interface Stat {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { icon: <BookOpen size={28} />, value: 120, suffix: '+', label: 'Publications' },
  { icon: <Users size={28} />, value: 40, suffix: '+', label: 'Researchers' },
  { icon: <FlaskConical size={28} />, value: 8, suffix: '', label: 'Research Areas' },
  { icon: <CalendarDays size={28} />, value: 15, suffix: '+', label: 'Years Active' },
];

import { useMotionValue, useSpring, useTransform, animate, useInView } from 'framer-motion';

const AnimatedCount: React.FC<{ target: number }> = ({ target }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      animate(count, target, { duration: 2, ease: "easeOut" });
    }
  }, [inView, target, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

const StatsBar: React.FC = () => {
  return (
    <section className="stats-bar">
      {/* Beam overlay */}
      <div className="stats-beam" />
      <div className="stats-grid-overlay" />

      <div className="container">
        <div className="stats-row">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="stat-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as any }}
            >
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">
                <AnimatedCount target={stat.value} />
                <span className="stat-suffix">{stat.suffix}</span>
              </div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
