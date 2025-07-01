'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';
import { Button } from '@/shared/ui/kit';

import styles from './MarketingHero.module.scss';

import { useUrgentRequestStore } from '@/featured/urgent-request';

export const MarketingHero = () => {
  const t = useTranslations('marketingHero');
  const { setPopupOpened } = useUrgentRequestStore();

  const handleUrgentRequest = () => {
    setPopupOpened(true);
    document.body.style.overflow = 'hidden';
  };

  return (
    <section className={styles.marketingHero}>
      <div className={'_container'}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <video src="/videos/marketing-recovery/hero.mp4" autoPlay muted loop />
        </motion.div>
        <div className={styles.marketingHero__content}>
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            dangerouslySetInnerHTML={{
              __html: t('title', {
                fallback: 'Urgent Marketing Support, <br/>When You Need It Most.',
              }),
            }}
          />
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            dangerouslySetInnerHTML={{
              __html: t('description', {
                fallback:
                  'Comprehensive packages built to solve challenges <br/>and drive business growth.',
              }),
            }}
          />
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Button url="#" color="white" plus onClick={handleUrgentRequest}>
            {t('button', {
              fallback: 'Get Assistance',
            })}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
