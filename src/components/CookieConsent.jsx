import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 2000); // Show after 2 seconds
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookie-consent', 'accepted');
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                    style={{
                        position: 'fixed',
                        bottom: '2rem',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '90%',
                        maxWidth: '600px',
                        backgroundColor: 'var(--color-black)',
                        color: 'white',
                        padding: '1.5rem 2rem',
                        borderRadius: '12px',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                        zIndex: 9999,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1.5rem',
                        border: '1px solid rgba(255,255,255,0.1)',
                        backdropFilter: 'blur(10px)'
                    }}
                >
                    <p style={{ fontSize: '0.95rem', lineHeight: '1.5', margin: 0, opacity: 0.9 }}>
                        We use cookies to improve your browsing experience and analyze site traffic. By continuing to use this website, you consent to our use of cookies.
                    </p>

                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleAccept}
                            style={{
                                padding: '0.8rem 2rem',
                                background: 'var(--color-highlight)',
                                color: 'var(--color-black)',
                                border: 'none',
                                borderRadius: '6px',
                                fontWeight: '700',
                                cursor: 'pointer',
                                fontSize: '0.9rem'
                            }}
                        >
                            Accept
                        </motion.button>

                        <Link to="/cookies" onClick={() => setIsVisible(false)} style={{
                            color: 'white',
                            textDecoration: 'none',
                            fontSize: '0.9rem',
                            fontWeight: '600',
                            opacity: 0.7,
                            borderBottom: '1px solid rgba(255,255,255,0.3)',
                            paddingBottom: '2px'
                        }}>
                            Learn more
                        </Link>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CookieConsent;
