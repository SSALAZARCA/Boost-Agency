import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';

const AboutSection = () => {
    return (
        <Section id="about" bgColor="var(--color-secondary)" alignment="center">
            <div style={{
                maxWidth: '900px',
                margin: '0 auto',
                textAlign: 'center',
                width: '100%'
            }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <motion.h2
                        style={{
                            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                            marginBottom: '2.5rem',
                            fontFamily: 'var(--font-heading)',
                            fontStretch: 'var(--font-heading-stretch)',
                            color: 'var(--color-black)'
                        }}
                    >
                        Not a traditional agency.
                    </motion.h2>

                    <p style={{ fontSize: '1.25rem', marginBottom: '1.5rem', lineHeight: 1.6, color: 'var(--color-text)' }}>
                        Boost Agency operates as a strategic partner for brands seeking clarity, differentiation and sustainable growth.
                    </p>

                    <div style={{
                        marginTop: '3rem',
                        padding: '2rem',
                        borderTop: '1px solid rgba(0,0,0,0.1)',
                        borderBottom: '1px solid rgba(0,0,0,0.1)'
                    }}>
                        <p style={{ fontSize: '1.4rem', fontWeight: 600, color: 'var(--color-black)', marginBottom: '1.5rem' }}>
                            We don’t execute isolated marketing actions.
                        </p>
                        <p style={{ fontSize: '1.2rem', lineHeight: 1.6, fontStyle: 'italic', maxWidth: '800px', margin: '0 auto' }}>
                            We design positioning systems where branding, communication and experience work together under a common strategy.
                        </p>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
};

export default AboutSection;
