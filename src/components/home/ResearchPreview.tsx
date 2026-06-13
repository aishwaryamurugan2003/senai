import React from 'react';
import SectionHeading from '../shared/SectionHeading';
import ResearchCard from '../shared/ResearchCard';
import { researchAreas } from '../../data/research';
import WordReveal from '../shared/WordReveal';
import TiltCard from '../shared/TiltCard';
import AnimateIn from '../shared/AnimateIn';
import './HomeSections.css';
import './ResearchPreview.css';

const ResearchPreview = () => {
  return (
    <section className="research-preview-section">
      <div className="research-preview-grid" />
      <div className="container">
        <SectionHeading
          kicker="What We Do"
          title="Research & Impact"
          subtitle=""
          dark
        />
        <WordReveal 
          text="We address complex global challenges through fundamental scientific exploration and transformative technology." 
          className="text-xl mb-12 max-w-3xl text-gray-400"
        />
        <AnimateIn stagger direction="up">
          <div className="research-grid">
            {researchAreas.slice(0, 6).map((area, index) => (
              <TiltCard key={area.id}>
                <ResearchCard area={area} index={index} />
              </TiltCard>
            ))}
          </div>
        </AnimateIn>
        <div className="section-footer">
          <a href="/research" className="btn btn-accent">View All Research Areas</a>
        </div>
      </div>
    </section>
  );
};

export default ResearchPreview;
