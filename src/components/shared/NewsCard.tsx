import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import type { NewsItem } from '../../data/news';
import './NewsCard.css';

interface NewsCardProps {
  item: NewsItem;
  index: number;
}

const NewsCard = ({ item, index }: NewsCardProps) => {
  return (
    <motion.div 
      className="news-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="news-meta">
        <span className="news-date"><Calendar size={14} /> {new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
        <span className="news-category">{item.category}</span>
      </div>
      <h3 className="news-title">{item.title}</h3>
      <p className="news-summary">{item.summary}</p>
      <a href={item.link || '#'} className="news-read-more">
        Read More <ArrowRight size={16} />
      </a>
    </motion.div>
  );
};

export default NewsCard;
