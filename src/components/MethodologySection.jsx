import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';

const MethodologySection = () => {
    const steps = [
        { title: "Diagnóstico Estratégico", desc: "Analizamos el estado actual de la marca, mercado, competencia y posicionamiento." },
        { title: "Definición de Dirección", desc: "Establecemos objetivos claros, tono, narrativa y enfoque comercial." },
        { title: "Plan de Acción", desc: "Diseñamos el roadmap de marketing o experiencia de marca con métricas definidas." },
        { title: "Ejecución Estratégica", desc: "Implementamos cada acción bajo estándares de calidad y coherencia visual." },
        { title: "Optimización y Escalamiento", desc: "Medimos, ajustamos y evolucionamos la estrategia para mantener crecimiento sostenible." }
    ];

    const philosophyItems = [
        "Estrategia antes que ejecución",
        "Coherencia antes que tendencia",
        "Posicionamiento antes que volumen",
        "Calidad antes que cantidad"
    ];

    return (
        <Section id="metodologia" title="Metodología Boost" bgColor="var(--color-secondary)" alignment="left">

            {/* Methodology Steps */}
            <div style={{ display: 'grid', gap: '2rem', marginBottom: '5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                {steps.map((step, index) => (
                    <div key={index} style={{ borderLeft: '2px solid var(--color-primary)', paddingLeft: '1.5rem' }}>
                        <h4 style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: '1.25rem',
                            color: 'var(--color-primary)',
                            marginBottom: '0.5rem'
                        }}>
                            {index + 1}. {step.title}
                        </h4>
                        <p style={{ fontSize: '1rem', color: '#444' }}>{step.desc}</p>
                    </div>
                ))}
            </div>

            {/* Philosophy */}
            <div style={{ backgroundColor: 'var(--color-primary)', color: 'white', padding: '3rem', borderRadius: '4px', textAlign: 'center' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '2rem', color: 'var(--color-highlight)' }}>
                    Filosofía Boost
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
                    {philosophyItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            style={{ fontWeight: 600, fontSize: '1.1rem' }}
                        >
                            {item}
                        </motion.div>
                    ))}
                </div>

                <p style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)', fontStyle: 'italic', borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '2rem', display: 'inline-block' }}>
                    "Las marcas fuertes no nacen del ruido. Nacen de la dirección."
                </p>
            </div>

        </Section>
    );
};

export default MethodologySection;
