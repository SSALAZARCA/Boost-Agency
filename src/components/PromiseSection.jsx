import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';

const PromiseSection = () => {
    return (
        <Section id="promesa" title="Propuesta de Valor" bgColor="var(--color-primary)" textColor="var(--color-white)" alignment="center">

            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                <p style={{ fontSize: '1.25rem', marginBottom: '2rem', lineHeight: 1.6 }}>
                    BOOST AGENCY integra estrategia digital y experiencias presenciales bajo una misma dirección estratégica para construir marcas coherentes, competitivas y memorables.
                </p>

                <h3 style={{
                    fontSize: '2rem',
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--color-highlight)',
                    marginBottom: '4rem'
                }}>
                    Convertimos posicionamiento en ventaja competitiva.
                </h3>

                <div style={{ padding: '3rem', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '8px', textAlign: 'left' }}>
                    <h4 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)', marginBottom: '1.5rem', color: 'var(--color-secondary)' }}>
                        Promesa de Marca
                    </h4>
                    <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                        BOOST AGENCY se compromete a ejecutar cada estrategia y experiencia con excelencia, precisión y visión comercial.
                    </p>
                    <p style={{ fontSize: '1.1rem', fontStyle: 'italic', borderLeft: '3px solid var(--color-highlight)', paddingLeft: '1rem' }}>
                        Mantenemos estándares altos porque trabajamos con marcas que entienden que el posicionamiento es una decisión estratégica, no estética.
                    </p>
                </div>

            </div>

        </Section>
    );
};

export default PromiseSection;
