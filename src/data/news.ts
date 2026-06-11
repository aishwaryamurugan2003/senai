export interface NewsItem {
  id: string;
  date: string;
  title: string;
  summary: string;
  category: 'Announcement' | 'Event' | 'Seminar' | 'Research';
  link?: string;
}

export const news: NewsItem[] = [
  {
    id: 'n1',
    date: '2024-05-15',
    title: 'SENAI Lab researchers present at International Conference on Data Science',
    summary: 'Our team shared latest findings on discovering governing partial differential equations from noisy industrial data.',
    category: 'Research',
    link: '#'
  },
  {
    id: 'n2',
    date: '2024-04-20',
    title: 'Upcoming Workshop: AI Applications in Sustainable Engineering',
    summary: 'Join us for a hands-on workshop exploring the intersection of ML and carbon net-zero initiatives.',
    category: 'Event',
    link: '#'
  },
  {
    id: 'n3',
    date: '2024-03-10',
    title: 'Prof. Rengaswamy delivers keynote on the Future of Systems Engineering',
    summary: 'A deep dive into how computational intelligence is reshaping the landscape of chemical and process engineering.',
    category: 'Seminar',
    link: '#'
  },
  {
    id: 'n4',
    date: '2024-06-12',
    title: 'New Grant: AI for Urban Air Quality Monitoring',
    summary: 'SENAI Lab receives funding to expand its hyper-local PM2.5 assessment framework using IoT and Deep Learning.',
    category: 'Announcement',
    link: '#'
  }
];
