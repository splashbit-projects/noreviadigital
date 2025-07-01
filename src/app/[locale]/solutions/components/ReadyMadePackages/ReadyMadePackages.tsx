'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';

import styles from './ReadyMadePackages.module.scss';

export const ReadyMadePackages = () => {
  const t = useTranslations('solutionsPage.readyMadePackages');

  return (
    <section className={styles.marketingHero}>
      <div className={'_container'}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <video src="/videos/solutions/ready-made.mp4" autoPlay muted loop />
        </motion.div>
        <div className={styles.marketingHero__content}>
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {t('title', { fallback: 'Ready-Made Packages for Real Marketing Challenges' })}
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {t('text', {
              fallback:
                'Structured solutions designed to align with your goals, budget, and urgency.',
            })}
          </motion.p>
        </div>
      </div>
    </section>
  );
};
