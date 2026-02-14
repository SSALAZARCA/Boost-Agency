import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AdminLogin = ({ onLogin }) => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        // Simple mock login: password is "boost2026"
        if (password === 'boost2026') {
            onLogin();
        } else {
            setError(true);
            setTimeout(() => setError(false), 2000);
        }
    };

    return (
        <div style={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'radial-gradient(circle at center, #0a192f 0%, #000 100%)',
            color: 'white'
        }}>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    padding: '3rem',
                    borderRadius: '24px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    width: '100%',
                    maxWidth: '400px',
                    textAlign: 'center',
                    backdropFilter: 'blur(10px)'
                }}
            >
                <h1 style={{ fontFamily: 'var(--font-heading)', color: '#ffbd69', marginBottom: '2rem' }}>BOOST ADMIN</h1>
                <p style={{ color: '#8892b0', marginBottom: '2rem' }}>Ingresa tus credenciales estratégicas</p>

                <form onSubmit={handleLogin}>
                    <input
                        type="password"
                        placeholder="Contraseña de Acceso"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '1rem',
                            background: 'rgba(255,255,255,0.05)',
                            border: `1px solid ${error ? '#ff5252' : 'rgba(255,255,255,0.1)'}`,
                            borderRadius: '8px',
                            color: 'white',
                            marginBottom: '1.5rem',
                            outline: 'none',
                            textAlign: 'center'
                        }}
                    />
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        style={{
                            width: '100%',
                            padding: '1rem',
                            background: '#64ffda',
                            color: '#0a192f',
                            border: 'none',
                            borderRadius: '8px',
                            fontWeight: 'bold',
                            cursor: 'pointer'
                        }}
                    >
                        Acceder al Panel
                    </motion.button>
                </form>
                {error && <p style={{ color: '#ff5252', marginTop: '1rem', fontSize: '0.8rem' }}>Acceso denegado. Intenta de nuevo.</p>}
            </motion.div>
        </div>
    );
};

export default AdminLogin;
