import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { NavHashLink as HashLink } from 'react-router-hash-link';
import { useSite } from '../context/SiteContext';
import Footer from '../components/Footer';

const CaseStudyDetail = () => {
    const { id } = useParams();
    const { projects } = useSite();
    const project = projects.find(p => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) return <div style={{ color: 'white', padding: '10rem', textAlign: 'center' }}>Proyecto no encontrado</div>;

    return (
        <div style={{ background: 'var(--color-black)', color: 'white', minHeight: '100vh' }}>
            {/* Header / Nav Back */}
            <nav style={{ padding: '2rem 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" style={{ color: '#ffbd69', textDecoration: 'none', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
                    Volver
                </Link>
                <div style={{ color: '#666', fontSize: '0.8rem', letterSpacing: '2px' }}>BOOST CASE STUDY</div>
            </nav>

            {/* Hero Section */}
            <header style={{ position: 'relative', height: '70vh', overflow: 'hidden' }}>
                <motion.img
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                    src={project.imageUrl}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }}
                    alt={project.title}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent, var(--color-black))' }}></div>
                <div style={{ position: 'absolute', bottom: '10%', left: '5%', right: '5%' }}>
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                        <span style={{ color: '#64ffda', textTransform: 'uppercase', letterSpacing: '4px', fontSize: '0.9rem' }}>{project.category}</span>
                        <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', fontFamily: 'var(--font-heading)', margin: '1rem 0', color: 'white' }}>{project.title}</h1>
                    </motion.div>
                </div>
            </header>

            {/* Content Section */}
            <div style={{ padding: '8rem 5%', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '6rem' }}>

                {/* Left Column: Info */}
                <div>
                    <h2 style={{ color: '#ffbd69', fontSize: '2rem', marginBottom: '2rem' }}>La Estrategia</h2>
                    <p style={{ fontSize: '1.2rem', lineHeight: 1.8, color: '#ccc', marginBottom: '3rem' }}>
                        {project.description}
                    </p>

                    <div style={{ marginBottom: '3rem' }}>
                        <h3 style={{ color: 'white', marginBottom: '1rem' }}>El Desafío</h3>
                        <p style={{ color: '#8892b0', lineHeight: 1.6 }}>{project.challenge}</p>
                    </div>

                    <div>
                        <h3 style={{ color: 'white', marginBottom: '1rem' }}>Nuestra Solución</h3>
                        <p style={{ color: '#8892b0', lineHeight: 1.6 }}>{project.solution}</p>
                    </div>
                </div>

                {/* Right Column: Results Card */}
                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '4rem', borderRadius: '32px', border: '1px solid rgba(255,255,255,0.05)', height: 'fit-content' }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <div style={{ fontSize: '4rem', fontWeight: 'bold', color: '#64ffda' }}>{project.metric}</div>
                        <div style={{ color: '#8892b0', textTransform: 'uppercase', letterSpacing: '2px' }}>{project.metricLabel}</div>
                    </div>

                    <h3 style={{ color: '#ffbd69', marginBottom: '2rem', textAlign: 'center' }}>Resultados Clave</h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {project.results.map((result, index) => (
                            <li key={index} style={{ marginBottom: '1.5rem', display: 'flex', gap: '1rem', color: '#ccc' }}>
                                <span style={{ color: '#64ffda' }}>—</span> {result}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* CTA Section */}
            <div style={{ padding: '10rem 5%', textAlign: 'center', background: 'rgba(100,255,218,0.03)' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>¿Quieres resultados similares para tu marca?</h2>
                <HashLink
                    smooth
                    to="/#contacto"
                    style={{
                        display: 'inline-block',
                        padding: '1.2rem 3.5rem',
                        background: '#64ffda',
                        color: '#0a192f',
                        borderRadius: '50px',
                        fontWeight: 'bold',
                        textDecoration: 'none'
                    }}
                >
                    Iniciar Consulta Estratégica
                </HashLink>
            </div>

            <Footer />
        </div>
    );
};

export default CaseStudyDetail;
