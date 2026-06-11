import React from 'react';
import SectionHeading from '../shared/SectionHeading';
import MemberCard from '../shared/MemberCard';
import { members } from '../../data/members';
import './HomeSections.css';

const MembersPreview = () => {
  return (
    <section className="section-padding bg-off-white">
      <div className="container">
        <SectionHeading 
          title="Our Researchers" 
          subtitle="Meet the brilliant minds driving innovation and discovery at SENAI Lab."
          centered
        />
        <div className="members-highlight-grid">
          {members.slice(0, 4).map((member, index) => (
            <MemberCard key={member.id} member={member} index={index} />
          ))}
        </div>
        <div className="section-footer">
          <a href="/members" className="btn btn-outline">Meet Full Laboratory Team</a>
        </div>
      </div>
    </section>
  );
};

export default MembersPreview;
