import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useSite } from '../context/SiteContext';
import CaseStudy from './CaseStudy';

const PortfolioSection = () => {
    const { projects } = useSite();

    return (
        <Section id="portafolio" bgColor="var(--color-black)" textColor="white">
            <div style={{ marginBottom: '5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
                <div style={{ maxWidth: '600px' }}>
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem', color: 'white' }}
                    >
                        Casos de <span style={{ color: '#ffbd69' }}>Éxito</span>.
                    </motion.h2>
                    <p style={{ fontSize: '1.2rem', color: '#8892b0' }}>Proyectos donde la estrategia y el branding transformaron negocios reales.</p>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem' }}>
                {projects.slice(0, 3).map((project, index) => (
                    <CaseStudy
                        key={project.id}
                        project={project}
                        delay={index * 0.2}
                    />
                ))}
            </div>

            <div style={{ marginTop: '5rem', textAlign: 'center' }}>
                <Link to="/proyectos" style={{ textDecoration: 'none' }}>
                    <motion.button
                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(100,255,218,0.1)' }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            padding: '1.2rem 3.5rem',
                            fontSize: '1rem',
                            background: 'transparent',
                            color: '#64ffda',
                            border: '1px solid #64ffda',
                            borderRadius: '50px',
                            cursor: 'pointer',
                            fontWeight: 'bold',
                            letterSpacing: '1px',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        Ver Portafolio Completo →
                    </motion.button>
                </Link>
            </div>
        </Section>
    );
};

export default PortfolioSection;
