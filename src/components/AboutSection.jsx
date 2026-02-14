import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';
import MarketingDNA from './MarketingDNA';

const BlueprintVisual = () => {
    const pathVariants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: { duration: 2, ease: "easeInOut" }
        }
    };

    return (
        <div style={{
            width: '100%',
            height: '100%',
            background: '#0a192f',
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '12px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            {/* Grid Background */}
            <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
                backgroundSize: '30px 30px'
            }}></div>

            <svg width="300" height="300" viewBox="0 0 300 300" style={{ opacity: 0.8 }}>
                {/* Outer Square */}
                <motion.rect
                    x="50" y="50" width="200" height="200" rx="4"
                    fill="none" stroke="#64ffda" strokeWidth="2"
                    variants={pathVariants}
                    initial="hidden" whileInView="visible" viewport={{ once: true }}
                />
                {/* Inner Circle */}
                <motion.circle
                    cx="150" cy="150" r="60"
                    fill="none" stroke="#64ffda" strokeWidth="2"
                    variants={pathVariants}
                    initial="hidden" whileInView="visible" viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 2 }}
                />
                {/* Connecting Lines */}
                <motion.line
                    x1="150" y1="50" x2="150" y2="90"
                    stroke="#64ffda" strokeWidth="2"
                    variants={pathVariants}
                    initial="hidden" whileInView="visible" viewport={{ once: true }}
                    transition={{ delay: 1, duration: 1 }}
                />
                <motion.line
                    x1="150" y1="210" x2="150" y2="250"
                    stroke="#64ffda" strokeWidth="2"
                    variants={pathVariants}
                    initial="hidden" whileInView="visible" viewport={{ once: true }}
                    transition={{ delay: 1.2, duration: 1 }}
                />
                <motion.line
                    x1="50" y1="150" x2="90" y2="150"
                    stroke="#64ffda" strokeWidth="2"
                    variants={pathVariants}
                    initial="hidden" whileInView="visible" viewport={{ once: true }}
                    transition={{ delay: 1.4, duration: 1 }}
                />
                <motion.line
                    x1="210" y1="150" x2="250" y2="150"
                    stroke="#64ffda" strokeWidth="2"
                    variants={pathVariants}
                    initial="hidden" whileInView="visible" viewport={{ once: true }}
                    transition={{ delay: 1.6, duration: 1 }}
                />
            </svg>

            <div style={{
                position: 'absolute', bottom: '20px', right: '20px',
                fontFamily: 'monospace', color: '#64ffda', fontSize: '0.8rem', opacity: 0.7
            }}>
                ESTRUCTURA_V2.0
            </div>
        </div>
    );
};

const AboutSection = () => {
    return (
        <Section id="adn" bgColor="var(--color-secondary)" alignment="left">
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '4rem',
                alignItems: 'center',
                width: '100%'
            }}>

                {/* Left: Text Content */}
                <div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '2rem', fontFamily: 'var(--font-heading)' }}
                    >
                        ADN & <br /> Posicionamiento
                    </motion.h2>

                    <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                        BOOST AGENCY es una agencia estratégica que integra marketing y experiencias de marca para construir posicionamiento sólido.
                    </p>
                    <p style={{ fontSize: '1.1rem', marginBottom: '2rem', lineHeight: 1.6 }}>
                        Operamos con visión empresarial, dirección estratégica y alto estándar, desarrollando marcas coherentes, aspiracionales y competitivas.
                    </p>

                    <div style={{ borderLeft: '4px solid var(--color-primary)', paddingLeft: '1.5rem' }}>
                        <p style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-primary)' }}>
                            No ejecutamos acciones aisladas. Diseñamos arquitectura de negocio.
                        </p>
                    </div>
                </div>

                {/* Right: Visual Híbrido (Marketing DNA) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{
                        position: 'relative',
                        height: '500px',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.3)'
                    }}
                >
                    <MarketingDNA />
                </motion.div>

            </div>

            <div style={{ marginTop: '4rem', width: '100%' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'space-around', borderTop: '1px solid #ddd', paddingTop: '3rem' }}>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '3rem', color: 'var(--color-primary)', fontFamily: 'var(--font-heading)' }}>+10</div>
                        <div>Años de Experiencia</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '3rem', color: 'var(--color-primary)', fontFamily: 'var(--font-heading)' }}>Premium</div>
                        <div>Enfoque de Mercado</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '3rem', color: 'var(--color-primary)', fontFamily: 'var(--font-heading)' }}>360°</div>
                        <div>Visión Estratégica</div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default AboutSection;
