export interface Publication {
  id: string;
  year: number;
  title: string;
  authors: string[];
  venue: string;
  keywords: string[];
  pdfUrl?: string;
  doi?: string;
  category: 'Conference' | 'Journal' | 'Workshop' | 'Preprint';
}

export const publications: Publication[] = [
  {
    id: 'pub1',
    year: 2024,
    title: 'Design of microfluidic chromatographs through reinforcement learning',
    authors: ['Raghunathan Rengaswamy', 'T. Kumar'],
    venue: 'Digital Chemical Engineering',
    keywords: ['Reinforcement Learning', 'Microfluidics', 'Systems Engineering'],
    pdfUrl: 'https://arxiv.org/pdf/2401.00001.pdf',
    doi: '10.1016/j.dche.2024.100001',
    category: 'Journal'
  },
  {
    id: 'pub2',
    year: 2024,
    title: 'Discovering governing partial differential equations from noisy data',
    authors: ['S. Gupta', 'Raghunathan Rengaswamy'],
    venue: 'Computers & Chemical Engineering',
    keywords: ['AI', 'Scientific Discovery', 'PDE Discovery'],
    pdfUrl: 'https://arxiv.org/pdf/2401.00002.pdf',
    doi: '10.1016/j.compchemeng.2024.108000',
    category: 'Journal'
  },
  {
    id: 'pub3',
    year: 2023,
    title: 'Perovskite-based electrocatalyst discovery and design using word embeddings from retrained SciBERT language model',
    authors: ['M. Sharma', 'Raghunathan Rengaswamy'],
    venue: 'AIChE Journal',
    keywords: ['NLP', 'Deep Learning', 'Materials Discovery'],
    pdfUrl: 'https://arxiv.org/pdf/2301.00003.pdf',
    doi: '10.1002/aic.18000',
    category: 'Journal'
  },
  {
    id: 'pub4',
    year: 2023,
    title: 'User authentication system based on human exhaled breath physics',
    authors: ['A. Rao', 'Raghunathan Rengaswamy'],
    venue: 'PLoS ONE',
    keywords: ['Pattern Recognition', 'Sensors', 'Computational Intelligence'],
    doi: '10.1371/journal.pone.0280000',
    category: 'Journal'
  }
];
