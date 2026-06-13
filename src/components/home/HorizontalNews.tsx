import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { news } from '../../data/news';
import NewsCard from '../shared/NewsCard';
import SectionHeading from '../shared/SectionHeading';
import './HomeSections.css';

import './HorizontalNews.css';

const HorizontalNews: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "-65%"]);

  return (
    <section ref={targetRef} className="horizontal-scroll-container">
      <div className="sticky-wrapper">
        <div className="section-overlay">
          <div className="container">
             <SectionHeading 
                title="Latest News & Events" 
                subtitle="Stay updated with our laboratory's achievements, upcoming seminars, and major announcements."
                dark
            />
          </div>
        </div>
        <motion.div style={{ x }} className="horizontal-track">
          {news.map((item, index) => (
            <div key={item.id} className="news-item-wrapper">
                <NewsCard item={item} index={index} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalNews;
