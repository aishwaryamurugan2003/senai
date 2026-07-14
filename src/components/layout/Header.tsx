import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, ChevronDown, Search, X, Sun, Moon } from 'lucide-react';
import MobileMenu from './MobileMenu';
import { publications } from '../../data/publications';
import { researchAreas } from '../../data/research';
import { members } from '../../data/members';
import { news } from '../../data/news';
import logo from '../../assets/logo.png';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMembersDropdownOpen, setIsMembersDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Close search on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsSearchOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/publications', label: 'Publications' },
    { path: '/research', label: 'Research' },
    { path: '/news', label: 'News' },
    {
      path: '/members',
      label: 'Members',
      hasDropdown: true,
      subLinks: [
        { path: '/director', label: 'Principal Investigator' },
        { path: '/members?category=Faculty', label: 'Faculty' },
        { path: '/members?category=Students', label: 'Current Students' },
        { path: '/members?category=Alumni', label: 'Alumni' },
      ]
    },
    { path: '/contact', label: 'Contact Us' },
  ];

  // Search logic
  const searchResults = searchQuery.trim().length > 1 ? [
    ...publications
      .filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.authors.some(a => a.toLowerCase().includes(searchQuery.toLowerCase())))
      .slice(0, 3)
      .map(p => ({ label: p.title, sub: `Publication · ${p.venue}`, path: '/publications' })),
    ...researchAreas
      .filter(r => r.title.toLowerCase().includes(searchQuery.toLowerCase()) || r.description.toLowerCase().includes(searchQuery.toLowerCase()))
      .slice(0, 2)
      .map(r => ({ label: r.title, sub: 'Research Area', path: '/research' })),
    ...members
      .filter(m => m.name.toLowerCase().includes(searchQuery.toLowerCase()) || m.researchArea.toLowerCase().includes(searchQuery.toLowerCase()))
      .slice(0, 2)
      .map(m => ({ label: m.name, sub: `Member · ${m.position}`, path: m.profileLink && m.profileLink.startsWith('/') ? m.profileLink : '/members' })),
    ...news
      .filter(n => n.title.toLowerCase().includes(searchQuery.toLowerCase()))
      .slice(0, 2)
      .map(n => ({ label: n.title, sub: `News · ${n.category}`, path: '/news' })),
  ] : [];

  const handleSearchNav = (path: string) => {
    navigate(path);
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        {/* Top brand row — hidden when scrolled */}
        {!isScrolled && (
          <div className="header-brand">
            <Link to="/" className="logo-container">
              <div className="logo-placeholder">
                <img
                  src={logo}
                  alt="SENAI Lab"
                  className="logo-image"
                />
              </div>

              <div className="title-container">
                <span className="lab-title">
                  SENAI LAB, IIT MADRAS
                </span>
                <span className="lab-subtitle">
                  SUSTAINABLE ENGINEERING & APPLIED INTELLIGENCE
                </span>
              </div>
            </Link>
          </div>
        )}

        {/* Navigation row */}
        <div className="header-nav-row">
          {/* Compact logo (scrolled only) */}
          {isScrolled && (
            <Link to="/" className="logo-compact">
              <div className="logo-placeholder">
                <img
                  src={logo}
                  alt="SENAI Lab"
                  className="logo-image"
                />
              </div>              <span className="lab-title-sm">SENAI LAB</span>
            </Link>
          )}

          <nav className="desktop-nav">
            <ul className="nav-list">
              {navLinks.map((link) => (
                <li key={link.path} className="nav-item">
                  {link.hasDropdown ? (
                    <div
                      className="dropdown-trigger"
                      onMouseEnter={() => setIsMembersDropdownOpen(true)}
                      onMouseLeave={() => setIsMembersDropdownOpen(false)}
                    >
                      <NavLink to={link.path} className={({ isActive }) => isActive ? 'active' : ''}>
                        {link.label} <ChevronDown size={13} />
                      </NavLink>
                      <AnimatePresence>
                        {isMembersDropdownOpen && (
                          <motion.ul
                            className="dropdown-menu"
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 8 }}
                            transition={{ duration: 0.18 }}
                          >
                            {link.subLinks?.map((sub) => (
                              <li key={sub.path}>
                                <NavLink to={sub.path}>{sub.label}</NavLink>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <NavLink to={link.path} className={({ isActive }) => isActive ? 'active' : ''}>
                      {link.label}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-actions">
            <button className="theme-toggle-btn" onClick={toggleTheme} aria-label="Toggle theme">
               {theme === 'light' ? <Moon size={19} /> : <Sun size={19} />}
            </button>
            <button className="search-btn" onClick={() => setIsSearchOpen(true)} aria-label="Open search">
              <Search size={19} />
            </button>
            <button className="mobile-toggle" onClick={() => setIsMobileMenuOpen(true)} aria-label="Open menu">
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Search overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            className="search-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSearchOpen(false)}
          >
            <motion.div
              className="search-modal"
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="search-input-row">
                <Search size={22} className="search-icon" />
                <input
                  autoFocus
                  type="text"
                  placeholder="Search publications, members, research areas…"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                />
                <button onClick={() => setIsSearchOpen(false)} className="search-close">
                  <X size={22} />
                </button>
              </div>

              {searchResults.length > 0 && (
                <ul className="search-results">
                  {searchResults.map((r, i) => (
                    <li key={i}>
                      <button onClick={() => handleSearchNav(r.path)}>
                        <span className="result-label">{r.label}</span>
                        <span className="result-sub">{r.sub}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
              {searchQuery.trim().length > 1 && searchResults.length === 0 && (
                <p className="search-empty">No results found for "<strong>{searchQuery}</strong>"</p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navLinks={navLinks}
      />
    </>
  );
};

export default Header;
