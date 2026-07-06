import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { ResearchArea } from '../../data/research';
import './ResearchCard.css';

const cardColors = ['#5b5f97', '#8B5CF6', '#06b6d4', '#10b981', '#f59e0b', '#ef4444'];

interface ResearchCardProps {
  area: ResearchArea;
  index: number;
}

const ResearchCard: React.FC<ResearchCardProps> = ({ area, index }) => {
  const color = cardColors[index % cardColors.length];
  return (
    <motion.div
      className="research-card"
      data-idx={index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] as any }}
      whileHover={{ y: -8 }}
      style={{ '--card-accent': color } as React.CSSProperties}
    >
      <div className="card-image-placeholder">
        <span className="area-icon">{area.title.charAt(0)}</span>
      </div>
      <div className="card-content">
<h3 className="card-title" style={{ color: "#fff" }}>
  {area.title}
</h3>        <p className="card-description">{area.description}</p>
        <div className="card-footer">
          <span className="projects-count">{area.projects.length} Project{area.projects.length !== 1 ? 's' : ''}</span>
          <ArrowRight className="arrow-icon" size={18} />
        </div>
      </div>
    </motion.div>
  );
};

export default ResearchCard;
