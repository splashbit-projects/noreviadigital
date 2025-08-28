import Link from 'next/link';

import { Plus } from '@/shared/ui/icons';

import styles from './Button.module.scss';

export const Button = ({
  url,
  children,
  color = 'white',
  buttonType = 'button',
  plus = false,
  onClick,
  size = 'medium',
  disabled = false,
}: {
  url?: string;
  children: React.ReactNode;
  color?: 'black' | 'white' | 'grey';
  buttonType?: 'button' | 'link' | 'submit';
  plus?: boolean;
  onClick?: () => void;
  size?: 'medium' | 'large' | 'small';
  disabled?: boolean;
}) => {
  if (buttonType === 'link') {
    return (
      <Link
        href={url || ''}
        className={`${styles.button} ${styles[`button--${color}`]} ${styles[`button--${size}`]}`}
      >
        {children}
        {plus && <Plus />}
      </Link>
    );
  } else {
    return (
      <button
        type={buttonType}
        className={`${styles.button} ${styles[`button--${color}`]} ${styles[`button--${size}`]}`}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
        {plus && <Plus />}
      </button>
    );
  }
};
