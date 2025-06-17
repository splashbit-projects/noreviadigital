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
              <Link href="#">
                <span>{t('services', { fallback: 'Services' })}</span>
                <span>{t('services', { fallback: 'Services' })}</span>
              </Link>
              <Link href="#">
                <span>{t('solutions', { fallback: 'Solutions' })}</span>
                <span>{t('solutions', { fallback: 'Solutions' })}</span>
              </Link>
              <Link href="#">
                <span>{t('insights', { fallback: 'Insights' })}</span>
                <span>{t('insights', { fallback: 'Insights' })}</span>
              </Link>
            </div>
            <div>
              <h5>{t('company', { fallback: 'Company' })}</h5>
              <Link href="#">
                <span>{t('about', { fallback: 'About' })}</span>
                <span>{t('about', { fallback: 'About' })}</span>
              </Link>
              <Link href="#">
                <span>{t('contact', { fallback: 'Contact' })}</span>
                <span>{t('contact', { fallback: 'Contact' })}</span>
              </Link>
              <Link href="#">
                <span>{t('legal', { fallback: 'Legal' })}</span>
                <span>{t('legal', { fallback: 'Legal' })}</span>
              </Link>
            </div>
            <div>
              <h5>{t('tools', { fallback: 'Tools' })}</h5>
              <Link href="/marketing-constructor">
                <span>{t('constructor', { fallback: 'Constructor' })}</span>
                <span>{t('constructor', { fallback: 'Constructor' })}</span>
              </Link>
              <Link href="#">
                <span>{t('recovery', { fallback: 'Recovery' })}</span>
                <span>{t('recovery', { fallback: 'Recovery' })}</span>
              </Link>
              <Link href="#">
                <span>{t('requestBrief', { fallback: 'Request Brief' })}</span>
                <span>{t('requestBrief', { fallback: 'Request Brief' })}</span>
              </Link>
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
