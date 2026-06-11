import React, { useState } from 'react';
import SectionHeading from '../components/shared/SectionHeading';
import PublicationCard from '../components/shared/PublicationCard';
import { publications } from '../data/publications';
import { Search, Filter } from 'lucide-react';

const Publications = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState<number | 'All'>('All');
  const [selectedCategory, setSelectedCategory] = useState<string | 'All'>('All');

  const years = ['All', ...Array.from(new Set(publications.map(p => p.year))).sort((a, b) => b - a)];
  const categories = ['All', ...Array.from(new Set(publications.map(p => p.category)))];

  const filteredPublications = publications.filter(pub => {
    const matchesSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.authors.some(a => a.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesYear = selectedYear === 'All' || pub.year === selectedYear;
    const matchesCategory = selectedCategory === 'All' || pub.category === selectedCategory;
    return matchesSearch && matchesYear && matchesCategory;
  });

  return (
    <div className="publications-page" style={{ paddingTop: '160px' }}>
      <div className="container">
        <SectionHeading
          title="Publications"
          subtitle="A comprehensive list of our research outputs across major venues in computer science."
        />

        <div className="filters-bar" style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1.5rem',
          marginBottom: '3rem',
          padding: '2rem',
          background: '#f9f9fb',
          borderRadius: '8px',
          alignItems: 'center'
        }}>
          <div style={{ flex: 1, minWidth: '300px', position: 'relative' }}>
            <Search style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#888' }} size={20} />
            <input
              type="text"
              placeholder="Search by title or author..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '0.8rem 1rem 0.8rem 3rem',
                border: '1px solid var(--color-light-lavender)',
                borderRadius: '4px',
                fontSize: '1rem'
              }}
            />
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value === 'All' ? 'All' : parseInt(e.target.value))}
              style={{ padding: '0.8rem', border: '1px solid var(--color-light-lavender)', borderRadius: '4px' }}
            >
              {years.map(y => <option key={y} value={y}>{y}</option>)}
            </select>

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              style={{ padding: '0.8rem', border: '1px solid var(--color-light-lavender)', borderRadius: '4px' }}
            >
              {categories.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
        </div>

        <div className="publications-list">
          {filteredPublications.length > 0 ? (
            filteredPublications.map((pub, index) => (
              <PublicationCard key={pub.id} publication={pub} index={index} />
            ))
          ) : (
            <div style={{ textAlign: 'center', padding: '5rem', color: '#888' }}>
              No publications found matching your criteria.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Publications;