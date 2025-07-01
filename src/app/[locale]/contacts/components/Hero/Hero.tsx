'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';

import styles from './Hero.module.scss';

export const Hero = () => {
  const t = useTranslations('contacts.hero');

  return (
    <section className={styles.marketingHero}>
      <div className={'_container'}>
        <div className={styles.marketingHero__content}>
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {t('title.0', { fallback: 'Contact Us' })}
            <br /> {t('title.1', { fallback: 'Let’s Build Smarter' })}
            <br /> {t('title.2', { fallback: 'Marketing Together' })}
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {t('text', {
              fallback: 'Whether you need clarity, support, or a fresh direction — we’re here.',
            })}
          </motion.p>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <video src="/videos/contacts/hero.mp4" autoPlay muted loop />
        </motion.div>
      </div>
    </section>
  );
};
