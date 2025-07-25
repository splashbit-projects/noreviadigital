'use client';
import { useRef } from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';

export const Transform3D = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const matrix3d = useTransform(
    scrollYProgress,
    [0, 0.5],
    [
      'matrix3d(1.1, 0, 0, 0, 0, 1, 2, -0.0003, 0, 0, 3, 0, 0, 0, 0, 1)',
      'matrix3d(1, 0, 0, 0, 0, 1, 2, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
    ]
  );

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.2, 1]);

  return (
    <motion.div
      style={{
        transform: matrix3d,
        opacity,
      }}
      ref={ref}
    >
      {children}
    </motion.div>
  );
};
