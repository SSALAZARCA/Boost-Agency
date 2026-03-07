import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavHashLink as HashLink } from 'react-router-hash-link';

const slides = [
    { src: '/slider/slide1.webp' },
    { src: '/slider/slide2.webp' },
];

const Hero = () => {
    const [current, setCurrent] = useState(0);

    // Auto-advance every 5s
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent(prev => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const goTo = (index) => setCurrent(index);

    const titleVariants = {
        hidden: { opacity: 0, y: 60 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
        }
    };

    return (
        <section
            id="top"
            style={{
                height: '100vh',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
            }}
        >
            {/* === SLIDER BACKGROUND === */}
            <AnimatePresence>
                <motion.div
                    key={current}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.2, ease: 'easeInOut' }}
                    style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: `url("${slides[current].src}")`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        zIndex: 0,
                    }}
                />
            </AnimatePresence>

            {/* Dark overlay so text is readable */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to bottom, rgba(14,40,65,0.75) 0%, rgba(46,49,146,0.45) 60%, rgba(14,40,65,0.82) 100%)',
                zIndex: 1,
            }} />

            {/* === CONTENT === */}
            <div style={{ position: 'relative', zIndex: 10, padding: '0 1rem' }}>
                <motion.h1
                    initial="hidden"
                    animate="visible"
                    variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
                    style={{
                        fontSize: 'clamp(3.5rem, 16vw, 9.5rem)', // Slightly larger min for better impact
                        fontFamily: 'var(--font-heading)',
                        color: 'var(--color-highlight)',
                        lineHeight: 0.85,
                        marginBottom: '0',
                        letterSpacing: '-0.04em',
                        textShadow: '0 10px 40px rgba(0,0,0,0.5)',
                        fontWeight: 700,
                        maxWidth: '100vw',
                        overflow: 'hidden'
                    }}
                >
                    <span style={{ display: 'block' }}>
                        {'Boost'.split('').map((char, i) => (
                            <motion.span
                                key={i}
                                variants={titleVariants}
                                style={{
                                    display: 'inline-block',
                                    marginRight: (i <= 2) ? '-0.045em' : '0',
                                    fontWeight: 400
                                }}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </span>
                    <span style={{
                        display: 'block',
                        marginLeft: '3vw',
                        fontStyle: 'italic',
                        fontWeight: 400,
                        marginTop: '-0.1em'
                    }}>
                        {'Agency'.split('').map((char, i) => (
                            <motion.span key={i} variants={titleVariants} style={{ display: 'inline-block', marginRight: i === 0 ? '5px' : '0' }}>{char}</motion.span>
                        ))}
                    </span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 1 }}
                    style={{
                        maxWidth: '700px',
                        margin: '0 auto',
                        textAlign: 'center',
                        zIndex: 2,
                        marginTop: 'clamp(2rem, 5vh, 4rem)'
                    }}
                >
                    <h2
                        style={{
                            fontSize: 'clamp(1rem, 2vw, 1.5rem)',
                            fontFamily: 'var(--font-heading)',
                            color: 'white',
                            fontWeight: 700,
                            marginBottom: '0.5rem',
                            letterSpacing: '-0.01em',
                            textShadow: '0 2px 10px rgba(0,0,0,0.5)',
                        }}
                    >
                        We build brands that compete at a higher level.
                    </h2>
                    <p
                        style={{
                            fontSize: 'clamp(0.8rem, 1vw, 1rem)',
                            fontFamily: 'var(--font-body)',
                            color: '#e0e8f0',
                            fontWeight: 400,
                            letterSpacing: '0.01em',
                            textShadow: '0 2px 10px rgba(0,0,0,0.4)',
                            lineHeight: 1.5,
                            margin: '0 auto 2rem auto',
                            maxWidth: '600px'
                        }}
                    >
                        Strategic branding and brand experience agency integrating positioning, marketing and execution under one unified direction.
                    </p>

                    <HashLink
                        smooth
                        to="/#contact"
                        style={{
                            padding: '0.8rem 2rem',
                            fontSize: '0.85rem',
                            background: 'var(--color-highlight)',
                            color: 'var(--color-black)',
                            borderRadius: '50px',
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            fontWeight: 'bold',
                            textDecoration: 'none',
                            display: 'inline-block',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.35)',
                            transition: 'all 0.3s ease',
                        }}
                    >
                        Start a Project
                    </HashLink>
                </motion.div>
            </div>

            {/* === DOT NAVIGATION === */}
            <div style={{
                position: 'absolute',
                bottom: '3.5rem',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: '0.8rem',
                zIndex: 10,
            }}>
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goTo(i)}
                        style={{
                            width: i === current ? '2rem' : '0.6rem',
                            height: '0.6rem',
                            borderRadius: '50px',
                            background: i === current ? 'var(--color-highlight)' : 'rgba(255,255,255,0.4)',
                            border: 'none',
                            cursor: 'pointer',
                            padding: 0,
                            transition: 'all 0.4s ease',
                        }}
                    />
                ))}
            </div>

            {/* Scroll hint */}
            <motion.div
                style={{ position: 'absolute', bottom: '1rem', left: '50%', transform: 'translateX(-50%)', zIndex: 10 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 8, 0] }}
                transition={{ delay: 2.5, duration: 2, repeat: Infinity }}
            >
                <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '2px', textTransform: 'uppercase' }}>Scroll</span>
            </motion.div>
        </section>
    );
};

export default Hero;
