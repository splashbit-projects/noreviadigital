'use client';

import { motion } from 'framer-motion';

import { fadeInUp } from '@/shared/lib/helpers/animations';

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
          <video src="/videos/solutions/hero.mp4" autoPlay muted loop />
        </motion.div>
        <div className={styles.marketingHero__content}>
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Marketing Solutions That Deliver.
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Comprehensive packages built to solve challenges and drive business growth.
          </motion.p>
        </div>
      </div>
    </section>
  );
};
