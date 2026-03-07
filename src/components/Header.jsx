import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { NavHashLink as HashLink } from 'react-router-hash-link';
import { useSite } from '../context/SiteContext';
import '../styles/variables.css';

const Header = () => {
    const { settings } = useSite();
    const [hidden, setHidden] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const headerStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 'var(--header-height)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 5%',
        backgroundColor: 'rgba(14, 40, 65, 0.97)',
        backdropFilter: 'blur(10px)',
        zIndex: 1000,
        borderBottom: '1px solid rgba(253,253,136,0.15)',
    };

    const menuOverlayStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'var(--color-black)',
        zIndex: 999,
        display: 'flex',
        flexDirection: 'column',
        padding: '120px 8% 40px 8%', // Suficiente espacio arriba para no tapar el primer ítem
        overflowY: 'auto' // Permitir scroll si el contenido es mucho
    };

    const navItems = [
        { label: 'Philosophy', id: 'philosophy' },
        { label: 'Capabilities', id: 'capabilities' },
        { label: 'Portfolio', id: 'portfolio' },
        { label: 'Strategic Framework', id: 'framework' },
        { label: 'Beyond Marketing', id: 'beyond-marketing' },
        { label: 'DNA', id: 'dna' },
        { label: 'Why Boost', id: 'why-boost' },
        { label: 'Contact', id: 'contact' }
    ];

    return (
        <>
            <motion.header
                style={headerStyle}
                variants={{
                    visible: { y: 0 },
                    hidden: { y: '-100%' },
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.35, ease: "easeInOut" }}
            >
                <HashLink
                    to="/#top"
                    smooth
                    style={{ textDecoration: 'none' }}
                >
                    <img
                        src="/logo-boost-agency.svg"
                        alt="Boost Agency Logo"
                        style={{
                            width: '96px',
                            height: '60px',
                            display: 'block',
                            objectFit: 'contain'
                        }}
                    />
                </HashLink>

                <button
                    onClick={toggleMenu}
                    style={{
                        zIndex: 1001,
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '1rem',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '6px'
                    }}
                >
                    <motion.div
                        animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }}
                        style={{ width: '32px', height: '2px', background: 'var(--color-secondary)' }}
                    />
                    <motion.div
                        animate={{ opacity: menuOpen ? 0 : 1 }}
                        style={{ width: '32px', height: '2px', background: 'var(--color-secondary)' }}
                    />
                    <motion.div
                        animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }}
                        style={{ width: '32px', height: '2px', background: 'var(--color-secondary)' }}
                    />
                </button>
            </motion.header>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        style={menuOverlayStyle}
                        initial={{ opacity: 0, x: '20%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '20%' }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                <div style={{ fontSize: '0.65rem', color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '0.5rem', opacity: 0.7 }}>Menu</div>
                                {navItems.map((item, index) => (
                                    <motion.div
                                        key={item.id}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.04 }}
                                    >
                                        <HashLink
                                            smooth
                                            to={`/#${item.id}`}
                                            onClick={() => setMenuOpen(false)}
                                            style={{
                                                fontFamily: 'var(--font-heading)',
                                                fontSize: '1.6rem', // Reducido para mejor legibilidad
                                                color: 'var(--color-secondary)',
                                                textDecoration: 'none',
                                                display: 'block',
                                                padding: '1.2rem 1.5rem',
                                                border: '1px solid rgba(255,255,255,0.08)',
                                                borderRadius: '12px', // Forma de botón redondeada sutil
                                                backgroundColor: 'rgba(255,255,255,0.03)',
                                                transition: 'all 0.3s ease'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.target.style.backgroundColor = 'rgba(255,255,255,0.08)';
                                                e.target.style.borderColor = 'var(--color-highlight)';
                                                e.target.style.color = 'var(--color-highlight)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.target.style.backgroundColor = 'rgba(255,255,255,0.03)';
                                                e.target.style.borderColor = 'rgba(255,255,255,0.08)';
                                                e.target.style.color = 'var(--color-secondary)';
                                            }}
                                        >
                                            {item.label}
                                        </HashLink>
                                    </motion.div>
                                ))}
                            </nav>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', paddingBottom: '2rem' }}
                            >
                                <div>
                                    <div style={{ fontSize: '0.65rem', color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.5rem' }}>Let's talk</div>
                                    <a href={`mailto:${settings.email}`} style={{ color: 'var(--color-secondary)', textDecoration: 'none', fontSize: '1rem', opacity: 0.9 }}>{settings.email}</a>
                                </div>
                                <div style={{ display: 'flex', gap: '1.5rem' }}>
                                    <a href={settings.instagram} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)', textDecoration: 'none', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Instagram</a>
                                    <a href={settings.whatsapp} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)', textDecoration: 'none', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>WhatsApp</a>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
