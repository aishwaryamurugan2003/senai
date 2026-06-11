
import SectionHeading from '../components/shared/SectionHeading';
import ResearchCard from '../components/shared/ResearchCard';
import { researchAreas } from '../data/research';

const Research = () => {
  return (
    <div className="research-page" style={{ paddingTop: '160px' }}>
      <div className="container">
        <SectionHeading 
          title="Research Areas" 
          subtitle="Our research landscape spans fundamental computer science to high-impact applications in biology, climate, and policy."
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem', marginBottom: '5rem' }}>
          {researchAreas.map((area, index) => (
            <ResearchCard key={area.id} area={area} index={index} />
          ))}
        </div>

        <SectionHeading title="Current Projects" />
        <div style={{ marginBottom: '5rem' }}>
          {researchAreas.map(area => (
            <div key={area.id} style={{ marginBottom: '3rem' }}>
              <h3 style={{ color: 'var(--color-primary-indigo)', marginBottom: '1.5rem', borderBottom: '1px solid var(--color-light-lavender)', paddingBottom: '0.5rem' }}>
                {area.title}
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
                {area.projects.length > 0 ? area.projects.map(project => (
                  <div key={project.id} style={{ padding: '1.5rem', border: '1px solid var(--color-light-lavender)', borderRadius: '4px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                       <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: project.status === 'ongoing' ? 'var(--color-accent-amber)' : 'var(--color-coral-red)' }}>
                         {project.status}
                       </span>
                    </div>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{project.title}</h4>
                    <p style={{ fontSize: '0.9rem', color: '#666' }}>{project.summary}</p>
                  </div>
                )) : <p style={{ fontStyle: 'italic', color: '#888' }}>New projects starting soon.</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Research;
