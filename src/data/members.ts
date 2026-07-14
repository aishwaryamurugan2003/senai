export interface Member {
  id: string;
  name: string;
  position: string;
  category: 'Faculty' | 'Our Team' | 'Alumni';
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
    imageUrl: 'https://che.iitm.ac.in/wp-content/uploads/2018/06/Raghunathan-Rengaswamy.jpg',
    profileLink: '/director'
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
  {
    id: 'alum1',
    name: 'Kiruthika I',
    position: 'MS Scholar',
    category: 'Alumni',
    researchArea: 'Microfluidics',
    email: 'kiruthikajayaseelan21@gmail.com',
    imageUrl: '',
    profileLink: '#'
  },
  {
    id: 'alum2',
    name: 'Shijoy Thomas',
    position: 'MS Scholar',
    category: 'Alumni',
    researchArea: 'Microfluidics',
    email: 'shijoy.thomas14@gmail.com',
    imageUrl: '',
    profileLink: '#'
  },
  {
    id: 'alum3',
    name: 'Sreejith C',
    position: 'PhD Scholar',
    category: 'Alumni',
    researchArea: 'Microfluidics',
    email: 'sreejithchakrapani@gmail.com',
    imageUrl: '',
    profileLink: '#'
  },
  {
    id: 'alum4',
    name: 'Sathish Swaminathan',
    position: 'PhD Scholar',
    category: 'Alumni',
    researchArea: 'Data Science, IoT',
    email: 'ch15d203@smail.iitm.ac.in',
    imageUrl: '',
    profileLink: '#'
  },
  {
    id: 'alum5',
    name: 'Lokesh R',
    position: 'PhD Scholar',
    category: 'Alumni',
    researchArea: 'Data Science',
    email: 'ch20d017@smail.iitm.ac.in',
    imageUrl: '',
    profileLink: '#'
  },
  {
    id: 'alum6',
    name: 'Arun Muthukkumaran',
    position: 'PhD Scholar (PMRF)',
    category: 'Alumni',
    researchArea: 'Modelling, Chemical Engineering',
    email: 'ch19d751@smail.iitm.ac.in',
    imageUrl: '',
    profileLink: '#'
  },
  {
    id: 'alum7',
    name: 'Karthick Raj S',
    position: 'MS Scholar',
    category: 'Alumni',
    researchArea: 'Droplet Microfluidics',
    email: 'karthickraj.selvam@gmail.com',
    imageUrl: '',
    profileLink: '#'
  },
  {
    id: 'alum8',
    name: 'Parameswaran',
    position: 'PhD Scholar',
    category: 'Alumni',
    researchArea: 'Deep Learning',
    email: 'paramesh282@gmail.com',
    imageUrl: '',
    profileLink: '#'
  },
  {
    id: 'alum9',
    name: 'Pranav Agrawal',
    position: 'MS Scholar',
    category: 'Alumni',
    researchArea: 'Data Science',
    email: 'ch19s014@smail.iitm.ac.in',
    imageUrl: '',
    profileLink: '#'
  },
  {
    id: 'alum10',
    name: 'Arun Sankar E M',
    position: 'PhD Scholar',
    category: 'Alumni',
    researchArea: 'Droplet Microfluidics',
    email: 'arunekat@gmail.com',
    imageUrl: '',
    profileLink: '#'
  },
  {
    id: 'alum11',
    name: 'Mohammad Shahab',
    position: 'PhD Scholar',
    category: 'Alumni',
    researchArea: 'Process Systems, Droplet Microfluidics',
    email: 'shahabb168@gmail.com',
    imageUrl: '',
    profileLink: '#'
  },
  {
    id: 'alum12',
    name: 'Malvika Sudhakar',
    position: 'PhD Scholar',
    category: 'Alumni',
    researchArea: 'Systems Biology, Data Science',
    email: 'malvika.s@smail.iitm.ac.in',
    imageUrl: '',
    profileLink: '#'
  },
  {
    id: 'alum13',
    name: 'Debomita Chakraborty',
    position: 'PhD Scholar',
    category: 'Alumni',
    researchArea: 'Computational, Systems Biology',
    email: 'bt18d301@smail.iitm.ac.in',
    imageUrl: '',
    profileLink: '#'
  },
  {
    id: 'cv_curr_1',
    name: 'Sundarabharathi',
    position: 'PhD Scholar',
    category: 'Our Team',
    researchArea: 'Machine learning techniques for optimization',
    email: '',
    imageUrl: '',
    profileLink: '#'
  },
  {
    id: 'cv_curr_2',
    name: 'Ramesh',
    position: 'PhD Scholar',
    category: 'Our Team',
    researchArea: 'Identification of Optimal Capacities of Renewable Energy Demand',
    email: '',
    imageUrl: '',
    profileLink: '#'
  },
  {
    id: 'cv_curr_3',
    name: 'Subhiksha',
    position: 'PhD Scholar',
    category: 'Our Team',
    researchArea: 'Data Science for Healthcare',
    email: '',
    imageUrl: '',
    profileLink: '#'
  },
  {
    id: 'cv_alum_1',
    name: 'Mukesh K',
    position: 'PhD Scholar',
    category: 'Alumni',
    researchArea: 'Machine Learning Applications in Fluid Dynamics',
    email: '',
    imageUrl: '',
    profileLink: '#'
  },
  {
    id: 'cv_alum_2',
    name: 'R. Srijith',
    position: 'PhD Scholar',
    category: 'Alumni',
    researchArea: 'Spinning disk atomizer for particle synthesis',
    email: '',
    imageUrl: '',
    profileLink: '#'
  },
  {
    id: 'cv_alum_3',
    name: 'S. Manikandan',
    position: 'PhD Scholar',
    category: 'Alumni',
    researchArea: 'Multivariable control',
    email: '',
    imageUrl: '',
    profileLink: '#'
  },
  {
    id: 'cv_alum_4',
    name: 'Faiz Mohammad',
    position: 'PhD Scholar',
    category: 'Alumni',
    researchArea: 'Droplet microfluidics for energy applications',
    email: '',
    imageUrl: '',
    profileLink: '#'
  },
  {
    id: 'cv_alum_5',
    name: 'S. R. Suseendiran',
    position: 'PhD Scholar',
    category: 'Alumni',
    researchArea: 'Development of novel flow battery chemistries',
    email: '',
    imageUrl: '',
    profileLink: '#'
  },
  {
    id: 'cv_alum_6',
    name: 'Mohd Faheem Ullah',
    position: 'PhD Scholar',
    category: 'Alumni',
    researchArea: 'Controller performance assessment techniques',
    email: '',
    imageUrl: '',
    profileLink: '#'
  },
  {
    id: 'cv_alum_7',
    name: 'C. Sivadurgaprasad',
    position: 'PhD Scholar',
    category: 'Alumni',
    researchArea: 'Computational discovery of electrolytes',
    email: '',
    imageUrl: '',
    profileLink: '#'
  },
  {
    id: 'cv_alum_8',
    name: 'Deepa Elizabeth',
    position: 'PhD Scholar',
    category: 'Alumni',
    researchArea: 'Modeling, Optimization and Control of Flow Batteries',
    email: '',
    imageUrl: '',
    profileLink: '#'
  },
];