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

const AnimatedCount: React.FC<{ target: number; duration?: number }> = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const interval = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(interval);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count}</span>;
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
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
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
