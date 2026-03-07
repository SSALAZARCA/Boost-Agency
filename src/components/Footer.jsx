import React from 'react';
import { motion } from 'framer-motion';
import { HashLink } from 'react-router-hash-link';
import { useSite } from '../context/SiteContext';

const Footer = () => {
    const { settings } = useSite();

    return (
        <footer style={{ backgroundColor: '#0E2841', color: 'var(--color-secondary)', padding: '5rem 2rem 2rem 2rem', textAlign: 'center' }}>

            <div style={{ maxWidth: '800px', margin: '0 auto 4rem auto' }}>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', marginBottom: '1.5rem', color: 'var(--color-secondary)' }}>
                    Ready to compete at a higher level?
                </h2>
                <p style={{ fontSize: '1.2rem', color: 'var(--color-accent)', marginBottom: '3rem' }}>
                    Let's talk strategy.
                </p>

                <HashLink
                    smooth
                    to="/#contact"
                    style={{
                        display: 'inline-block',
                        padding: '1rem 3rem',
                        fontSize: '1rem',
                        backgroundColor: 'var(--color-highlight)',
                        color: 'var(--color-dark)',
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
                        Contact Now
                    </motion.span>
                </HashLink>
            </div>

            <div style={{ borderTop: '1px solid rgba(241,238,230,0.15)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem', fontSize: '0.8rem', color: 'var(--color-accent)' }}>
                <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                    <span>© {new Date().getFullYear()} {settings.brandName}.</span>
                    <HashLink to="/privacy" style={{ color: 'var(--color-accent)', textDecoration: 'none' }} className="legal-link">Privacy</HashLink>
                    <HashLink to="/terms" style={{ color: 'var(--color-accent)', textDecoration: 'none' }} className="legal-link">Terms</HashLink>
                    <HashLink to="/cookies" style={{ color: 'var(--color-accent)', textDecoration: 'none' }} className="legal-link">Cookies</HashLink>
                </div>
                <div style={{ display: 'flex', gap: '2rem' }}>
                    <a href={settings.instagram} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        Instagram
                    </a>
                    <a
                        href={`https://wa.me/${settings.whatsapp.replace(/\D/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'var(--color-accent)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        WhatsApp
                    </a>
                    <a href={`mailto:${settings.email}`} style={{ color: 'var(--color-accent)', textDecoration: 'none' }}>Email</a>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
