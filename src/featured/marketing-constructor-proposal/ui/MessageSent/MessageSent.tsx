'use client';

import { useTranslations } from 'next-intl';

import { Close } from '@/shared/ui/icons/close/Close';
import { Button } from '@/shared/ui/kit';

import { useProposalFormStore } from '../../model/ProposalFormStore';
import styles from './MessageSent.module.scss';

export const MessageSent = () => {
  const { isSuccess, setIsSuccess, setSelectedServices } = useProposalFormStore();
  const t = useTranslations('proposalForm');

  const handleClose = () => {
    setIsSuccess(false);
    setSelectedServices([]);
  };

  return (
    <div className={`${styles.modal} ${isSuccess ? styles.visible : ''} ${styles.success}`}>
      <div className={styles.modal__content}>
        <div className={styles.modal__close} onClick={handleClose}>
          <Close />
        </div>
        <h5>
          {t('messageSentTitle', {
            fallback: 'Thank you!',
          })}
        </h5>
        <p
          dangerouslySetInnerHTML={{
            __html: t('messageSentDescription', {
              fallback:
                'Your request has been received.<br/>You’ll receive a tailored proposal within 48 business hours.',
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
