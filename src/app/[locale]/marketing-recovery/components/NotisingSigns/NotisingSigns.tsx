'use client';

import { useTranslations } from 'next-intl';

import { Button, TransformScale } from '@/shared/ui/kit';

import styles from './NotisingSigns.module.scss';

import { useUrgentRequestStore } from '@/featured/urgent-request';

export const NotisingSigns = () => {
  const t = useTranslations('notisingSigns');

  const { setPopupOpened } = useUrgentRequestStore();

  const handleUrgentRequest = () => {
    setPopupOpened(true);
    document.body.style.overflow = 'hidden';
  };

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
            <Button url="#" color="white" plus onClick={handleUrgentRequest}>
              {t('button', {
                fallback: 'Urgent Request',
              })}
            </Button>
          </div>
        </TransformScale>
      </div>
    </section>
  );
};
