
import SectionHeading from '../components/shared/SectionHeading';
import NewsCard from '../components/shared/NewsCard';
import { news } from '../data/news';

const News = () => {
  const featuredNews = news[0];
  const otherNews = news.slice(1);

  return (
    <div className="news-page" style={{ paddingTop: '160px' }}>
      <div className="container">
        <SectionHeading 
          title="Laboratory News" 
          subtitle="Updates on research breakthroughs, grants, awards, and laboratory milestones."
        />

        {featuredNews && (
          <div className="featured-news" style={{ marginBottom: '4rem' }}>
            <h3 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--color-primary-indigo)', marginBottom: '1.5rem', borderBottom: '2px solid var(--color-accent-amber)', display: 'inline-block', paddingBottom: '0.5rem' }}>Featured</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', background: 'white', border: '1px solid var(--color-light-lavender)', borderRadius: '8px', overflow: 'hidden', minHeight: '300px' }}>
              <div style={{ background: 'var(--color-primary-indigo)', padding: '3rem', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <span style={{ fontSize: '0.85rem', marginBottom: '1rem', opacity: 0.8 }}>{new Date(featuredNews.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', lineHeight: 1.2 }}>{featuredNews.title}</h2>
                <p style={{ fontSize: '1.1rem', opacity: 0.9, lineHeight: 1.6, marginBottom: '2rem' }}>{featuredNews.summary}</p>
                <a href={featuredNews.link || '#'} className="btn btn-accent" style={{ alignSelf: 'flex-start' }}>Read Full Article</a>
              </div>
              <div style={{ background: '#f5f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '5rem', color: 'var(--color-primary-indigo)', opacity: 0.2 }}>NEWS</span>
              </div>
            </div>
          </div>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: '2rem', marginBottom: '5rem' }}>
          {otherNews.map((item, index) => (
            <NewsCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
