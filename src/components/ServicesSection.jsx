import React, { useRef, useState } from 'react';
import Section from './Section';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const ServiceCard = ({ title, items, delay }) => {
    const ref = useRef(null);
    const [hover, setHover] = useState(false);

    // 3D Tilt Effect
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const handleMouseMove = (e) => {
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
        setHover(false);
    };

    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { damping: 15, stiffness: 150 });
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { damping: 15, stiffness: 150 });

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={handleMouseLeave}
            style={{
                backgroundColor: 'rgba(255, 255, 255, 0.85)', // Glass base
                backdropFilter: 'blur(10px)',
                padding: '3rem',
                borderRadius: '16px',
                boxShadow: hover ? '0 20px 40px rgba(0,0,0,0.1)' : '0 4px 20px rgba(0,0,0,0.05)',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
                border: '1px solid rgba(255,255,255,0.5)'
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: delay }}
        >
            <div style={{ transform: "translateZ(20px)" }}>
                <h4 style={{
                    fontSize: '1.5rem',
                    marginBottom: '2rem',
                    color: 'var(--color-black)',
                    fontFamily: 'var(--font-heading)',
                    fontStretch: 'var(--font-heading-stretch)',
                    borderBottom: '2px solid rgba(14, 40, 65, 0.1)',
                    paddingBottom: '0.5rem',
                    display: 'inline-block'
                }}>
                    {title}
                </h4>
                <ul style={{ listStyle: 'none', flex: 1 }}>
                    {items.map((item, index) => (
                        <li key={index} style={{ marginBottom: '1rem', fontSize: '1.05rem', color: '#0E2841', display: 'flex', alignItems: 'center' }}>
                            <span style={{ color: 'var(--color-accent)', marginRight: '0.5rem', fontSize: '0.8rem' }}>●</span>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
};

const ServicesSection = () => {
    const marketingServices = [
        "Strategic Marketing", "Brand Strategy", "Digital Ecosystems",
        "Content Direction", "Brand Identity", "Web & Digital Platforms", "Performance Strategy"
    ];

    const experienceServices = [
        "Brand Experiences", "Brand Activations", "Corporate Events",
        "Product Launches", "Influencer Experiences", "PR Experiences", "Full Event Production"
    ];

    return (
        <Section id="capabilities" title="Our Capabilities" bgColor="var(--color-secondary)" alignment="center">
            <p style={{ maxWidth: '800px', margin: '0 auto 4rem auto', textAlign: 'center', fontSize: '1.2rem', color: 'var(--color-accent)' }}>
                We operate across strategy, marketing and experiential brand building.
            </p>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '3rem',
                width: '100%',
                perspective: '1000px'
            }}>
                <ServiceCard title="Strategic Marketing" items={marketingServices} delay={0.1} />
                <ServiceCard title="Brand Experiences" items={experienceServices} delay={0.3} />
            </div>
        </Section>
    );
};

export default ServicesSection;
