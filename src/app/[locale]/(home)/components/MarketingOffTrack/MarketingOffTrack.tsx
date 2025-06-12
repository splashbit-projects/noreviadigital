'use client';

import { useTranslations } from 'next-intl';

import { Button, TransformScale } from '@/shared/ui/kit';

import styles from './MarketingOffTrack.module.scss';

export const MarketingOffTrack = () => {
  const t = useTranslations('marketingOffTrack');

  return (
    <section className={styles.marketingOffTrack}>
      <div className={'_container'}>
        <TransformScale>
          <div className={styles.marketingOffTrack__content}>
            <h2
              dangerouslySetInnerHTML={{
                __html: t('title', {
                  fallback: 'Marketing going off track? <br/>We’ll fix it — fast.',
                }),
              }}
            />
            <p>
              {t('description', {
                fallback:
                  'Rescue your reputation. Stop budget leaks. Get campaigns back on target now.',
              })}
            </p>
            <Button url="#" color="grey" plus size="large" buttonType="link">
              {t('button', {
                fallback: 'Explore Full Services',
              })}
            </Button>
          </div>
        </TransformScale>
      </div>
    </section>
  );
};
