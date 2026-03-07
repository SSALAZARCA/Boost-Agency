import React from 'react';
import { motion } from 'framer-motion';
import { useSite } from '../context/SiteContext';

const MisionVisionSection = () => {
    return (
        <section
            id="dna"
            style={{
                padding: '10rem 5%',
                backgroundColor: 'var(--color-black)', // Dark base
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center'
            }}
        >
            <div style={{ maxWidth: '1000px', width: '100%' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <p style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.9rem',
                        letterSpacing: '0.3em',
                        textTransform: 'uppercase',
                        color: '#FDFD88', // Highlight
                        marginBottom: '2rem',
                        fontWeight: 600,
                    }}>
                        Our Essence
                    </p>
                    <h2 style={{
                        fontFamily: 'var(--font-heading)',
                        fontStretch: 'var(--font-heading-stretch)',
                        fontSize: 'clamp(3rem, 6vw, 5rem)',
                        color: 'var(--color-secondary)', // Beige
                        marginBottom: '4rem',
                        lineHeight: 1,
                    }}>
                        BOOST DNA
                    </h2>
                </motion.div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        style={{
                            fontSize: 'clamp(1.4rem, 2.5vw, 2.2rem)',
                            color: 'white',
                            lineHeight: 1.4,
                            maxWidth: '900px',
                            margin: '0 auto'
                        }}
                    >
                        Boost Agency was created to bridge strategy and execution.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        style={{
                            padding: '3rem',
                            borderTop: '1px solid rgba(255,255,255,0.1)',
                            borderBottom: '1px solid rgba(255,255,255,0.1)',
                        }}
                    >
                        <p style={{
                            fontSize: '1.5rem',
                            color: '#FDFD88',
                            marginBottom: '2rem',
                            fontStyle: 'italic'
                        }}>
                            We believe brands grow when positioning, storytelling and experience operate as one system.
                        </p>
                        <p style={{
                            fontSize: '1.25rem',
                            color: 'rgba(251,238,230,0.8)',
                            lineHeight: 1.6,
                            maxWidth: '700px',
                            margin: '0 auto'
                        }}>
                            Business vision, creative direction and operational precision — aligned to build brands ready to compete globally.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default MisionVisionSection;
