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
        backgroundColor: '#2E3192',
        zIndex: 999,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const navItems = [
        { label: 'ADN', id: 'adn' },
        { label: 'Servicios', id: 'servicios' },
        { label: 'Portafolio', id: 'portafolio' },
        { label: 'Público', id: 'publico' },
        { label: 'Metodología', id: 'metodologia' },
        { label: 'Contacto', id: 'contacto' }
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
                    {/* Logo circular Boost Agency */}
                    <svg
                        width="58"
                        height="58"
                        viewBox="0 0 100 100"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ display: 'block' }}
                    >
                        {/* Sombra sutil */}
                        <circle cx="50" cy="52" r="44" fill="rgba(14,40,65,0.12)" />
                        {/* Círculo beige */}
                        <circle cx="50" cy="50" r="44" fill="#F1EEE6" />
                        {/* "Boost" - serif bold */}
                        <text
                            x="50"
                            y="43"
                            fontFamily="'Noto Serif Display', Georgia, serif"
                            fontSize="26"
                            fontWeight="700"
                            fontStyle="normal"
                            fill="#2E3192"
                            textAnchor="middle"
                            dominantBaseline="middle"
                        >Boost</text>
                        {/* "Agency" - serif italic */}
                        <text
                            x="50"
                            y="65"
                            fontFamily="'Noto Serif Display', Georgia, serif"
                            fontSize="24"
                            fontWeight="400"
                            fontStyle="italic"
                            fill="#2E3192"
                            textAnchor="middle"
                            dominantBaseline="middle"
                        >Agency</text>
                    </svg>
                </HashLink>

                <button
                    onClick={toggleMenu}
                    style={{
                        zIndex: 1001,
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '1rem'
                    }}
                >
                    <div style={{ width: '30px', height: '2px', background: menuOpen ? 'white' : '#F1EEE6', marginBottom: '5px', transition: '0.3s' }}></div>
                    <div style={{ width: '30px', height: '2px', background: menuOpen ? 'white' : '#F1EEE6', marginBottom: '5px', opacity: menuOpen ? 0 : 1, transition: '0.3s' }}></div>
                    <div style={{ width: '30px', height: '2px', background: menuOpen ? 'white' : '#F1EEE6', transition: '0.3s' }}></div>
                </button>
            </motion.header>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        style={menuOverlayStyle}
                        initial={{ opacity: 0, clipPath: 'circle(0% at 100% 0)' }}
                        animate={{ opacity: 1, clipPath: 'circle(150% at 100% 0)' }}
                        exit={{ opacity: 0, clipPath: 'circle(0% at 100% 0)' }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        <nav style={{ display: 'flex', flexDirection: 'column', gap: '2rem', textAlign: 'center' }}>
                            {navItems.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + index * 0.1 }}
                                >
                                    <HashLink
                                        smooth
                                        to={`/#${item.id}`}
                                        onClick={() => setMenuOpen(false)}
                                        style={{
                                            fontFamily: 'var(--font-heading)',
                                            fontSize: '3rem',
                                            color: 'var(--color-secondary)',
                                            textDecoration: 'none',
                                            position: 'relative',
                                            overflow: 'hidden'
                                        }}
                                        whileHover={{ scale: 1.05, color: 'var(--color-highlight)' }}
                                    >
                                        {item.label}
                                    </HashLink>
                                </motion.div>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
