import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { panoramaItems } from '../../data/panoramaItems';
import aiSustainabilityBg from '../../assets/ai_sustainability_bg.png';
import systemsEngineeringBg from '../../assets/systems_engineering_bg.png';
import dataScienceNlpBg from '../../assets/data_science_nlp_bg.png';
import './Hero.css';

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const bgImages: Record<string, string> = {
    'ai-sustainability': aiSustainabilityBg,
    'systems-engineering': systemsEngineeringBg,
    'data-science-nlp': dataScienceNlpBg,
  };
  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % panoramaItems.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + panoramaItems.length) % panoramaItems.length);
  };

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(nextSlide, 8000);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlaying, activeIndex]);

  const handleManualNav = (index: number) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
    // Restart autoplay after 15 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 15000);
  };

  const touchStartX = useRef<number>(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 40) {
      if (delta < 0) nextSlide();
      else prevSlide();
    }
  };

  const handleZoneClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    if (e.clientX >= rect.left + rect.width / 2) nextSlide();
    else prevSlide();
  };


  return (
    <section className="panorama-stage">
      {/* Background Panorama - Horizontal Panning */}
      <div className="panorama-viewer">
        <motion.div
          className="panorama-track"
          animate={{ x: `-${activeIndex * 100}%` }}
          transition={{ type: 'spring', stiffness: 30, damping: 10, mass: 1 }}
        >
          {panoramaItems.map((item, index) => (
            <div key={item.id} className="panorama-slide">
              <div
                className="panorama-bg"
                style={{
                  backgroundImage: `linear-gradient(rgba(26,26,46,0.6), rgba(26,26,46,0.8)), url(${bgImages[item.id] ?? ''})`,
                }}
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Content Overlay */}
      <div className="container stage-container">
        <div className="stage-content-wrapper">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              className="stage-card"
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -50, scale: 0.95 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="stage-tag" style={{ color: panoramaItems[activeIndex].color }}>
                {panoramaItems[activeIndex].tag}
              </div>
              <h1 className="stage-title">{panoramaItems[activeIndex].title}</h1>
              <div className="stage-subtitle">{panoramaItems[activeIndex].subtitle}</div>
              <p className="stage-description">{panoramaItems[activeIndex].description}</p>

              <div className="stage-actions">
                <Link to={panoramaItems[activeIndex].link} className="btn btn-primary" style={{ backgroundColor: panoramaItems[activeIndex].color, borderColor: panoramaItems[activeIndex].color }}>
                  Explore Area <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Stage Navigation - Circular Logic */}
        <div className="stage-controls">
          <div className="stage-nav-dots">
            {panoramaItems.map((_, index) => (
              <button
                key={index}
                className={`stage-dot ${activeIndex === index ? 'active' : ''}`}
                onClick={() => handleManualNav(index)}
              >
                <div className="dot-inner"></div>
                {activeIndex === index && (
                  <svg className="dot-progress-svg" viewBox="0 0 32 32">
                    <circle
                      cx="16" cy="16" r="14"
                      className="dot-progress-bg"
                    />
                    <motion.circle
                      cx="16" cy="16" r="14"
                      className="dot-progress-fill"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 8, ease: 'linear' }}
                      key={`progress-${activeIndex}`}
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* Click / touch navigation zones */}
      <div
        className="slide-nav-zone"
        onClick={handleZoneClick}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        aria-hidden="true"
      />

      {/* Aesthetic Overlays */}
      <div className="stage-vignette"></div>
      <div className="stage-grid-overlay"></div>
    </section>

  );
};

export default Hero;
