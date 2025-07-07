'use client';
import { useEffect, useRef, useState } from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';

export const TransformScale = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start start'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.97, 1]);

  //const opacity = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]);

  return (
    <motion.div
      style={{
        scale: isMobile ? 1 : scale,
      }}
      ref={ref}
    >
      {children}
    </motion.div>
  );
};
