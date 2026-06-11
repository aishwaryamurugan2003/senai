import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { ResearchArea } from '../../data/research';
import './ResearchCard.css';

interface ResearchCardProps {
  area: ResearchArea;
  index: number;
}

const ResearchCard: React.FC<ResearchCardProps> = ({ area, index }) => {
  return (
    <motion.div 
      className="research-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
    >
      <div className="card-image-placeholder">
        <span className="area-icon">{area.title.charAt(0)}</span>
      </div>
      <div className="card-content">
        <h3 className="card-title">{area.title}</h3>
        <p className="card-description">{area.description}</p>
        <div className="card-footer">
          <span className="projects-count">{area.projects.length} Ongoing Projects</span>
          <ArrowRight className="arrow-icon" size={20} />
        </div>
      </div>
    </motion.div>
  );
};

export default ResearchCard;
