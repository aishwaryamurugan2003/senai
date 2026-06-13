import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './StickyNarrative.css';

import narrativeAi from '../../assets/narrative_ai.png';
import narrativeSustainable from '../../assets/narrative_sustainable.png';
import narrativeGlobal from '../../assets/narrative_global.png';

const StickyNarrative: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Discrete active layer detection with large gaps
    const opacity1 = useTransform(scrollYProgress, [0, 0.22, 0.28], [1, 1, 0], { clamp: true });
    const opacity2 = useTransform(scrollYProgress, [0.35, 0.45, 0.55, 0.65], [0, 1, 1, 0], { clamp: true });
    const opacity3 = useTransform(scrollYProgress, [0.72, 0.85, 1], [0, 1, 1], { clamp: true });

    // Helper to completely kill visibility when not in range
    const visibility1 = useTransform(opacity1, v => (v > 0 ? 'visible' : 'hidden') as any);
    const visibility2 = useTransform(opacity2, v => (v > 0 ? 'visible' : 'hidden') as any);
    const visibility3 = useTransform(opacity3, v => (v > 0 ? 'visible' : 'hidden') as any);

    const scale1 = useTransform(scrollYProgress, [0, 0.3], [1, 1.1], { clamp: true });
    const scale2 = useTransform(scrollYProgress, [0.3, 0.7], [0.95, 1.05], { clamp: true });
    const scale3 = useTransform(scrollYProgress, [0.7, 1], [1, 1.1], { clamp: true });

    return (
        <section ref={containerRef} className="sticky-narrative-section">
            <div className="narrative-sticky-container">
                <div className="narrative-content">
                    <div className="narrative-text-box">
                        <motion.div 
                            style={{ opacity: opacity1, visibility: visibility1 }} 
                            className="narrative-item"
                        >
                            <h2 className="narrative-title">Innovative AI Research</h2>
                            <p className="narrative-desc">We push the boundaries of artificial intelligence to solve complex engineering problems and advance scientific discovery.</p>
                        </motion.div>

                        <motion.div 
                            style={{ opacity: opacity2, visibility: visibility2 }} 
                            className="narrative-item"
                        >
                            <h2 className="narrative-title">Sustainable Systems</h2>
                            <p className="narrative-desc">Our laboratory focuses on creating systems that are not only efficient but also environmentally conscious and sustainable for the future.</p>
                        </motion.div>

                        <motion.div 
                            style={{ opacity: opacity3, visibility: visibility3 }} 
                            className="narrative-item"
                        >
                            <h2 className="narrative-title">Global Impact</h2>
                            <p className="narrative-desc">Collaborating with industry and academia worldwide, we ensure our research translates into real-world applications that benefit society.</p>
                        </motion.div>
                    </div>
                    <div className="narrative-visual">
                        <div className="visual-image-stack">
                            <motion.img 
                                src={narrativeAi} 
                                style={{ opacity: opacity1, scale: scale1, visibility: visibility1, zIndex: 1 }} 
                                className="narrative-img" 
                                alt="AI Research"
                            />
                            <motion.img 
                                src={narrativeSustainable} 
                                style={{ opacity: opacity2, scale: scale2, visibility: visibility2, zIndex: 2 }} 
                                className="narrative-img" 
                                alt="Sustainable Systems"
                            />
                            <motion.img 
                                src={narrativeGlobal} 
                                style={{ opacity: opacity3, scale: scale3, visibility: visibility3, zIndex: 3 }} 
                                className="narrative-img" 
                                alt="Global Impact"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="spacer-narrative"></div>
        </section>
    );
};

export default StickyNarrative;
