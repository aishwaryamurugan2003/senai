export interface ResearchArea {
  id: string;
  title: string;
  description: string;
  image?: string;
  projects: ResearchProject[];
}

export interface ResearchProject {
  id: string;
  title: string;
  status: 'ongoing' | 'completed';
  summary: string;
}

export const researchAreas: ResearchArea[] = [
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    description: 'Advancing the theoretical foundations and practical applications of AI to solve complex engineering and scientific challenges.',
    projects: [
      { id: 'p1', title: 'Neuro-Symbolic Reasoning', status: 'ongoing', summary: 'Integrating deep learning with formal logic for explainable AI.' }
    ]
  },
  {
    id: 'ml',
    title: 'Machine Learning',
    description: 'Developing next-generation algorithms for high-dimensional data analysis and predictive modeling in process systems.',
    projects: [
      { id: 'p2', title: 'Self-Supervised Robotics', status: 'ongoing', summary: 'Enabling robots to learn manipulation tasks from unlabeled video.' }
    ]
  },
  {
    id: 'deep-learning',
    title: 'Deep Learning',
    description: 'Designing deep neural architectures for pattern recognition, scientific discovery, and automated engineering design.',
    projects: []
  },
  {
    id: 'nlp',
    title: 'Natural Language Processing',
    description: 'Applying NLP techniques to scientific literature and industrial documentation for knowledge extraction and discovery.',
    projects: [
      { id: 'p3', title: 'SciBERT for Materials', status: 'completed', summary: 'Using language models for perovskite-based electrocatalyst discovery.' }
    ]
  },
  {
    id: 'systems-engineering',
    title: 'Systems Engineering',
    description: 'A holistic approach to the design and management of complex artificial and natural systems across their life cycles.',
    projects: []
  },
  {
    id: 'comp-intel',
    title: 'Computational Intelligence',
    description: 'Exploring nature-inspired computational paradigms, including reinforcement learning and evolutionary algorithms.',
    projects: []
  },
  {
    id: 'data-science',
    title: 'Data Science',
    description: 'Extracting actionable insights from massive-scale industrial and environmental datasets using advanced statistical methods.',
    projects: []
  },
  {
    id: 'sustainability-ai',
    title: 'Carbon Net-Zero & Sustainability AI',
    description: 'Harnessing the power of AI to drive the transition towards a carbon-neutral future and sustainable industrial practices.',
    projects: [
      { id: 'p4', title: 'PM2.5 Monitoring', status: 'ongoing', summary: 'IoT and data science-based frameworks for hyper-local environmental assessment.' }
    ]
  }
];
