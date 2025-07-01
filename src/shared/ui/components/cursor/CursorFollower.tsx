'use client';
import { useEffect } from 'react';

import { motion, useMotionValue, useTransform } from 'framer-motion';

export const CursorFollower = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const circleX = useTransform(mouseX, (value) => value - 8);
  const circleY = useTransform(mouseY, (value) => value - 8);

  //const springX = useSpring(circleX, { stiffness: 100, damping: 20, mass: 0.5 });
  //const springY = useSpring(circleY, { stiffness: 100, damping: 20, mass: 0.5 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    const handleMouseLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 20,
        height: 20,
        borderRadius: '50%',
        backgroundColor: '#DBDCD5',
        x: circleX,
        y: circleY,
        pointerEvents: 'none',
        mixBlendMode: 'difference',
        zIndex: 1000,
      }}
    />
  );
};
