import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { NavHashLink as HashLink } from 'react-router-hash-link';
import { useSite } from '../context/SiteContext';
import CaseStudy from '../components/CaseStudy';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ProjectsPage = () => {
    const { projects } = useSite();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ background: 'var(--color-black)', minHeight: '100vh' }}>
            <Header />

            <main style={{ padding: '10rem 5% 5rem 5%' }}>
                <header style={{ marginBottom: '5rem', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '3rem' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span style={{ color: '#64ffda', textTransform: 'uppercase', letterSpacing: '4px', fontSize: '0.9rem' }}>Nuestra Trayectoria</span>
                        <h1 style={{
                            fontSize: 'clamp(3rem, 8vw, 5rem)',
                            fontFamily: 'var(--font-heading)',
                            color: 'white',
                            marginTop: '1rem',
                            marginBottom: '1.5rem'
                        }}>
                            Portafolio de <span style={{ color: '#ffbd69' }}>Impacto</span>
                        </h1>
                        <p style={{ color: '#8892b0', fontSize: '1.2rem', maxWidth: '700px', lineHeight: 1.6 }}>
                            Explora nuestra colección completa de casos de estudio. Estrategias diseñadas para marcas que no solo quieren estar, sino dominar su mercado.
                        </p>
                    </motion.div>
                </header>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
                    {projects.map((project, index) => (
                        <CaseStudy
                            key={project.id}
                            project={project}
                            delay={index * 0.1}
                        />
                    ))}
                </div>

                {/* Call to Action */}
                <section style={{ marginTop: '10rem', textAlign: 'center', padding: '5rem', background: 'rgba(255,189,105,0.03)', borderRadius: '32px' }}>
                    <h2 style={{ fontSize: '2.5rem', color: 'white', marginBottom: '1.5rem' }}>¿Tu marca es la siguiente?</h2>
                    <p style={{ color: '#8892b0', marginBottom: '3rem', fontSize: '1.1rem' }}>Diseñemos el camino hacia tu próximo nivel de éxito.</p>
                    <HashLink
                        smooth
                        to="/#contacto"
                        style={{
                            display: 'inline-block',
                            padding: '1.2rem 4rem',
                            background: '#64ffda',
                            color: '#0a192f',
                            borderRadius: '50px',
                            fontWeight: 'bold',
                            textDecoration: 'none',
                            textTransform: 'uppercase',
                            letterSpacing: '1px'
                        }}
                    >
                        Iniciar Proyecto
                    </HashLink>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default ProjectsPage;
