import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';

const NetworkVisual = () => {
    const nodes = [
        { cx: 50, cy: 50, delay: 0 },
        { cx: 250, cy: 80, delay: 0.2 },
        { cx: 100, cy: 250, delay: 0.4 },
        { cx: 200, cy: 200, delay: 0.6 },
        { cx: 150, cy: 150, delay: 0.8 } // Center
    ];

    return (
        <div style={{
            width: '100%', height: '100%', background: '#112240', borderRadius: '20px',
            position: 'relative', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center'
        }}>
            {/* Background Glow */}
            <div style={{
                position: 'absolute', width: '200px', height: '200px', background: 'var(--color-highlight)',
                borderRadius: '50%', filter: 'blur(80px)', opacity: 0.1
            }}></div>

            <svg width="300" height="300" viewBox="0 0 300 300" style={{ zIndex: 2 }}>
                {/* Connections to Center */}
                <motion.line x1="50" y1="50" x2="150" y2="150" stroke="rgba(255,255,255,0.2)" strokeWidth="1" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.5 }} />
                <motion.line x1="250" y1="80" x2="150" y2="150" stroke="rgba(255,255,255,0.2)" strokeWidth="1" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.7 }} />
                <motion.line x1="100" y1="250" x2="150" y2="150" stroke="rgba(255,255,255,0.2)" strokeWidth="1" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.9 }} />
                <motion.line x1="200" y1="200" x2="150" y2="150" stroke="rgba(255,255,255,0.2)" strokeWidth="1" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 1.1 }} />

                {/* Nodes */}
                {nodes.map((node, i) => (
                    <motion.circle
                        key={i}
                        cx={node.cx} cy={node.cy} r="6"
                        fill="var(--color-highlight)"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: node.delay, type: "spring" }}
                    />
                ))}

                {/* Center Pulse */}
                <motion.circle
                    cx="150" cy="150" r="15"
                    stroke="var(--color-highlight)" strokeWidth="2" fill="none"
                    initial={{ scale: 0.5, opacity: 1 }}
                    animate={{ scale: 1.5, opacity: 0 }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
            </svg>

            <div style={{ position: 'absolute', bottom: 20, left: 0, right: 0, textAlign: 'center', color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', letterSpacing: '2px' }}>
                NETWORK_ACTIVE
            </div>
        </div>
    );
};

const AudienceSection = () => {
    const reasons = [
        "Strategic thinking over trends",
        "Integrated execution under one vision",
        "Experience-driven brand building",
        "Global mindset with local precision"
    ];

    return (
        <Section id="why-boost" bgColor="var(--color-secondary)" textColor="var(--color-black)">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '5rem', width: '100%', alignItems: 'center' }}>

                {/* Left: Text Content */}
                <div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        style={{ color: 'var(--color-black)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem', fontSize: '0.9rem', fontWeight: 700, opacity: 0.6 }}
                    >
                        The Choice
                    </motion.p>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--color-black)', marginBottom: '3rem', fontFamily: 'var(--font-heading)', lineHeight: 1.1 }}>
                        Why Brands <br /> Choose Boost
                    </h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        {reasons.map((reason, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    paddingBottom: '1rem',
                                    borderBottom: '1px solid rgba(0,0,0,0.1)',
                                    fontSize: '1.25rem',
                                    color: 'var(--color-black)'
                                }}
                            >
                                <span style={{ color: 'var(--color-black)', marginRight: '1.5rem', fontSize: '1.5rem', opacity: 0.8 }}>†</span>
                                {reason}
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Right: Visual Imagery */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    style={{ position: 'relative', height: '650px', borderRadius: '4px', overflow: 'hidden', boxShadow: '0 30px 70px rgba(0,0,0,0.5)' }}
                >
                    <img
                        src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop"
                        alt="High-end Architecture"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(14,40,65,0.4), transparent)' }}></div>
                </motion.div>

            </div>
        </Section>
    );
};

export default AudienceSection;
