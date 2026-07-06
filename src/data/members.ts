export interface Member {
  id: string;
  name: string;
  position: string;
  category: 'Faculty' | 'Current Students' | 'Alumni';
  researchArea: string;
  email: string;
  imageUrl?: string;
  profileLink?: string;
}

export const members: Member[] = [
  {
    id: 'm1',
    name: 'Prof. Raghunathan Rengaswamy',
    position: 'Principal Investigator, Professor of Chemical Engineering',
    category: 'Faculty',
    researchArea: 'Systems Engineering & Data Science',
    email: 'raghur@dsai.iitm.ac.in',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwXT69G2x3Eu25tTFj48uEeF9qLkWqKUKXvA&s',
    profileLink: 'https://che.iitm.ac.in/content/raghunathan-rengaswamy'
  },
  // {
  //   id: 'm2',
  //   name: 'Dr. Jane Doe',
  //   position: 'Post-Doctoral Researcher',
  //   category: 'Faculty',
  //   researchArea: 'Computational Intelligence',
  //   email: 'janedoe@iitm.ac.in',
  //   imageUrl: '',
  //   profileLink: '#'
  // },
  // {
  //   id: 'm3',
  //   name: 'Aditya Kumar',
  //   position: 'PhD Candidate',
  //   category: 'Current Students',
  //   researchArea: 'AI for Sustainability',
  //   email: 'adityak@iitm.ac.in',
  //   imageUrl: '',
  //   profileLink: '#'
  // },
  // {
  //   id: 'm4',
  //   name: 'Sneha Rao',
  //   position: 'PhD Candidate',
  //   category: 'Current Students',
  //   researchArea: 'Process Control & AI',
  //   email: 'sneharao@iitm.ac.in',
  //   imageUrl: '',
  //   profileLink: '#'
  // },
  // {
  //   id: 'm5',
  //   name: 'Anirudh S.',
  //   position: 'Alumni, Research Scientist at DeepMind',
  //   category: 'Alumni',
  //   researchArea: 'Deep Learning',
  //   email: 'anirudh@alumni.iitm.ac.in',
  //   imageUrl: '',
  //   profileLink: '#'
  // }
];
