'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';

import { ServicesTabs } from '../ServicesTabs/ServicesTabs';
import styles from './BuildYourOwn.module.scss';

export const BuildYourOwn = () => {
  const t = useTranslations('buildYourOwn');

  return (
    <div className={styles.buildYourOwn}>
      <div className={'_container'}>
        <div className={styles.buildYourOwn__content}>
          <div>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              {t('title', { fallback: 'Can’t Find the Right Fit?' })}
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              {t('subtitle', {
                fallback: 'Build Your Own.',
              })}
            </motion.p>
          </div>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {t('description', {
              fallback:
                'Select any services you need — or just describe your case. Our team will craft a custom proposal built around your goals.',
            })}
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <video src="/videos/marketing-constructing/build.mp4" autoPlay muted loop />
        </motion.div>

        <div className={styles.buildYourOwn__notice}>
          <p>
            {t('notice', {
              fallback: 'Click the tabs and choose the services that match your goals.',
            })}
          </p>
          <motion.div
            initial={{ width: '0%' }}
            whileInView={{ width: '100%' }}
            viewport={{ once: false }}
            className={styles.divider}
            transition={{
              duration: 1.5,
              ease: 'easeInOut',
            }}
          ></motion.div>
        </div>

        <ServicesTabs />
      </div>
    </div>
  );
};
