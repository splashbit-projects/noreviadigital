'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useTranslations } from 'next-intl';

import { WEBSITE_EMAIL, WEBSITE_REGISTERED_ADDRESS } from '@/shared/lib/constants/constants';

import { Linkedin } from '../../icons';
import styles from './Footer.module.scss';

import { useGeneralRequestPopup } from '@/featured/general-request/model/store';

export const Footer = () => {
  const t = useTranslations('footer');

  const { setOpen } = useGeneralRequestPopup();

  const onOpenGeneralRequestHandle = () => setOpen(true);

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__col1}>
          <Image src="/images/footer/footer.svg" alt="logo" width={395} height={200} />
          <p
            dangerouslySetInnerHTML={{
              __html: t('text', {
                fallback: 'Norevia Digital OU<br/> Marketing That Fixes, Builds, and Grows',
              }),
            }}
          />
        </div>
        <div className={styles.footer__col2}>
          <div className={styles.item}>
            <h5>{t('socialMedia', { fallback: 'Social Media:' })}</h5>
            <div>
              <Link href="#" target="_blank">
                <Linkedin />
              </Link>
            </div>
          </div>
          {/* TODO: add phone
          <div className={styles.item}>
            <h5>{t('phone', { fallback: 'Phone:' })}</h5>
            <Link href="tel:+1 000 00 00">+1 000 00 00</Link>
          </div> */}
          <div className={styles.item}>
            <h5>{t('email', { fallback: 'Email:' })}</h5>
            <Link href={`mailto:${WEBSITE_EMAIL}`}>{WEBSITE_EMAIL}</Link>
          </div>
          <div className={styles.item}>
            <h5>{t('registeredAddress', { fallback: 'Registered Address:' })}</h5>
            <span>{WEBSITE_REGISTERED_ADDRESS}</span>
          </div>
          {/* TODO: add office address
          <div className={styles.item}>
            <h5>{t('officeAddress', { fallback: 'Office Address:' })}</h5>
            <span>{WEBSITE_OFFICE_ADDRESS}</span>
          </div> */}
        </div>
        <div className={styles.footer__col3}>
          <div className={styles.menu}>
            <div>
              <h5>{t('explore', { fallback: 'Explore' })}</h5>
              <Link href="/services">
                <span>{t('services', { fallback: 'Services' })}</span>
                <span>{t('services', { fallback: 'Services' })}</span>
              </Link>
              <Link href="/solutions">
                <span>{t('solutions', { fallback: 'Solutions' })}</span>
                <span>{t('solutions', { fallback: 'Solutions' })}</span>
              </Link>
              <Link href="/marketing-recovery">
                <span>{t('recovery', { fallback: 'Recovery' })}</span>
                <span>{t('recovery', { fallback: 'Recovery' })}</span>
              </Link>
              <Link href="/marketing-constructor">
                <span>{t('constructor', { fallback: 'Constructor' })}</span>
                <span>{t('constructor', { fallback: 'Constructor' })}</span>
              </Link>
            </div>
            <div>
              <h5>{t('company', { fallback: 'Company' })}</h5>
              <Link href="/about-us">
                <span>{t('about', { fallback: 'About' })}</span>
                <span>{t('about', { fallback: 'About' })}</span>
              </Link>
              <Link href="/contacts">
                <span>{t('contact', { fallback: 'Contact' })}</span>
                <span>{t('contact', { fallback: 'Contact' })}</span>
              </Link>
              <Link href="/insights">
                <span>{t('insights', { fallback: 'Insights' })}</span>
                <span>{t('insights', { fallback: 'Insights' })}</span>
              </Link>
              <Link href="#" onClick={onOpenGeneralRequestHandle}>
                <span>{t('requestBrief', { fallback: 'Request Brief' })}</span>
                <span>{t('requestBrief', { fallback: 'Request Brief' })}</span>
              </Link>
            </div>
          </div>
          <div className={styles.legal}>
            <nav>
              <Link href="/legal/terms-and-conditions">
                {t('terms', { fallback: 'Terms & Conditions' })}
              </Link>
              <Link href="/legal/privacy-policy">
                {t('privacy', { fallback: 'Privacy Policy' })}
              </Link>
              <Link href="/legal/cookie-policy">{t('cookie', { fallback: 'Cookie Policy' })}</Link>
              <Link href="/legal/refund-policy">{t('refund', { fallback: 'Refund Policy' })}</Link>
            </nav>
            <p>
              © {new Date().getFullYear()}{' '}
              {t('copyright', {
                fallback: 'Norevia Digital OU. All rights reserved.',
              })}
            </p>
          </div>
        </div>
        <div className={styles.footer__col4}>
          <div className={styles.legal}>
            <nav>
              <Link href="#">{t('terms', { fallback: 'Terms & Conditions' })}</Link>
              <Link href="#">{t('privacy', { fallback: 'Privacy Policy' })}</Link>
              <Link href="#">{t('cookie', { fallback: 'Cookie Policy' })}</Link>
              <Link href="#">{t('refund', { fallback: 'Refund Policy' })}</Link>
            </nav>
            <p>
              © {new Date().getFullYear()}{' '}
              {t('copyright', {
                fallback: 'Norevia Digital OU. All rights reserved.',
              })}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
