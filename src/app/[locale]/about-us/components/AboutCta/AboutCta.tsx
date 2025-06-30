'use client';


import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';
import { Button } from '@/shared/ui/kit';

import styles from './AboutCta.module.scss';

export const AboutCta = () => {
  const t = useTranslations('aboutCta');

  return (
    <section className={styles.aboutCta}>
      <video src="/videos/readyToMarket.mp4" autoPlay muted loop />
      <div className={styles.aboutCta__container}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className={styles.aboutCta__body}
        >
          <p
            dangerouslySetInnerHTML={{
              __html: t('text', {
                fallback:
                  'Clear goals, bold execution, measurable impact — let’s get started.',
              }),
            }}
          />
          <h2
            dangerouslySetInnerHTML={{
              __html: t('title', {
                fallback: 'Let’s Make Your <br/>Marketing Work!',
              }),
            }}
          />
          <Button url="/contact-us" color="grey" plus size="small" buttonType="link">
            {t('button', {
              fallback: 'Contact Us',
            })}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
