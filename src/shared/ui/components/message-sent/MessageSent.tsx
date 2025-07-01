'use client';

import { useRouter } from 'next/navigation';

import { useTranslations } from 'next-intl';

import { Button } from '@/shared/ui/kit';

import styles from './MessageSent.module.scss';

export const MessageSent = ({
  isSuccess,
  onClose,
}: {
  isSuccess: boolean;
  onClose: () => void;
}) => {
  const t = useTranslations('urgentRequest');
  const router = useRouter();

  const handleClose = () => {
    onClose();
    router.push('/');
  };

  return (
    <div className={`${styles.modal} ${isSuccess ? styles.visible : ''} ${styles.success}`}>
      <div className={styles.modal__content}>
        <h5>
          {t('messageSentTitle', {
            fallback: 'Thank you!',
          })}
        </h5>
        <p
          dangerouslySetInnerHTML={{
            __html: t('messageSentDescription', {
              fallback:
                'Our team will review your message and get back to you within 48 business hours.',
            }),
          }}
        />
        <Button buttonType="button" color="grey" plus size="large" onClick={handleClose}>
          {t('messageSentButton', {
            fallback: 'Home page',
          })}
        </Button>
      </div>
    </div>
  );
};
