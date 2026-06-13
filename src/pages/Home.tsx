import Hero from '../components/home/Hero';
import ResearchPreview from '../components/home/ResearchPreview';
import StickyNarrative from '../components/home/StickyNarrative';
import PublicationsPreview from '../components/home/PublicationsPreview';
import HorizontalNews from '../components/home/HorizontalNews';
import MembersPreview from '../components/home/MembersPreview';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <ResearchPreview />
      <StickyNarrative />
      <PublicationsPreview />
      <HorizontalNews />
      <MembersPreview />
    </div>
  );
};

export default Home;
