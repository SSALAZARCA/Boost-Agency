import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';

const MethodologySection = () => {
    const steps = [
        {
            number: "01",
            title: "Strategic Diagnosis",
            desc: "We analyze business context, market positioning and growth opportunities."
        },
        {
            number: "02",
            title: "Brand Direction",
            desc: "We define narrative, differentiation and positioning architecture."
        },
        {
            number: "03",
            title: "Growth Roadmap",
            desc: "We design a strategic plan connecting marketing, experience and brand expansion."
        },
        {
            number: "04",
            title: "Strategic Execution",
            desc: "Every action is executed under centralized creative and strategic direction."
        },
        {
            number: "05",
            title: "Optimization & Scaling",
            desc: "We measure, refine and scale what truly drives growth."
        }
    ];

    return (
        <Section id="framework" title="Our Strategic Framework" bgColor="var(--color-black)" alignment="center">
            <div style={{ maxWidth: '1000px', margin: '0 auto', width: '100%' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            style={{
                                display: 'flex',
                                gap: '3rem',
                                padding: '3rem',
                                background: 'rgba(255,255,255,0.03)',
                                borderRadius: '16px',
                                boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                                alignItems: 'center',
                                border: '1px solid rgba(255,255,255,0.05)',
                                textAlign: 'left',
                                flexWrap: 'wrap'
                            }}
                        >
                            <div style={{
                                fontSize: '3rem',
                                color: 'var(--color-highlight)',
                                fontWeight: 800,
                                opacity: 1,
                                minWidth: '80px',
                                fontFamily: 'var(--font-heading)',
                                fontStretch: 'var(--font-heading-stretch)'
                            }}>
                                {step.number}
                            </div>
                            <div style={{ flex: 1, minWidth: '280px' }}>
                                <h4 style={{
                                    fontSize: '1.75rem',
                                    color: 'var(--color-highlight)', // Highlight
                                    marginBottom: '2rem',
                                    fontWeight: 600,
                                    fontFamily: 'var(--font-heading)'
                                }}>
                                    {step.title}
                                </h4>
                                <p style={{
                                    fontSize: '1.2rem',
                                    lineHeight: 1.6,
                                    color: 'rgba(255,255,255,0.8)',
                                    maxWidth: '600px'
                                }}>
                                    {step.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default MethodologySection;
