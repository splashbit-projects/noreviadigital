'use client';

import { useTranslations } from 'next-intl';

import { TransformScale } from '@/shared/ui/kit';

import styles from './HowWeAct.module.scss';

export const HowWeAct = () => {
  const t = useTranslations('howWeAct');

  const data = [
    {
      value: '3 hours',
      text: t('text1', {
        fallback: 'Avg. Response Time',
      }),
    },
    {
      value: '18 hours',
      text: t('text2', {
        fallback: 'Issue Resolution Time',
      }),
    },
    {
      value: '34%',
      text: t('text3', {
        fallback: 'in 5 is satisfied with their conversion rate',
      }),
    },
    {
      value: '2.7×',
      text: t('text4', {
        fallback: 'Conversion Rate Increase',
      }),
    },
    {
      value: '100%',
      text: t('text5', {
        fallback: 'On-Time Project Delivery',
      }),
    },
  ];

  return (
    <section className={styles.howWeAct}>
      <div className={'_container'}>
        <div className={styles.howWeAct__body}>
          <TransformScale>
            <h2>
              {t('title', {
                fallback: 'How We Act',
              })}
            </h2>
            <p
              dangerouslySetInnerHTML={{
                __html: t('text', {
                  fallback:
                    'Clear strategy, clean execution, and measurable results — for businesses that expect more<br/>Here’s how we operate across every project:.',
                }),
              }}
            />
          </TransformScale>
          <TransformScale>
            <div className={styles.howWeAct__content}>
              {data.map((item, index) => (
                <div key={index}>
                  <span>{item.value}</span>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: item.text,
                    }}
                  />
                </div>
              ))}
            </div>
          </TransformScale>
        </div>
      </div>
    </section>
  );
};
