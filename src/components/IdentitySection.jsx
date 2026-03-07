import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';

const IdentitySection = () => {
    const philosophyPoints = [
        "Strategy before execution",
        "Coherence before trends",
        "Positioning before volume",
        "Quality before quantity"
    ];

    return (
        <Section id="philosophy" title="Our Philosophy" bgColor="var(--color-black)" alignment="center">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem',
                    marginBottom: '4rem',
                    textAlign: 'left',
                    paddingLeft: '2rem',
                    borderLeft: '1px solid var(--color-primary)'
                }}>
                    {philosophyPoints.map((point, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            style={{
                                fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                                color: 'var(--color-highlight)',
                                fontWeight: 800,
                                opacity: 0.6,
                                display: 'flex',
                                alignItems: 'center',
                                fontFamily: 'var(--font-heading)',
                                fontStretch: 'var(--font-heading-stretch)'
                            }}
                        >
                            <span style={{ fontSize: '0.8rem', marginRight: '1.5rem', opacity: 0.8, color: 'var(--color-highlight)' }}>●</span>
                            {point}
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    style={{
                        fontSize: '1.5rem',
                        fontStyle: 'italic',
                        color: 'white',
                        marginTop: '2rem',
                        opacity: 0.9
                    }}
                >
                    Strong brands are built through direction, not noise.
                </motion.p>
            </div>
        </Section>
    );
};

export default IdentitySection;
