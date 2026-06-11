
import Hero from '../components/home/Hero';
import ResearchPreview from '../components/home/ResearchPreview';
import PublicationsPreview from '../components/home/PublicationsPreview';
import NewsPreview from '../components/home/NewsPreview';
import MembersPreview from '../components/home/MembersPreview';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <ResearchPreview />
      <PublicationsPreview />
      <NewsPreview />
      <MembersPreview />
    </div>
  );
};

export default Home;
