import React, { useState } from 'react';
import Section from './Section';
import { motion, AnimatePresence } from 'framer-motion';
import { useSite } from '../context/SiteContext';

const ContactSection = () => {
    const { addLead, settings } = useSite();
    const [formState, setFormState] = useState('idle');
    const [formData, setFormData] = useState({ name: '', company: '', email: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormState('sending');

        // Save to Context (localStorage)
        addLead(formData);

        setTimeout(() => {
            setFormState('success');
            setFormData({ name: '', company: '', email: '', message: '' });
        }, 1500);
    };

    const inputStyle = {
        width: '100%',
        padding: '1rem',
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '8px',
        color: 'white',
        fontSize: '1rem',
        marginBottom: '1.5rem',
        outline: 'none',
        transition: 'border-color 0.3s'
    };

    const labelStyle = {
        display: 'block',
        marginBottom: '0.5rem',
        fontSize: '0.9rem',
        color: '#8892b0',
        textTransform: 'uppercase',
        letterSpacing: '0.05em'
    };

    return (
        <Section id="contacto" bgColor="var(--color-black)" textColor="white">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '5rem', width: '100%' }}>

                {/* Left: Contact Info */}
                <div>
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontFamily: 'var(--font-heading)', marginBottom: '2rem' }}
                    >
                        Hablemos del <span style={{ color: '#ffbd69' }}>próximo nivel</span>.
                    </motion.h2>
                    <p style={{ fontSize: '1.2rem', color: '#ccc', marginBottom: '3rem', lineHeight: 1.6 }}>
                        ¿Buscas un socio estratégico para tu marca? Cuéntanos tu visión y diseñemos juntos el camino al éxito.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                            <div style={{ width: '50px', height: '50px', background: 'rgba(255,189,105,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffbd69' }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                            </div>
                            <div>
                                <div style={{ fontSize: '0.8rem', color: '#8892b0', textTransform: 'uppercase', letterSpacing: '1px' }}>WhatsApp</div>
                                <div style={{ fontSize: '1.1rem', color: 'white', fontWeight: 'bold' }}>{settings.whatsapp}</div>
                            </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                            <div style={{ width: '50px', height: '50px', background: 'rgba(100,255,218,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64ffda' }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>
                            </div>
                            <div>
                                <div style={{ fontSize: '0.8rem', color: '#8892b0', textTransform: 'uppercase', letterSpacing: '1px' }}>Email</div>
                                <div style={{ fontSize: '1.1rem', color: 'white', fontWeight: 'bold' }}>{settings.email}</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Form */}
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '3rem', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)', position: 'relative', overflow: 'hidden' }}>
                    <AnimatePresence mode="wait">
                        {formState !== 'success' ? (
                            <motion.form
                                key="form"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onSubmit={handleSubmit}
                            >
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <div>
                                        <label style={labelStyle}>Nombre</label>
                                        <input type="text" name="name" value={formData.name} onChange={handleChange} required style={inputStyle} placeholder="Tu nombre" />
                                    </div>
                                    <div>
                                        <label style={labelStyle}>Empresa</label>
                                        <input type="text" name="company" value={formData.company} onChange={handleChange} style={inputStyle} placeholder="Nombre de empresa" />
                                    </div>
                                </div>

                                <label style={labelStyle}>Email</label>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} required style={inputStyle} placeholder="ejemplo@correo.com" />

                                <label style={labelStyle}>Mensaje</label>
                                <textarea name="message" value={formData.message} onChange={handleChange} required style={{ ...inputStyle, height: '120px', resize: 'none' }} placeholder="¿En qué podemos ayudarte?"></textarea>

                                <motion.button
                                    whileHover={{ scale: 1.02, backgroundColor: '#ffbd69' }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    disabled={formState === 'sending'}
                                    style={{
                                        width: '100%',
                                        padding: '1.2rem',
                                        background: '#64ffda',
                                        color: 'var(--color-black)',
                                        border: 'none',
                                        borderRadius: '8px',
                                        fontWeight: 'bold',
                                        fontSize: '1rem',
                                        cursor: 'pointer',
                                        textTransform: 'uppercase',
                                        letterSpacing: '2px',
                                        transition: '0.3s'
                                    }}
                                >
                                    {formState === 'sending' ? 'Enviando...' : 'Enviar Propuesta'}
                                </motion.button>
                            </motion.form>
                        ) : (
                            <motion.div
                                key="success"
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                style={{ textAlign: 'center', padding: '2rem 0' }}
                            >
                                <div style={{ width: '80px', height: '80px', background: '#64ffda', color: 'var(--color-black)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem auto' }}>
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                                </div>
                                <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'white' }}>¡Mensaje Recibido!</h3>
                                <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Nuestro equipo de estrategia se pondrá en contacto contigo en menos de 24 horas.</p>
                                <button
                                    onClick={() => setFormState('idle')}
                                    style={{ marginTop: '2rem', background: 'transparent', border: '1px solid rgba(255,255,255,0.4)', color: 'white', padding: '0.8rem 2rem', borderRadius: '50px', cursor: 'pointer' }}
                                >
                                    Enviar otro mensaje
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

            </div>
        </Section>
    );
};

export default ContactSection;
