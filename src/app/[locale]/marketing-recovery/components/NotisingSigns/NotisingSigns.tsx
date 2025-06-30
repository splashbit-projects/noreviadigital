'use client';

import { useTranslations } from 'next-intl';

import { Button, TransformScale } from '@/shared/ui/kit';

import styles from './NotisingSigns.module.scss';

export const NotisingSigns = () => {
  const t = useTranslations('notisingSigns');

  return (
    <section className={styles.notisingSigns}>
      <div className={'_container'}>
        <TransformScale>
          <div className={styles.notisingSigns__content}>
            <h2
              dangerouslySetInnerHTML={{
                __html: t('title', {
                  fallback: 'Noticing These Warning Signs?',
                }),
              }}
            />
            <p>
              {t('description', {
                fallback:
                  'Rescue your reputation. Stop budget leaks. Get campaigns back on target now.',
              })}
            </p>
            <Button url="/services" color="grey" plus size="large" buttonType="link">
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
