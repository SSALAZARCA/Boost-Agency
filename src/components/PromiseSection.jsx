import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';

const PromiseSection = () => {
    return (
        <Section id="beyond-marketing" title="Beyond Marketing" bgColor="var(--color-secondary)" textColor="var(--color-black)" alignment="center">
            <div style={{ maxWidth: '900px', margin: '0 auto', padding: '4rem 0' }}>
                <h3 style={{
                    fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--color-black)',
                    marginBottom: '3rem',
                    lineHeight: 1.2
                }}>
                    We don’t focus on visibility alone. <br />
                    We design competitive positioning.
                </h3>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{
                        fontSize: 'clamp(1.2rem, 2vw, 1.8rem)',
                        lineHeight: 1.6,
                        color: 'var(--color-accent)',
                        maxWidth: '800px',
                        margin: '0 auto'
                    }}
                >
                    Boost integrates strategy, branding and experiences to transform how brands are perceived, experienced and remembered.
                </motion.p>
            </div>
        </Section>
    );
};

export default PromiseSection;
