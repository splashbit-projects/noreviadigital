'use client';

import { useTranslations } from 'next-intl';

import { Close } from '@/shared/ui/icons/close/Close';

import { useSolutionPopup } from '../../model/store';
import { MessageSent } from '../MessageSent/MessageSent';
import { SolutionForm } from '../SolutionForm/SolutionForm';
import styles from './SolutionPopup.module.scss';

export const SolutionPopup = () => {
  const t = useTranslations('solution.popup');
  const { isSuccess, popupOpened, setIsSuccess, setPopupOpened, solution } = useSolutionPopup();

  const handleClose = () => {
    setPopupOpened(false);
    setIsSuccess(false);
    document.body.style.overflow = 'auto';
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
              <h2>
                {solution?.title} {t('request', { fallback: 'Request' })}
              </h2>
              <SolutionForm onSuccess={() => setIsSuccess(true)} />
            </>
          )}
        </div>
      </div>
    </>
  );
};
