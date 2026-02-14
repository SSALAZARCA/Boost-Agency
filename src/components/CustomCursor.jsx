import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [isHovered, setIsHovered] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Spring config for the trailing ring (smooth, slight delay)
    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <>
            {/* 1. The High-Visibility Central Dot (Follows mouse exactly) */}
            <motion.div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    x: cursorX,
                    y: cursorY,
                    translateX: '-50%',
                    translateY: '-50%',
                    width: 8,
                    height: 8,
                    backgroundColor: '#ff3d00', // Bright Orange/Red for maximum visibility vs Blue/Beige
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 10000,
                    mixBlendMode: 'normal', // Normal blend to ensure the color pops
                    boxShadow: '0 0 4px rgba(0,0,0,0.3)', // Subtle shadow
                    border: '1px solid white' // White border for contrast on dark backgrounds
                }}
            />

            {/* 2. The Interactive Ring (Smooth Follower) */}
            <motion.div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    translateX: cursorXSpring,
                    translateY: cursorYSpring,
                    x: '-50%',
                    y: '-50%',
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    border: '1px solid var(--color-primary)',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    mixBlendMode: 'difference', // Cool effect for the ring
                    background: isHovered ? 'var(--color-primary)' : 'transparent',
                }}
                animate={{
                    scale: isHovered ? 1.5 : 1,
                    opacity: isHovered ? 0.5 : 1,
                    width: isHovered ? 60 : 40,
                    height: isHovered ? 60 : 40,
                }}
                transition={{ duration: 0.15 }}
            />
        </>
    );
};

export default CustomCursor;
