import React from 'react';
import { motion } from 'framer-motion';

// Simple SVG Icons
const Icons = {
    Megaphone: (props) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="m3 11 18-5v12L3 14v-3z" /><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
        </svg>
    ),
    Lightbulb: (props) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-1 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" /><path d="M9 18h6" /><path d="M10 22h4" />
        </svg>
    ),
    Shield: (props) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        </svg>
    ),
    TrendingUp: (props) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" />
        </svg>
    ),
    Target: (props) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
        </svg>
    )
};

const MarketingDNA = () => {
    return (
        <div style={{
            width: '100%',
            height: '100%',
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '12px',
            background: '#0a192f'
        }}>
            {/* 1. Base Image (High Quality DNA Render) */}
            <div style={{ position: 'absolute', inset: 0 }}>
                <img
                    src="https://images.unsplash.com/photo-1633167606207-d840b5070fc2?q=80&w=2052&auto=format&fit=crop"
                    alt="DNA Structure"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6, transform: 'scale(1.1)' }}
                />
                {/* Gradient Overlay to enforce Blue/Gold theme if needed */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(10,25,47,0.8), rgba(20,40,80,0.4))' }}></div>
            </div>

            {/* 2. Floating Icons Layer */}
            <div style={{ position: 'absolute', inset: 0 }}>

                {/* Strategy (Lightbulb) - Top Left */}
                <motion.div
                    style={{ position: 'absolute', top: '20%', left: '20%', color: '#ffbd69' }} // Gold
                    animate={{ y: [0, -15, 0], opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                    <div style={{ background: 'rgba(255, 189, 105, 0.1)', padding: '12px', borderRadius: '50%', border: '1px solid rgba(255, 189, 105, 0.3)' }}>
                        <Icons.Lightbulb width={32} height={32} />
                    </div>
                    <div style={{ textAlign: 'center', fontSize: '10px', marginTop: '5px', color: '#ffbd69', letterSpacing: '1px' }}>IDEA</div>
                </motion.div>

                {/* Growth (TrendingUp) - Top Right */}
                <motion.div
                    style={{ position: 'absolute', top: '15%', right: '25%', color: '#64ffda' }} // Teal
                    animate={{ y: [0, 10, 0], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                    <div style={{ background: 'rgba(100, 255, 218, 0.1)', padding: '12px', borderRadius: '50%', border: '1px solid rgba(100, 255, 218, 0.3)' }}>
                        <Icons.TrendingUp width={32} height={32} />
                    </div>
                    <div style={{ textAlign: 'center', fontSize: '10px', marginTop: '5px', color: '#64ffda', letterSpacing: '1px' }}>GROWTH</div>
                </motion.div>

                {/* Campaign (Megaphone) - Bottom Left */}
                <motion.div
                    style={{ position: 'absolute', bottom: '25%', left: '15%', color: '#64ffda' }}
                    animate={{ y: [0, -10, 0], x: [0, 5, 0], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                    <div style={{ background: 'rgba(100, 255, 218, 0.1)', padding: '12px', borderRadius: '50%', border: '1px solid rgba(100, 255, 218, 0.3)' }}>
                        <Icons.Megaphone width={32} height={32} />
                    </div>
                    <div style={{ textAlign: 'center', fontSize: '10px', marginTop: '5px', color: '#64ffda', letterSpacing: '1px' }}>REACH</div>
                </motion.div>

                {/* Protection/Brand (Shield) - Bottom Right */}
                <motion.div
                    style={{ position: 'absolute', bottom: '20%', right: '20%', color: '#ffbd69' }}
                    animate={{ y: [0, 12, 0], opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                >
                    <div style={{ background: 'rgba(255, 189, 105, 0.1)', padding: '12px', borderRadius: '50%', border: '1px solid rgba(255, 189, 105, 0.3)' }}>
                        <Icons.Shield width={32} height={32} />
                    </div>
                    <div style={{ textAlign: 'center', fontSize: '10px', marginTop: '5px', color: '#ffbd69', letterSpacing: '1px' }}>TRUST</div>
                </motion.div>

                {/* Center Target - Floating near center */}
                <motion.div
                    style={{ position: 'absolute', top: '50%', left: '50%', x: '-50%', y: '-50%', color: 'white' }}
                    animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                    <div style={{ padding: '8px', border: '1px dashed rgba(255,255,255,0.3)', borderRadius: '50%' }}>
                        <Icons.Target width={24} height={24} />
                    </div>
                </motion.div>

            </div>

            <div style={{
                position: 'absolute', bottom: '20px', left: '0', right: '0', textAlign: 'center',
                color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', letterSpacing: '3px', textTransform: 'uppercase'
            }}>
                Marketing Integrado
            </div>
        </div>
    );
};

export default MarketingDNA;
