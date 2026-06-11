import { motion } from 'framer-motion';
import { FileText, ExternalLink } from 'lucide-react';
import type { Publication } from '../../data/publications';
import './PublicationCard.css';

interface PublicationCardProps {
  publication: Publication;
  index: number;
}

const PublicationCard = ({ publication, index }: PublicationCardProps) => {
  return (
    <motion.div 
      className="publication-card"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <div className="pub-year-badge">{publication.year}</div>
      <div className="pub-main-info">
        <h3 className="pub-title">{publication.title}</h3>
        <p className="pub-authors">{publication.authors.join(', ')}</p>
        <div className="pub-meta">
          <span className="pub-venue">{publication.venue}</span>
          <span className="pub-category-badge">{publication.category}</span>
        </div>
        <div className="pub-keywords">
          {publication.keywords.map(kw => (
            <span key={kw} className="keyword-tag">{kw}</span>
          ))}
        </div>
      </div>
      <div className="pub-actions">
        {publication.pdfUrl && (
          <a href={publication.pdfUrl} className="pub-action-btn pdf" title="Download PDF">
            <FileText size={18} /> <span>PDF</span>
          </a>
        )}
        {publication.doi && (
          <a href={`https://doi.org/${publication.doi}`} className="pub-action-btn doi" title="View DOI">
            <ExternalLink size={18} /> <span>DOI</span>
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default PublicationCard;
