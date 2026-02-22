import React from 'react';
import { motion } from 'framer-motion';
import { useSite } from '../context/SiteContext';

const MisionVisionSection = () => {
    const { settings } = useSite();

    const cards = [
        {
            id: 'mision',
            icon: (
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                </svg>
            ),
            label: 'Misión',
            text: settings.mision || 'Impulsar el crecimiento de marcas con estrategia digital y experiencias memorables.',
            accent: '#2E3192',
            bg: '#F1EEE6',
            textColor: '#0E2841',
        },
        {
            id: 'vision',
            icon: (
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                </svg>
            ),
            label: 'Visión',
            text: settings.vision || 'Ser la agencia de referencia en Latinoamérica para marcas que compiten a un nivel superior.',
            accent: '#F1EEE6',
            bg: '#0E2841',
            textColor: '#F1EEE6',
        },
    ];

    return (
        <section
            id="mision-vision"
            style={{
                padding: '6rem 5%',
                backgroundColor: '#2E3192',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            {/* Encabezado de sección */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{ textAlign: 'center', marginBottom: '4rem' }}
            >
                <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.85rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: '#FDFD88',
                    marginBottom: '0.75rem',
                    fontWeight: 600,
                }}>
                    Nuestra Razón de Ser
                </p>
                <h2 style={{
                    fontFamily: 'var(--font-heading)',
                    fontStretch: 'extra-condensed',
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    color: '#F1EEE6',
                    margin: 0,
                    lineHeight: 1.1,
                }}>
                    Propósito y Dirección
                </h2>
            </motion.div>

            {/* Tarjetas */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '2rem',
                maxWidth: '1100px',
                width: '100%',
            }}>
                {cards.map((card, index) => (
                    <motion.div
                        key={card.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: index * 0.2 }}
                        whileHover={{ y: -6, transition: { duration: 0.3 } }}
                        style={{
                            backgroundColor: card.bg,
                            borderRadius: '16px',
                            padding: '3rem',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1.5rem',
                            boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
                            cursor: 'default',
                        }}
                    >
                        {/* Ícono */}
                        <div style={{
                            color: card.accent !== card.bg ? card.accent : '#FDFD88',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                        }}>
                            <div style={{
                                backgroundColor: card.id === 'vision' ? 'rgba(241,238,230,0.12)' : 'rgba(46,49,146,0.08)',
                                borderRadius: '12px',
                                padding: '0.75rem',
                                color: card.id === 'vision' ? '#FDFD88' : '#2E3192',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                {card.icon}
                            </div>

                            {/* Línea decorativa */}
                            <div style={{
                                height: '2px',
                                flex: 1,
                                background: card.id === 'vision'
                                    ? 'linear-gradient(to right, rgba(253,253,136,0.6), transparent)'
                                    : 'linear-gradient(to right, rgba(46,49,146,0.4), transparent)',
                                borderRadius: '2px',
                            }} />
                        </div>

                        {/* Etiqueta */}
                        <p style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: '0.75rem',
                            letterSpacing: '0.2em',
                            textTransform: 'uppercase',
                            fontWeight: 700,
                            color: card.id === 'vision' ? '#FDFD88' : '#687898',
                            margin: 0,
                        }}>
                            {card.label}
                        </p>

                        {/* Texto principal */}
                        <p style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: '1.15rem',
                            lineHeight: 1.75,
                            color: card.textColor,
                            margin: 0,
                            fontWeight: card.id === 'vision' ? 400 : 400,
                        }}>
                            {card.text}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default MisionVisionSection;
