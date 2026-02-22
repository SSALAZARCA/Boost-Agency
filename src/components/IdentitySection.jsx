import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';

const IdentitySection = () => {
    const traits = ["Sofisticada", "Estratégica", "Visionaria", "Ambiciosa", "Selectiva", "Moderna", "Orientada a resultados"];

    return (
        <Section id="identidad" title="Personalidad de Marca" bgColor="#f9f9f9" alignment="center">

            {/* Archetypes */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '4rem', flexWrap: 'wrap', marginBottom: '4rem' }}>
                <div style={{ textAlign: 'center' }}>
                    <h4 style={{ color: 'var(--color-primary)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>El Gobernante</h4>
                    <p style={{ color: 'var(--color-accent)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Arquetipo Principal</p>
                    <p style={{ marginTop: '0.5rem', fontStyle: 'italic' }}>Liderazgo, dirección, estructura y autoridad.</p>
                </div>
                <div style={{ width: '1px', background: '#ccc', height: '100px', alignSelf: 'center', display: 'none' }} className="divider"></div>
                <div style={{ textAlign: 'center' }}>
                    <h4 style={{ color: 'var(--color-primary)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>El Creador</h4>
                    <p style={{ color: 'var(--color-accent)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Arquetipo Secundario</p>
                    <p style={{ marginTop: '0.5rem', fontStyle: 'italic' }}>Innovación, concepto y diferenciación.</p>
                </div>
            </div>

            {/* Personality Traits */}
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginBottom: '4rem', maxWidth: '800px' }}>
                {traits.map((trait, i) => (
                    <span key={i} style={{
                        padding: '0.5rem 1.5rem',
                        border: '1px solid var(--color-primary)',
                        borderRadius: '50px',
                        fontSize: '0.9rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                    }}>
                        {trait}
                    </span>
                ))}
            </div>



        </Section>
    );
};

export default IdentitySection;
