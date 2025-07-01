'use client';

import { Close } from '@/shared/ui/icons/close/Close';

import styles from './popup.module.scss';

export const Popup = ({
  open,
  setOpen,
  children,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  children: React.ReactNode;
}) => {
  const handleClose = () => {
    setOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <div className={`${styles.urgentRequestPopup} ${open ? styles.visible : ''}`}>
        <div className={styles.urgentRequestPopup__content}>
          <div className={styles.close} onClick={handleClose}>
            <Close />
          </div>
          {children}
        </div>
      </div>
    </>
  );
};
