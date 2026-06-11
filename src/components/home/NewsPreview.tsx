import React from 'react';
import SectionHeading from '../shared/SectionHeading';
import NewsCard from '../shared/NewsCard';
import { news } from '../../data/news';
import './HomeSections.css';

const NewsPreview = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <SectionHeading 
          title="Latest News & Events" 
          subtitle="Stay updated with our laboratory's achievements, upcoming seminars, and major announcements."
        />
        <div className="news-grid">
          {news.slice(0, 4).map((item, index) => (
            <NewsCard key={item.id} item={item} index={index} />
          ))}
        </div>
        <div className="section-footer">
          <a href="/news" className="btn btn-outline">View All News</a>
        </div>
      </div>
    </section>
  );
};

export default NewsPreview;
