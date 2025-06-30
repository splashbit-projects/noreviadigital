'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useTranslations } from 'next-intl';

import { WEBSITE_EMAIL } from '@/shared/lib/constants/constants';
import { MenuButton } from '@/shared/ui/icons';

import styles from './Header.module.scss';

export const Header = () => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const t = useTranslations('header');

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSubmenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMobileMenuOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__row}>
          <Link href="/" className={styles.header__logo}>
            <Image src="/images/logo-white.svg" alt="Norevia" width={128} height={20} />
          </Link>

          <button
            className={`${styles.header__mobile_menu_button} ${isMobileMenuOpen ? styles.open : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <MenuButton />
          </button>

          <nav className={styles.header__menu}>
            <Link href="/services">{t('services', { fallback: 'Services' })}</Link>
            <Link href="#">{t('solutions', { fallback: 'Solutions' })}</Link>
            <Link href="/marketing-constructor">
              {t('constructor', { fallback: 'Constructor' })}
            </Link>

            <button
              className={`${styles.header__menu_button} ${isSubmenuOpen ? styles.open : ''}`}
              onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
            >
              <MenuButton />
            </button>
          </nav>
          <div className={styles.header__contact}>
            {/* TODO: add phone
            <Link href="tel:">
              <span>phone</span>
              <span>phone</span>
            </Link> */}
            <Link href={`mailto:${WEBSITE_EMAIL}`}>
              <span>{WEBSITE_EMAIL}</span>
              <span>{WEBSITE_EMAIL}</span>
            </Link>
          </div>
        </div>

        <div className={`${styles.header__submenu} ${isSubmenuOpen ? styles.open : ''}`}>
          <Link href="#">{t('marketing-recovery', { fallback: 'Marketing Recovery' })}</Link>
          <span>|</span>
          <Link href="#">{t('insights', { fallback: 'Insights' })}</Link>
          <span>|</span>
          <Link href="#">{t('about-us', { fallback: 'About Us' })}</Link>
        </div>
      </div>
      <div className={`${styles.header__mobile_menu} ${isMobileMenuOpen ? styles.open : ''}`}>
        <nav>
          <Link href="#">{t('services', { fallback: 'Services' })}</Link>
          <hr />
          <Link href="#">{t('solutions', { fallback: 'Solutions' })}</Link>
          <hr />
          <Link href="/marketing-constructor">{t('constructor', { fallback: 'Constructor' })}</Link>
          <hr />
          <Link href="#">{t('marketing-recovery', { fallback: 'Marketing Recovery' })}</Link>
          <hr />
          <Link href="#">{t('insights', { fallback: 'Insights' })}</Link>
          <hr />
          <Link href="#">{t('about-us', { fallback: 'About Us' })}</Link>
        </nav>
        <div className={styles.header__mobile_menu_contact}>
          {/* TODO: add phone
          <Link href="tel:">
            <span>phone</span>
          </Link> */}
          <Link href={`mailto:${WEBSITE_EMAIL}`}>
            <span>{WEBSITE_EMAIL}</span>
          </Link>
          <div className={styles.header__mobile_menu_contact_social}>
            <Link href="#">
              <Image src="/socials/x.svg" alt="X" width={32} height={32} />
            </Link>
            <Link href="#">
              <Image src="/socials/facebook.svg" alt="Facebook" width={32} height={32} />
            </Link>
            <Link href="#">
              <Image src="/socials/instagram.svg" alt="Instagram" width={32} height={32} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
