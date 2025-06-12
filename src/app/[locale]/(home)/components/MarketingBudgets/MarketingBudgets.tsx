'use client';

import { useTranslations } from 'next-intl';

import { TransformScale } from '@/shared/ui/kit';

import styles from './MarketingBudgets.module.scss';

export const MarketingBudgets = () => {
  const t = useTranslations('marketingBudgets');

  const data = [
    {
      value: '€83B',
      text: t('text1', {
        fallback: 'lost yearly to <br/>ad fraud',
      }),
    },
    {
      value: '76%',
      text: t('text2', {
        fallback: 'of marketers don’t use their data',
      }),
    },
    {
      value: '1',
      text: t('text2', {
        fallback: 'in 5 is satisfied with their conversion rate',
      }),
    },
    {
      value: '50%+',
      text: t('text2', {
        fallback: 'of ad spend often delivers no return',
      }),
    },
  ];

  return (
    <section className={styles.marketingBudgets}>
      <div className={'_container'}>
        <TransformScale>
          <h2>
            {t('title', {
              fallback: 'Most Marketing Budgets Are Wasted',
            })}
          </h2>
          <p>
            {t('text', {
              fallback:
                'Clear strategy, clean execution, and measurable results — for businesses that expect more.',
            })}
          </p>
        </TransformScale>
        <TransformScale>
          <div className={styles.marketingBudgets__content}>
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
    </section>
  );
};
