export interface PanoramaItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  link: string;
  tag: string;
}

export const panoramaItems: PanoramaItem[] = [
  {
    id: 'ai-sustainability',
    title: 'AI for Carbon Net-Zero & Sustainability',
    subtitle: 'Advanced Modeling · Renewable Energy · Carbon Tracking',
    description: 'Leveraging Artificial Intelligence and Machine Learning to accelerate the transition to a sustainable future through smart energy management and environmental modeling.',
    color: 'var(--color-primary-indigo)',
    link: '/research',
    tag: 'CORE FOCUS'
  },
  {
    id: 'systems-engineering',
    title: 'Systems Engineering & Computational Intelligence',
    subtitle: 'Process Dynamics · Nonlinear Analysis · Control Systems',
    description: 'Developing sophisticated computational frameworks for the design, analysis, and optimization of complex engineering systems across multiple scales.',
    color: '#8B5CF6',
    link: '/research',
    tag: 'ADVANCED SYSTEMS'
  },
  {
    id: 'data-science-nlp',
    title: 'Data Science & Natural Language Processing',
    subtitle: 'Deep Learning · NLP · Pattern Recognition',
    description: 'Exploring the frontiers of data-driven discovery through deep learning architectures and advanced language models for scientific and industrial applications.',
    color: 'var(--color-accent-amber)',
    link: '/research',
    tag: 'INTELLIGENCE & DATA'
  }
];
