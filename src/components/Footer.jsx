import React from 'react';
import { motion } from 'framer-motion';
import { HashLink } from 'react-router-hash-link';
import { useSite } from '../context/SiteContext';

const Footer = () => {
    const { settings } = useSite();

    return (
        <footer style={{ backgroundColor: 'var(--color-black)', color: 'var(--color-white)', padding: '5rem 2rem 2rem 2rem', textAlign: 'center' }}>

            <div style={{ maxWidth: '800px', margin: '0 auto 4rem auto' }}>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', marginBottom: '1.5rem', color: 'var(--color-white)' }}>
                    ¿Listos para competir a un nivel superior?
                </h2>
                <p style={{ fontSize: '1.2rem', color: '#aaa', marginBottom: '3rem' }}>
                    Hablemos de estrategia.
                </p>

                <HashLink
                    smooth
                    to="/#contacto"
                    style={{
                        display: 'inline-block',
                        padding: '1rem 3rem',
                        fontSize: '1rem',
                        backgroundColor: 'var(--color-white)',
                        color: 'var(--color-black)',
                        border: 'none',
                        borderRadius: '50px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        fontWeight: 700,
                        textDecoration: 'none'
                    }}
                >
                    <motion.span
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{ display: 'block' }}
                    >
                        Contactar Ahora
                    </motion.span>
                </HashLink>
            </div>

            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem', fontSize: '0.8rem', color: '#666' }}>
                <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                    <span>© {new Date().getFullYear()} {settings.brandName}.</span>
                    <HashLink to="/privacidad" style={{ color: '#666', textDecoration: 'none' }} className="legal-link">Privacidad</HashLink>
                    <HashLink to="/terminos" style={{ color: '#666', textDecoration: 'none' }} className="legal-link">Términos</HashLink>
                    <HashLink to="/cookies" style={{ color: '#666', textDecoration: 'none' }} className="legal-link">Cookies</HashLink>
                </div>
                <div style={{ display: 'flex', gap: '2rem' }}>
                    <a href={settings.instagram} target="_blank" rel="noopener noreferrer" style={{ color: '#666', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        Instagram
                    </a>
                    <a href={`mailto:${settings.email}`} style={{ color: '#666', textDecoration: 'none' }}>Email</a>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
