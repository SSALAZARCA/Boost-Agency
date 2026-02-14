import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    const containerStyle = {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '0 1rem',
        position: 'relative',
        overflow: 'hidden',
        // Premium Photo Background with Overlay
        backgroundImage: `linear-gradient(rgba(10,25,47,0.7), rgba(10,25,47,0.6)), url("https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', // Parallax like effect
        color: 'var(--color-white)'
    };

    // Overlay texture for noise/grain
    const noiseStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: 0.05,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        pointerEvents: 'none',
        zIndex: 1
    };

    const titleStyle = {
        fontSize: 'clamp(3rem, 12vw, 9rem)',
        fontFamily: 'var(--font-heading)',
        color: 'var(--color-highlight)', // Gold/Yellow ish
        lineHeight: 0.9,
        marginBottom: '1.5rem',
        letterSpacing: '-0.04em',
        zIndex: 10,
        textShadow: '0 10px 30px rgba(0,0,0,0.3)'
    };

    const subtitleStyle = {
        fontSize: 'clamp(1rem, 2vw, 1.25rem)',
        fontFamily: 'var(--font-body)',
        color: '#b0bec5', // Lighter blue gray
        maxWidth: '600px',
        margin: '0 auto',
        fontWeight: 400,
        zIndex: 10,
        letterSpacing: '0.02em'
    };

    const circleStyle = {
        position: 'absolute',
        borderRadius: '50%',
        filter: 'blur(80px)',
        zIndex: 0,
    };

    const titleVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
        }
    };

    return (
        <section style={containerStyle}>
            <div style={noiseStyle}></div>

            {/* Animated Orbs */}
            <motion.div
                style={{ ...circleStyle, width: '60vw', height: '60vw', background: 'radial-gradient(circle, rgba(29, 53, 87, 0.8) 0%, rgba(29, 53, 87, 0) 70%)', top: '-20%', right: '-20%', y: y1 }}
                animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />

            <motion.div
                style={{ ...circleStyle, width: '40vw', height: '40vw', background: 'radial-gradient(circle, rgba(255, 249, 196, 0.15) 0%, rgba(255, 249, 196, 0) 70%)', bottom: '-10%', left: '-10%', y: y2 }}
                animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />

            <motion.div style={{ position: 'relative', zIndex: 10, style: { opacity } }}>
                <motion.h1 style={titleStyle} initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
                    <span style={{ display: 'block' }}>
                        {"Boost".split('').map((char, index) => (
                            <motion.span key={index} variants={titleVariants} style={{ display: 'inline-block' }}>{char}</motion.span>
                        ))}
                    </span>
                    <span style={{ display: 'block', marginLeft: '5vw' }}>
                        {"Agency".split('').map((char, index) => (
                            <motion.span key={index} variants={titleVariants} style={{ display: 'inline-block' }}>{char}</motion.span>
                        ))}
                    </span>
                </motion.h1>

                <motion.p
                    style={subtitleStyle}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 1 }}
                >
                    Estrategia, concepto e impacto. Diseñamos posicionamiento para marcas que compiten a un nivel superior.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    style={{ marginTop: '3rem' }}
                >
                    <motion.a
                        href="#contacto"
                        whileHover={{ scale: 1.05, backgroundColor: 'var(--color-primary)', color: 'white' }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            padding: '1.2rem 3.5rem',
                            fontSize: '1.1rem',
                            background: 'var(--color-highlight)',
                            color: 'var(--color-black)',
                            border: 'none',
                            borderRadius: '50px',
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            fontWeight: 'bold',
                            textDecoration: 'none',
                            display: 'inline-block',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                        }}
                    >
                        Contactar Ahora
                    </motion.a>
                </motion.div>
            </motion.div>

            <motion.div
                style={{ position: 'absolute', bottom: '2rem', left: '50%', x: '-50%', zIndex: 10 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 2.5, duration: 2, repeat: Infinity }}
            >
                <span style={{ fontSize: '1.5rem', color: 'rgba(255,255,255,0.5)' }}>Scroll</span>
            </motion.div>

        </section>
    );
};

export default Hero;
