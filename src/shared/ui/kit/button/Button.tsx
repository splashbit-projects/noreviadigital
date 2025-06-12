import Link from 'next/link';

import { Plus } from '@/shared/ui/icons/plus/Plus';

import styles from './Button.module.scss';

export const Button = ({
  url,
  children,
  color = 'white',
  buttonType = 'button',
  plus = false,
  onClick,
}: {
  url?: string;
  children: React.ReactNode;
  color?: 'black' | 'white';
  buttonType?: 'button' | 'link';
  plus?: boolean;
  onClick?: () => void;
}) => {
  if (buttonType === 'link') {
    return (
      <Link href={url || ''} className={`${styles.button} ${styles[`button--${color}`]}`}>
        {children}
        {plus && <Plus />}
      </Link>
    );
  } else {
    return (
      <button
        type={buttonType}
        className={`${styles.button} ${styles[`button--${color}`]}`}
        onClick={onClick}
      >
        {children}
        {plus && <Plus />}
      </button>
    );
  }
};
