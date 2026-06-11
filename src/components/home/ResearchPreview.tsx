import React from 'react';
import SectionHeading from '../shared/SectionHeading';
import ResearchCard from '../shared/ResearchCard';
import { researchAreas } from '../../data/research';
import './HomeSections.css';

const ResearchPreview = () => {
  return (
    <section className="section-padding bg-off-white">
      <div className="container">
        <SectionHeading 
          title="Research & Impact" 
          subtitle="We address complex global challenges through fundamental scientific exploration and transformative technology."
        />
        <div className="research-grid">
          {researchAreas.slice(0, 6).map((area, index) => (
            <ResearchCard key={area.id} area={area} index={index} />
          ))}
        </div>
        <div className="section-footer">
          <a href="/research" className="btn btn-outline">View All Research Areas</a>
        </div>
      </div>
    </section>
  );
};

export default ResearchPreview;
