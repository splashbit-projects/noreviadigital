'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { TransformScale } from '@/shared/ui/kit';

import styles from './DoYouKnow.module.scss';

export const DoYouKnow = () => {
  const t = useTranslations('doYouKnow');

  const data = [
    {
      title: t('title1', {
        fallback: 'Revenue Collapse',
      }),
      description: t('description1', {
        fallback:
          'Ad campaigns stall, SEO rankings drop, and sales pipelines dry up — with no contingency plan.',
      }),
    },
    {
      title: t('title2', {
        fallback: 'Brand Reputation Damage',
      }),
      description: t('description2', {
        fallback:
          'A wrong message, poor PR handling, or bad UX can erode years of brand trust in weeks.',
      }),
    },
    {
      title: t('title3', {
        fallback: 'Customer Churn & Loss of Loyalty',
      }),
      description: t('description3', {
        fallback:
          'When you stop showing up or misfire on communication, your audience moves on — fast.',
      }),
    },
    {
      title: t('title4', {
        fallback: 'Missed Opportunities',
      }),
      description: t('description4', {
        fallback:
          'Seasonal traffic, market trends, or competitor weaknesses — all lost due to delayed execution.',
      }),
    },
    {
      title: t('title5', {
        fallback: 'Escalating Ad Waste',
      }),
      description: t('description5', {
        fallback:
          'Running inefficient campaigns without tracking, targeting, or strategic control burns the budget with no return.',
      }),
    },
    {
      title: t('title6', {
        fallback: 'Team Burnout & Operational Chaos',
      }),
      description: t('description6', {
        fallback:
          'Disorganised efforts create stress, misalignment, and decision paralysis across internal teams.',
      }),
    },
  ];

  return (
    <section className={styles.doYouKnow}>
      <div className={'_container'}>
        <div className={styles.doYouKnow__body}>
          <div className={styles.doYouKnow__col}>
            <TransformScale>
              <h2>
                {t('title', {
                  fallback: 'Do You Know the Real Risk of Waiting?',
                })}
              </h2>
              <p>
                {t('description', {
                  fallback:
                    'When marketing breaks down, doing nothing costs more than just time. Delays, poor decisions, or wrong turns can cascade into lasting damage.',
                })}
              </p>
            </TransformScale>
          </div>
          <div className={styles.doYouKnow__col}>
            <div className={styles.doYouKnow__content}>
              {data.map((item, index) => (
                <div key={index}>
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
                  <div className={styles.item}>
                    <span dangerouslySetInnerHTML={{ __html: item.title }} />
                    <p dangerouslySetInnerHTML={{ __html: item.description }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
