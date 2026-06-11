import { motion } from 'framer-motion';
import { Mail, ArrowUpRight, Cpu } from 'lucide-react';
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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
    >
      <div className="member-image-wrapper">
        {member.imageUrl ? (
          <img src={member.imageUrl} alt={member.name} className="member-image" />
        ) : (
          <div className="member-image-placeholder">{member.name.charAt(0)}</div>
        )}
        <div className="member-glow-ring" />
      </div>
      <div className="member-details">
        <h3 className="member-name">{member.name}</h3>
        <p className="member-position">{member.position}</p>
        <span className="member-area-chip">
          <Cpu size={12} /> {member.researchArea}
        </span>

        <div className="member-contacts">
          <a href={`mailto:${member.email}`} className="member-email-link">
            <Mail size={14} /> <span>{member.email}</span>
          </a>
          {member.profileLink && (
            <a href={member.profileLink} className="member-profile-btn">
              Profile <ArrowUpRight size={13} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default MemberCard;
