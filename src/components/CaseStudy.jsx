import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CaseStudy = ({ project, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: delay, duration: 0.8 }}
            style={{ height: '500px' }}
        >
            <Link
                to={`/portfolio/${project.id}`}
                style={{
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    position: 'relative',
                    textDecoration: 'none',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
                    cursor: 'none'
                }}
                className="portfolio-card"
            >
                {/* Background Image with Overlay */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `linear-gradient(rgba(10,25,47,0.1), rgba(10,25,47,0.9)), url("${project.imageUrl || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop'}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transition: 'transform 0.5s ease'
                }} className="card-bg"></div>

                {/* Content */}
                <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    padding: '2.5rem',
                    color: 'white',
                    width: '100%',
                    zIndex: 2
                }}>
                    <span style={{
                        color: '#64ffda',
                        fontSize: '0.8rem',
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        display: 'block',
                        marginBottom: '0.5rem',
                        fontWeight: 'bold'
                    }}>{project.category}</span>
                    <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)', color: 'white' }}>{project.title}</h3>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffbd69' }}>{project.metric}</div>
                        <div style={{ fontSize: '0.8rem', color: '#fff', opacity: 0.8, textTransform: 'uppercase', lineHeight: 1.2, letterSpacing: '1px' }}>{project.metricLabel}</div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

export default CaseStudy;
