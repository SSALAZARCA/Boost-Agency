import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';

const NetworkVisual = () => {
    const nodes = [
        { cx: 50, cy: 50, delay: 0 },
        { cx: 250, cy: 80, delay: 0.2 },
        { cx: 100, cy: 250, delay: 0.4 },
        { cx: 200, cy: 200, delay: 0.6 },
        { cx: 150, cy: 150, delay: 0.8 } // Center
    ];

    return (
        <div style={{
            width: '100%', height: '100%', background: '#112240', borderRadius: '20px',
            position: 'relative', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center'
        }}>
            {/* Background Glow */}
            <div style={{
                position: 'absolute', width: '200px', height: '200px', background: 'var(--color-highlight)',
                borderRadius: '50%', filter: 'blur(80px)', opacity: 0.1
            }}></div>

            <svg width="300" height="300" viewBox="0 0 300 300" style={{ zIndex: 2 }}>
                {/* Connections to Center */}
                <motion.line x1="50" y1="50" x2="150" y2="150" stroke="rgba(255,255,255,0.2)" strokeWidth="1" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.5 }} />
                <motion.line x1="250" y1="80" x2="150" y2="150" stroke="rgba(255,255,255,0.2)" strokeWidth="1" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.7 }} />
                <motion.line x1="100" y1="250" x2="150" y2="150" stroke="rgba(255,255,255,0.2)" strokeWidth="1" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.9 }} />
                <motion.line x1="200" y1="200" x2="150" y2="150" stroke="rgba(255,255,255,0.2)" strokeWidth="1" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 1.1 }} />

                {/* Nodes */}
                {nodes.map((node, i) => (
                    <motion.circle
                        key={i}
                        cx={node.cx} cy={node.cy} r="6"
                        fill="var(--color-highlight)"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: node.delay, type: "spring" }}
                    />
                ))}

                {/* Center Pulse */}
                <motion.circle
                    cx="150" cy="150" r="15"
                    stroke="var(--color-highlight)" strokeWidth="2" fill="none"
                    initial={{ scale: 0.5, opacity: 1 }}
                    animate={{ scale: 1.5, opacity: 0 }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
            </svg>

            <div style={{ position: 'absolute', bottom: 20, left: 0, right: 0, textAlign: 'center', color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', letterSpacing: '2px' }}>
                NETWORK_ACTIVE
            </div>
        </div>
    );
};

const AudienceSection = () => {
    const profiles = [
        { label: "Clínicas Estéticas", icon: "✦" },
        { label: "Restaurantes", icon: "✦" },
        { label: "Hoteles Boutique", icon: "✦" },
        { label: "Beauty & Lifestyle", icon: "✦" },
        { label: "Real Estate", icon: "✦" },
        { label: "Marcas de Lujo", icon: "✦" }
    ];

    return (
        <Section id="publico" bgColor="var(--color-primary)" textColor="var(--color-white)">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', width: '100%', alignItems: 'center' }}>

                {/* Left: Text */}
                <div>
                    <motion.p
                        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                        style={{ color: 'var(--color-highlight)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}
                    >
                        Público Objetivo
                    </motion.p>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'white', marginBottom: '2rem', fontFamily: 'var(--font-heading)' }}>
                        Para quienes compiten en la cima.
                    </h2>
                    <p style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '3rem', lineHeight: 1.6 }}>
                        Trabajamos con marcas aspiracionales que entienden el valor del posicionamiento y buscan un crecimiento estructurado y sostenible.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                        {profiles.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem', color: 'white' }}
                            >
                                <span style={{ color: 'var(--color-highlight)', marginRight: '1rem' }}>{item.icon}</span>
                                {item.label}
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Right: Visual Realista (Lifestyle Luxury) */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{ position: 'relative', height: '600px', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.3)' }}
                >
                    <img
                        src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop"
                        alt="Arquitectura Moderna y Lujo"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,25,47,0.2)' }}></div>
                    <motion.div
                        style={{
                            position: 'absolute', bottom: '2rem', left: '2rem',
                            background: 'rgba(255,255,255,0.9)', padding: '1rem 2rem', borderRadius: '4px',
                            color: 'var(--color-black)', fontWeight: 'bold', fontFamily: 'var(--font-heading)'
                        }}
                        whileHover={{ scale: 1.05 }}
                    >
                        EXCLUSIVIDAD
                    </motion.div>
                </motion.div>

            </div>
        </Section>
    );
};

export default AudienceSection;
