import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SectionHeading from '../components/shared/SectionHeading';
import MemberCard from '../components/shared/MemberCard';
import { members } from '../data/members';
import type { Member } from '../data/members';
import { motion, AnimatePresence } from 'framer-motion';

const Members = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialCategory = queryParams.get('category') as Member['category'] || 'Faculty';

  const [activeTab, setActiveTab] = useState<Member['category']>(
    ['Faculty', 'Our Team', 'Alumni'].includes(initialCategory) ? initialCategory : 'Faculty'
  );

  useEffect(() => {
    const category = queryParams.get('category') as Member['category'];
    if (category && ['Faculty', 'Our Team', 'Alumni'].includes(category)) {
      setActiveTab(category);
    }
  }, [location]);

  const tabs: Member['category'][] = ['Faculty', 'Our Team', 'Alumni'];

  const filteredMembers = members.filter(m => m.category === activeTab);

  return (
    <div className="members-page" style={{ paddingTop: '160px' }}>
      <div className="container">
        <SectionHeading
          title="Team Members"
          subtitle="Our diverse team of professors, researchers, and students collaborating to redefine computational boundaries."
        />

        <div className="tabs-container" style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          marginBottom: '4rem',
          borderBottom: '1px solid var(--color-light-lavender)',
          paddingBottom: '1rem'
        }}>
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '0.8rem 2rem',
                fontSize: '1rem',
                fontWeight: 600,
                color: activeTab === tab ? 'var(--color-primary-indigo)' : '#888',
                position: 'relative',
                transition: 'color 0.3s ease'
              }}
            >
              {tab}
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTab"
                  style={{
                    position: 'absolute',
                    bottom: '-1rem',
                    left: 0,
                    right: 0,
                    height: '3px',
                    backgroundColor: 'var(--color-primary-indigo)'
                  }}
                />
              )}
            </button>
          ))}
        </div>

        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '2.5rem',
            marginBottom: '5rem'
          }}
        >
          <AnimatePresence mode="popLayout">
            {filteredMembers.map((member, index) => (
              <MemberCard key={member.id} member={member} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Members;
