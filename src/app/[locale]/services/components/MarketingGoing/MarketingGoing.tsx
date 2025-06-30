'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';
import { Button } from '@/shared/ui/kit';

import styles from './MarketingGoing.module.scss';

export const MarketingGoing = () => {
  const t = useTranslations('servicesPage.marketingGoing');

  return (
    <section className={styles.readyToMarket}>
      <video src="/videos/readyToMarket.mp4" autoPlay muted loop />
      <div className={styles.readyToMarket__container}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className={styles.readyToMarket__body}
        >
          <h2>
            {t('title.0', { fallback: 'Marketing going off track?' })}
            <br />
            {t('title.1', { fallback: 'We’ll fix it — fast.' })}
          </h2>
          <Button url="/marketing-recovery" color="grey" plus size="small" buttonType="link">
            {t('button', { fallback: 'Get Immediate Help' })}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
