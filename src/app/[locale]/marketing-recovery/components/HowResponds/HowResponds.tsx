'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';
import { TransformScale } from '@/shared/ui/kit';

import styles from './HowResponds.module.scss';

export const HowResponds = () => {
  const t = useTranslations('howResponds');

  const data = [
    {
      id: 1,
      title: t('title1', {
        fallback: 'Situational Audit (within 12h)',
      }),
      description: t('description1', {
        fallback:
          'We diagnose what’s broken — performance, tracking, messaging, or internal execution. Fast.',
      }),
    },
    {
      id: 2,
      title: t('title2', {
        fallback: 'Tactical Triage',
      }),
      description: t('description2', {
        fallback:
          'We prioritise high-impact fixes: ad stop-losses, messaging corrections, tracking recovery, or funnel patching.',
      }),
    },
    {
      id: 3,
      title: t('title3', {
        fallback: 'Recovery Campaign',
      }),
      description: t('description3', {
        fallback:
          'Deploy optimised ads, reset user journeys, rebuild broken automation or outreach to regain momentum.',
      }),
    },
    {
      id: 4,
      title: t('title4', {
        fallback: 'Stabilisation & Support',
      }),
      description: t('description4', {
        fallback:
          'Rebuild performance dashboards, brief internal teams, and ensure your operations can scale forward again.',
      }),
    },
  ];

  return (
    <>
      <TransformScale>
        <section className={styles.howResponds}>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {t('howResponds.title', {
              fallback: 'How Norevia Digital Responds',
            })}
          </motion.h2>
          <div className={styles.howResponds__content}>
            {data.map((item, index) => (
              <div key={index} className={styles.item}>
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
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className={styles.row}
                >
                  <div>
                    <h3>
                      {t('step', {
                        fallback: 'Step',
                      })}{' '}
                      {item.id}
                    </h3>
                  </div>
                  <div>
                    <span dangerouslySetInnerHTML={{ __html: item.title }} />
                    <p dangerouslySetInnerHTML={{ __html: item.description }} />
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </section>
      </TransformScale>
    </>
  );
};
