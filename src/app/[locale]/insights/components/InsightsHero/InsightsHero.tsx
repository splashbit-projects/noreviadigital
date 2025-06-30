'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';
import { Button } from '@/shared/ui/kit';

import styles from './InsightsHero.module.scss';

export const InsightsHero = () => {
  const t = useTranslations('insightsPage');

  return (
    <section className={styles.insightsHero}>
      <div className={'_container'}>
        <div className={styles.insightsHero__content}>
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            dangerouslySetInnerHTML={{
              __html: t('title', {
                fallback: 'We Share What We Know.',
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
                  'Proven strategies, expert breakdowns, and real <br/>marketing lessons — no fluff, just insight.',
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
          <Button url="/services" color="white" plus>
            {t('button', {
              fallback: 'Check Services',
            })}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
