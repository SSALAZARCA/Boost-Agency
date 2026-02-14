import React from 'react';
import { motion } from 'framer-motion';

const Section = ({
    id,
    title,
    children,
    bgColor = 'var(--color-secondary)',
    textColor = 'var(--color-black)',
    alignment = 'left'
}) => {
    const sectionStyle = {
        padding: 'var(--spacing-lg) 1rem',
        backgroundColor: bgColor,
        color: textColor,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        textAlign: alignment,
    };

    const containerStyle = {
        maxWidth: 'var(--container-width)',
        width: '100%',
        display: 'flex',
        flexDirection: 'column', // Stack vertically on mobile
        gap: '2rem',
    };

    // Responsive check could be added here, but for now using simple flex
    // For desktop we might want row layout for some sections

    return (
        <section id={id} style={sectionStyle}>
            <div style={containerStyle}>
                {title && (
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        style={{
                            marginBottom: 'var(--spacing-md)',
                            fontSize: 'clamp(2rem, 5vw, 3rem)',
                            textAlign: alignment === 'center' ? 'center' : 'left'
                        }}
                    >
                        {title}
                    </motion.h2>
                )}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {children}
                </motion.div>
            </div>
        </section>
    );
};

export default Section;
