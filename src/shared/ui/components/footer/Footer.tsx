'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useTranslations } from 'next-intl';

import { Facebook, Instagram, X } from '../../icons';
import styles from './Footer.module.scss';

export const Footer = () => {
  const t = useTranslations('footer');
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__col1}>
          <Image src="/images/footer/footer.svg" alt="logo" width={395} height={200} />
          <p
            dangerouslySetInnerHTML={{
              __html: t('text', {
                fallback: 'Norevia Digital <br/> Marketing That Fixes, Builds, and Grows',
              }),
            }}
          />
        </div>
        <div className={styles.footer__col2}>
          <div className={styles.item}>
            <h5>{t('socialMedia', { fallback: 'Social Media:' })}</h5>
            <div>
              <Link href="#" target="_blank">
                <X />
              </Link>
              <Link href="#" target="_blank">
                <Facebook />
              </Link>
              <Link href="#" target="_blank">
                <Instagram />
              </Link>
            </div>
          </div>
          <div className={styles.item}>
            <h5>{t('phone', { fallback: 'Phone:' })}</h5>
            <Link href="tel:+1 000 00 00">+1 000 00 00</Link>
          </div>
          <div className={styles.item}>
            <h5>{t('email', { fallback: 'Email:' })}</h5>
            <Link href="mailto:info@noreviadigital.com">info@noreviadigital.com</Link>
          </div>
          <div className={styles.item}>
            <h5>{t('registeredAddress', { fallback: 'Registered Address:' })}</h5>
            <span>Harju maakond, Tallinn, Kesklinna linnaosa, Liivamäe tn 8-7, 10113</span>
          </div>
          <div className={styles.item}>
            <h5>{t('officeAddress', { fallback: 'Office Address:' })}</h5>
            <span>Harju maakond, Tallinn, Kesklinna linnaosa, Liivamäe tn 8-7, 10113</span>
          </div>
        </div>
        <div className={styles.footer__col3}>
          <div className={styles.menu}>
            <div>
              <h5>{t('explore', { fallback: 'Explore' })}</h5>
              <Link href="#">{t('services', { fallback: 'Services' })}</Link>
              <Link href="#">{t('solutions', { fallback: 'Solutions' })}</Link>
              <Link href="#">{t('insights', { fallback: 'Insights' })}</Link>
            </div>
            <div>
              <h5>{t('company', { fallback: 'Company' })}</h5>
              <Link href="#">{t('about', { fallback: 'About' })}</Link>
              <Link href="#">{t('contact', { fallback: 'Contact' })}</Link>
              <Link href="#">{t('legal', { fallback: 'Legal' })}</Link>
            </div>
            <div>
              <h5>{t('tools', { fallback: 'Tools' })}</h5>
              <Link href="#">{t('constructor', { fallback: 'Constructor' })}</Link>
              <Link href="#">{t('recovery', { fallback: 'Recovery' })}</Link>
              <Link href="#">{t('requestBrief', { fallback: 'Request Brief' })}</Link>
            </div>
          </div>
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
