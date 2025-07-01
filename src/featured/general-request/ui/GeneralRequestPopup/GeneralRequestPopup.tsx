'use client';

import { MessageSent } from '@/shared/ui/components/message-sent/MessageSent';
import { Close } from '@/shared/ui/icons/close/Close';

import { useGeneralRequestPopup } from '../../model/store';
import { GeneralRequestForm } from '../GeneralRequestForm/GeneralRequestForm';
import styles from './GeneralRequestPopup.module.scss';

export const GeneralRequestPopup = () => {
  const { isSuccess, setIsSuccess, open, setOpen } = useGeneralRequestPopup();

  const handleClose = () => {
    setOpen(false);
    setIsSuccess(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <div className={`${styles.urgentRequestPopup} ${open ? styles.visible : ''}`}>
        <div className={styles.urgentRequestPopup__content}>
          <div className={styles.close} onClick={handleClose}>
            <Close />
          </div>
          {isSuccess ? (
            <MessageSent isSuccess={isSuccess} onClose={handleClose} />
          ) : (
            <>
              <h2>Let’s Find the Right Marketing Solution for You</h2>
              <GeneralRequestForm onSuccess={() => setIsSuccess(true)} />
            </>
          )}
        </div>
      </div>
    </>
  );
};
