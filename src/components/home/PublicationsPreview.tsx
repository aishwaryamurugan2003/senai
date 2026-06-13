import React from 'react';
import SectionHeading from '../shared/SectionHeading';
import PublicationCard from '../shared/PublicationCard';
import { publications } from '../../data/publications';
import SpotlightCard from '../shared/SpotlightCard';
import './HomeSections.css';

const PublicationsPreview = () => {
  return (
    <section className="section-padding bg-light-lavender" style={{ backgroundColor: 'rgba(184, 184, 209, 0.1)' }}>
      <div className="container">
        <SectionHeading 
          title="Recent Publications" 
          subtitle="Our latest contributions to the global scientific community across major conferences and journals."
          centered
        />
        <div className="publications-list">
          {publications.slice(0, 3).map((pub, index) => (
            <SpotlightCard key={pub.id} spotlightColor="rgba(91, 95, 151, 0.1)">
              <PublicationCard publication={pub} index={index} />
            </SpotlightCard>
          ))}
        </div>
        <div className="section-footer">
          <a href="/publications" className="btn btn-primary">Browse All Publications</a>
        </div>
      </div>
    </section>
  );
};

export default PublicationsPreview;
