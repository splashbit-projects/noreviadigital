'use client';

import { motion } from 'framer-motion';

import { fadeInUp } from '@/shared/lib/helpers/animations';
import { Button } from '@/shared/ui/kit';

import styles from './Hero.module.scss';

export const Hero = () => {
  return (
    <section className={styles.marketingHero}>
      <div className={'_container'}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <video src="/videos/services/hero.mp4" autoPlay muted loop />
        </motion.div>
        <div className={styles.marketingHero__content}>
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Explore What We Do.
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.text}
          >
            Strategic, creative, and performance-driven services built to grow your business.
          </motion.p>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Button url="#" color="white" plus>
            Check Our Solutions
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
