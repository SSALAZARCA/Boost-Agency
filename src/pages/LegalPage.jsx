import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

const LegalPage = ({ title, lastUpdated, children }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const pageStyle = {
        background: 'var(--color-black)',
        color: 'white',
        minHeight: '100vh',
    };

    const containerStyle = {
        maxWidth: '900px',
        margin: '0 auto',
        padding: '10rem 5%',
    };

    const textStyle = {
        color: '#ccc',
        lineHeight: 1.8,
        fontSize: '1.1rem',
    };

    return (
        <div style={pageStyle}>
            {/* Header / Nav Back */}
            <nav style={{
                padding: '2rem 5%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                background: 'rgba(10, 25, 47, 0.9)',
                backdropFilter: 'blur(10px)',
                zIndex: 100
            }}>
                <Link to="/" style={{ color: '#ffbd69', textDecoration: 'none', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
                    Volver al Inicio
                </Link>
                <div style={{ color: '#666', fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase' }}>Boost Legal</div>
            </nav>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={containerStyle}
            >
                <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontFamily: 'var(--font-heading)', marginBottom: '1rem', color: 'white' }}>{title}</h1>
                <p style={{ color: '#64ffda', marginBottom: '4rem', fontSize: '0.9rem', letterSpacing: '1px' }}>ÚLTIMA ACTUALIZACIÓN: {lastUpdated}</p>

                <div style={textStyle}>
                    {children}
                </div>
            </motion.div>

            <Footer />
        </div>
    );
};

export default LegalPage;
