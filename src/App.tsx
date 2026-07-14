import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import BackToTop from './components/layout/BackToTop';
import Home from './pages/Home';
import Research from './pages/Research';
import Publications from './pages/Publications';
import News from './pages/News';
import Members from './pages/Members';
import Contact from './pages/Contact';
import Director from './pages/Director';

import { AnimatePresence, motion } from 'framer-motion';
import ScrollProgress from './components/shared/ScrollProgress';
import CustomCursor from './components/shared/CustomCursor';

const PageTransition = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ clipPath: 'inset(10% 10% 10% 10% round 20px)', opacity: 0 }}
    animate={{ clipPath: 'inset(0% 0% 0% 0% round 0px)', opacity: 1 }}
    exit={{ clipPath: 'inset(10% 10% 10% 10% round 20px)', opacity: 0 }}
    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as any }}
  >
    {children}
  </motion.div>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/research" element={<PageTransition><Research /></PageTransition>} />
        <Route path="/publications" element={<PageTransition><Publications /></PageTransition>} />
        <Route path="/news" element={<PageTransition><News /></PageTransition>} />
        <Route path="/members" element={<PageTransition><Members /></PageTransition>} />
        <Route path="/director" element={<PageTransition><Director /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="app-wrapper">
      <Header />
      <main style={{ paddingTop: isHomePage ? 0 : 'var(--header-height-large)' }}>
        <AnimatedRoutes />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollProgress />
      <CustomCursor />
      <AppContent />
    </Router>
  );
}

export default App;
