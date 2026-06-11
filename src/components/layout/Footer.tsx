import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe, Link as LinkIcon, GitBranch } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-column">
          <h3 className="footer-logo">SENAI LAB</h3>
          <p className="footer-description">
            Sustainable Engineering and Applied Intelligence Lab at IIT Madras. 
            Advancing the frontiers of systems engineering and AI for a sustainable future.
          </p>
          <div className="social-links">
            <a href="https://www.linkedin.com/company/senai-iitm/" target="_blank" rel="noopener noreferrer"><LinkIcon size={18} /></a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"><GitBranch size={18} /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><Globe size={18} /></a>
          </div>
        </div>

        <div className="footer-column">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/research">Research Areas</Link></li>
            <li><Link to="/publications">Publications</Link></li>
            <li><Link to="/members">Our Team</Link></li>
            <li><Link to="/news">News & Events</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="footer-heading">Contact Us</h4>
          <ul className="footer-contact">
            <li><MapPin size={18} /> Department of Chemical Engineering, IIT Madras, Chennai, India 600036</li>
            <li><Mail size={18} /> raghunathanr@iitm.ac.in</li>
            <li><Phone size={18} /> +91 44 2257 4173</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} SENAI Research Laboratory, IIT Madras. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
