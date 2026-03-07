import React, { useState } from 'react';
import Section from './Section';
import { motion, AnimatePresence } from 'framer-motion';
import { useSite } from '../context/SiteContext';

const ContactSection = () => {
    const { addLead, settings } = useSite();
    const [formState, setFormState] = useState('idle');
    const [formData, setFormData] = useState({ name: '', company: '', email: '', phone: '', message: '' });
    const [privacyAgreed, setPrivacyAgreed] = useState(false);

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
            setFormData({ name: '', company: '', email: '', phone: '', message: '' });
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
        <Section id="contact" bgColor="var(--color-black)" textColor="white">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', width: '100%' }}>

                {/* Left: Contact Info */}
                <div>
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontFamily: 'var(--font-heading)', marginBottom: '2rem' }}
                    >
                        Let's talk about the next level.
                    </motion.h2>
                    <p style={{ fontSize: '1.2rem', color: '#ccc', marginBottom: '3rem', lineHeight: 1.6 }}>
                        Looking for a strategic partner for your brand? Tell us your vision and let's design the path to success together.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <motion.a
                            href={`https://wa.me/${settings.whatsapp.replace(/\D/g, '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', textDecoration: 'none', cursor: 'pointer', width: 'fit-content' }}
                        >
                            <div style={{ width: '50px', height: '50px', background: 'var(--color-highlight)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-black)' }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                            </div>
                            <div>
                                <div style={{ fontSize: '0.8rem', color: '#8892b0', textTransform: 'uppercase', letterSpacing: '1px' }}>WhatsApp</div>
                                <div style={{ fontSize: '1.1rem', color: 'white', fontWeight: 'bold' }}>{settings.whatsapp}</div>
                            </div>
                        </motion.a>

                        <motion.a
                            href={`mailto:${settings.email}`}
                            whileHover={{ scale: 1.05 }}
                            style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', textDecoration: 'none', cursor: 'pointer', width: 'fit-content' }}
                        >
                            <div style={{ width: '50px', height: '50px', background: 'var(--color-highlight)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-black)' }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>
                            </div>
                            <div>
                                <div style={{ fontSize: '0.8rem', color: '#8892b0', textTransform: 'uppercase', letterSpacing: '1px' }}>Email</div>
                                <div style={{ fontSize: '1.1rem', color: 'white', fontWeight: 'bold' }}>{settings.email}</div>
                            </div>
                        </motion.a>
                    </div>
                </div>

                {/* Right: Form */}
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: 'clamp(1.5rem, 5vw, 3rem)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)', position: 'relative', overflow: 'hidden' }}>
                    <AnimatePresence mode="wait">
                        {formState !== 'success' ? (
                            <motion.form
                                key="form"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onSubmit={handleSubmit}
                            >
                                <div className="grid-responsive-2">
                                    <div>
                                        <label style={labelStyle}>Name</label>
                                        <input type="text" name="name" value={formData.name} onChange={handleChange} required style={inputStyle} placeholder="Your name" />
                                    </div>
                                    <div>
                                        <label style={labelStyle}>Company</label>
                                        <input type="text" name="company" value={formData.company} onChange={handleChange} style={inputStyle} placeholder="Company name" />
                                    </div>
                                </div>

                                <div className="grid-responsive-2">
                                    <div>
                                        <label style={labelStyle}>Email</label>
                                        <input type="email" name="email" value={formData.email} onChange={handleChange} required style={inputStyle} placeholder="example@email.com" />
                                    </div>
                                    <div>
                                        <label style={labelStyle}>Phone Number</label>
                                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} style={inputStyle} placeholder="+1 234 567 890" />
                                    </div>
                                </div>

                                <label style={labelStyle}>Message</label>
                                <textarea name="message" value={formData.message} onChange={handleChange} required style={{ ...inputStyle, height: '120px', resize: 'none' }} placeholder="How can we help you?"></textarea>

                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '2rem' }}>
                                    <input
                                        type="checkbox"
                                        id="privacy-policy"
                                        checked={privacyAgreed}
                                        onChange={(e) => setPrivacyAgreed(e.target.checked)}
                                        style={{ marginTop: '0.3rem', transform: 'scale(1.2)', cursor: 'pointer' }}
                                    />
                                    <label htmlFor="privacy-policy" style={{ fontSize: '0.85rem', color: '#8892b0', lineHeight: 1.5, cursor: 'pointer' }}>
                                        I have read and agree to the <a href="/privacy" style={{ color: 'var(--color-highlight)', textDecoration: 'none' }}>Privacy Policy</a> and authorize the processing of my personal data.
                                    </label>
                                </div>

                                <motion.button
                                    whileHover={privacyAgreed ? { scale: 1.02 } : {}}
                                    whileTap={privacyAgreed ? { scale: 0.98 } : {}}
                                    type="submit"
                                    disabled={formState === 'sending' || !privacyAgreed}
                                    style={{
                                        width: '100%',
                                        padding: '1.2rem',
                                        background: privacyAgreed ? 'var(--color-highlight)' : 'rgba(253, 253, 136, 0.2)',
                                        color: privacyAgreed ? 'var(--color-black)' : 'rgba(14, 40, 65, 0.5)',
                                        border: 'none',
                                        borderRadius: '8px',
                                        fontWeight: 'bold',
                                        fontSize: '1rem',
                                        cursor: privacyAgreed ? 'pointer' : 'not-allowed',
                                        textTransform: 'uppercase',
                                        letterSpacing: '2px',
                                        transition: '0.3s',
                                        opacity: privacyAgreed ? 1 : 0.6
                                    }}
                                >
                                    {formState === 'sending' ? 'Sending...' : 'Send Proposal'}
                                </motion.button>
                            </motion.form>
                        ) : (
                            <motion.div
                                key="success"
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                style={{ textAlign: 'center', padding: '2rem 0' }}
                            >
                                <div style={{ width: '80px', height: '80px', background: 'var(--color-highlight)', color: 'var(--color-black)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem auto' }}>
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                                </div>
                                <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'white' }}>Message Received!</h3>
                                <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Our strategy team will get in touch with you in less than 24 hours.</p>
                                <button
                                    onClick={() => setFormState('idle')}
                                    style={{ marginTop: '2rem', background: 'transparent', border: '1px solid rgba(255,255,255,0.4)', color: 'white', padding: '0.8rem 2rem', borderRadius: '50px', cursor: 'pointer' }}
                                >
                                    Send another message
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
