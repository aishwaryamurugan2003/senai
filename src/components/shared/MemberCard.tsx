import { motion } from 'framer-motion';
import { Mail, ArrowUpRight } from 'lucide-react';
import type { Member } from '../../data/members';
import './MemberCard.css';

interface MemberCardProps {
  member: Member;
  index: number;
}

const MemberCard = ({ member, index }: MemberCardProps) => {
  return (
    <motion.div 
      className="member-card"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="member-image-wrapper">
        {member.imageUrl ? (
          <img src={member.imageUrl} alt={member.name} className="member-image" />
        ) : (
          <div className="member-image-placeholder">{member.name.charAt(0)}</div>
        )}
      </div>
      <div className="member-details">
        <h3 className="member-name">{member.name}</h3>
        <p className="member-position">{member.position}</p>
        <p className="member-area">{member.researchArea}</p>
        
        <div className="member-contacts">
          <a href={`mailto:${member.email}`} className="member-email-link">
            <Mail size={16} /> {member.email}
          </a>
          {member.profileLink && (
            <a href={member.profileLink} className="member-profile-btn">
              Profile <ArrowUpRight size={14} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default MemberCard;
