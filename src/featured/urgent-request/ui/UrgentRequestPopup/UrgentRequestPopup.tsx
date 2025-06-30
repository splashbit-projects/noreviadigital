'use client';

//import { useLenis } from 'lenis/react';
import { useTranslations } from 'next-intl';

import { Close } from '@/shared/ui/icons/close/Close';

import { useUrgentRequestStore } from '../../model/UrgentRequestStore';
import styles from './UrgentRequestPopup.module.scss';

import { MessageSent, UrgentRequestForm } from '@/featured/urgent-request';

export const UrgentRequestPopup = () => {
  const { isSuccess, popupOpened, setIsSuccess, setPopupOpened } = useUrgentRequestStore();
  const t = useTranslations('urgentRequest');
  //const lenis = useLenis();

  const handleClose = () => {
    setPopupOpened(false);
    setIsSuccess(false);
    document.body.style.overflow = 'auto';
    //lenis?.start();
  };

  return (
    <>
      <div className={`${styles.urgentRequestPopup} ${popupOpened ? styles.visible : ''}`}>
        <div className={styles.urgentRequestPopup__content}>
          <div className={styles.close} onClick={handleClose}>
            <Close />
          </div>
          {isSuccess ? (
            <MessageSent />
          ) : (
            <>
              <h2>{t('title', { fallback: 'Urgent Assistance Request' })}</h2>
              <UrgentRequestForm />
            </>
          )}
        </div>
      </div>
    </>
  );
};
