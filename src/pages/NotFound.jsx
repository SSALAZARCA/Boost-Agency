import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
    return (
        <div style={{
            height: '100vh',
            background: 'var(--color-black)',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: '2rem'
        }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 style={{
                    fontSize: 'clamp(5rem, 15vw, 10rem)',
                    fontFamily: 'var(--font-heading)',
                    margin: 0,
                    color: '#ffbd69',
                    lineHeight: 1
                }}>404</h1>
                <div style={{ height: '2px', width: '100px', background: '#64ffda', margin: '2rem auto' }}></div>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', letterSpacing: '2px', textTransform: 'uppercase' }}>Ruta de Estrategia Perdida</h2>
                <p style={{ color: '#8892b0', maxWidth: '500px', marginBottom: '3rem', lineHeight: 1.6 }}>
                    La página que buscas no existe o ha sido movida a un nivel superior.
                    Regresa al punto de control para retomar el camino.
                </p>
                <Link to="/" style={{
                    padding: '1.2rem 3rem',
                    background: '#64ffda',
                    color: '#0a192f',
                    textDecoration: 'none',
                    borderRadius: '50px',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                }}>
                    Volver al Inicio
                </Link>
            </motion.div>
        </div>
    );
};

export default NotFound;
