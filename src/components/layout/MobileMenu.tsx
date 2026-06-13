import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown, Mail, Globe, Link as LinkIcon, GitBranch } from 'lucide-react';
import './MobileMenu.css';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: any[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, navLinks }) => {
  const [expandedLinks, setExpandedLinks] = useState<{ [key: string]: boolean }>({});

  const toggleExpand = (label: string) => {
    setExpandedLinks(prev => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            className="mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div 
            className="mobile-side-panel"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] as any }}
          >
            <div className="mobile-header">
              <span className="mobile-lab-name">ELITE LAB</span>
              <button onClick={onClose} className="close-btn">
                <X size={28} />
              </button>
            </div>

            <nav className="mobile-nav-list">
              {navLinks.map((link) => (
                <div key={link.path} className="mobile-nav-item">
                  {link.hasDropdown ? (
                    <>
                      <button 
                        className="mobile-dropdown-btn" 
                        onClick={() => toggleExpand(link.label)}
                      >
                        {link.label} <ChevronDown className={expandedLinks[link.label] ? 'rotated' : ''} />
                      </button>
                      <AnimatePresence>
                        {expandedLinks[link.label] && (
                          <motion.div 
                            className="mobile-submenu"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                          >
                            {link.subLinks.map((sub: any) => (
                              <NavLink key={sub.path} to={sub.path} onClick={onClose}>
                                {sub.label}
                              </NavLink>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <NavLink to={link.path} onClick={onClose}>
                      {link.label}
                    </NavLink>
                  )}
                </div>
              ))}
            </nav>

            <div className="mobile-footer">
              <div className="mobile-contact">
                <a href="mailto:info@elitelab.edu"><Mail size={20} /> info@elitelab.edu</a>
              </div>
              <div className="mobile-social">
                <a href="#"><Globe size={20} /></a>
                <a href="#"><LinkIcon size={20} /></a>
                <a href="#"><GitBranch size={20} /></a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
