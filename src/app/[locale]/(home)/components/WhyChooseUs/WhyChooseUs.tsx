'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { Button, TransformScale } from '@/shared/ui/kit';

import styles from './WhyChooseUs.module.scss';

export const WhyChooseUs = () => {
  const t = useTranslations('whyChooseUs');

  const data = [
    {
      title: t('title1', {
        fallback: 'Campaigns custom-built around your goals',
      }),
    },
    {
      title: t('title2', {
        fallback: 'Transparent pricing, no fluff',
      }),
    },
    {
      title: t('title3', {
        fallback: 'End-to-end service — strategy, media buying, creative, reporting',
      }),
    },
    {
      title: t('title4', {
        fallback: 'Dedicated account managers',
      }),
    },
    {
      title: t('title5', {
        fallback: 'Industry-agnostic performance (B2B, B2C, eCommerce, local)',
      }),
    },
  ];

  return (
    <section className={styles.whyChooseUs}>
      <div className={'_container'}>
        <div className={styles.whyChooseUs__body}>
          <div className={styles.whyChooseUs__col}>
            <TransformScale>
              <h2>
                {t('title', {
                  fallback: 'Why Choose Us',
                })}
              </h2>
              <p>
                {t('description', {
                  fallback: 'Not Just Marketing — Business Impact',
                })}
              </p>
              <Button url="#" color="grey" plus size="small" buttonType="link">
                {t('button', {
                  fallback: 'Explore Full Services',
                })}
              </Button>
            </TransformScale>
          </div>
          <div className={styles.whyChooseUs__col}>
            <TransformScale>
              <p>
                {t('text', {
                  fallback:
                    'We’re not here to win awards. We’re here to grow your business. Our team combines senior marketing talent with technical precision to create campaigns that drive leads, sales, and visibility.',
                })}
              </p>
            </TransformScale>
            <div className={styles.whyChooseUs__content}>
              {data.map((item, index) => (
                <div key={index}>
                  <motion.div
                    initial={{ width: '0%' }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: false }}
                    className={styles.divider}
                    transition={{
                      duration: 0.7,
                      ease: 'easeInOut',
                    }}
                  ></motion.div>
                  <div className={styles.item}>
                    <span dangerouslySetInnerHTML={{ __html: item.title }} />
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
