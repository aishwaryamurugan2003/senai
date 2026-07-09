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
  }
];