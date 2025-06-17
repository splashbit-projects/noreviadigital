'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';
import { Button } from '@/shared/ui/kit';

import styles from './MarketingHero.module.scss';

export const MarketingHero = () => {
  const t = useTranslations('marketingHero');

  return (
    <section className={styles.marketingHero}>
      <div className={'_container'}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <video src="/videos/marketing-constructing/hero.mp4" autoPlay muted loop />
        </motion.div>
        <div className={styles.marketingHero__content}>
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            dangerouslySetInnerHTML={{
              __html: t('title', {
                fallback: 'Build Your Own <br/>Marketing Solution.',
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
                  'Modular services, strategic clarity, full control — <br/>customise your package now.',
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
          <Button url="#" color="white" plus>
            {t('button', {
              fallback: 'Contact Us',
            })}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
