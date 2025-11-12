'use client';

import { useState } from 'react';
import Link from 'next/link';

import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import ReCaptcha from 'react-google-recaptcha';
import { Controller, useForm } from 'react-hook-form';

import { cn } from '@/shared/lib/helpers/styles';
import { useCountryCode } from '@/shared/lib/hooks/use-country';
import { MessageSent } from '@/shared/ui/components/message-sent/MessageSent';
import { Popup } from '@/shared/ui/components/popup';
import { Button } from '@/shared/ui/kit';
import { Dropdzone } from '@/shared/ui/kit/dropzone';
import { PhoneField } from '@/shared/ui/kit/phone-field';

import { sendContactForm } from '../../api/send-contact-form';
import { type ContactSchema, getContactSchema } from '../../model/schemas';
import styles from './ContactForm.module.scss';

export const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

  const t = useTranslations('contacts.contactForm');
  const countryCode = useCountryCode();

  const contactSchema = getContactSchema(t);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactSchema) => {
    try {
      setIsLoading(true);
      await sendContactForm(data);
      setTimeout(() => {
        setIsSuccess(true);
        reset();
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error(error);
    }
  };

  const onCaptchaVerify = (token: string | null) => {
    setIsCaptchaVerified(!!token);
  };

  return (
    <div className={styles.container}>
      <section className={styles.heading}>
        <h2>{t('title', { fallback: 'Let’s Start with the Basics' })}</h2>
        <p>
          {t('text', {
            fallback:
              'Just fill out the form below — and we’ll get back to you with clarity, ideas, or a proposal tailored to your goals.',
          })}
        </p>
      </section>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={`${styles.inputWrapper} `}>
              <label>{t('firstName.label', { fallback: 'First Name:' })}</label>
              <input
                {...register('firstName')}
                placeholder={t('firstName.placeholder', { fallback: 'Enter your first name' })}
              />
              {errors.firstName && <p className={styles.error}>{errors.firstName.message}</p>}
            </div>
            <div className={`${styles.inputWrapper} `}>
              <label>{t('email.label', { fallback: 'Email:' })}</label>
              <input
                {...register('email')}
                placeholder={t('email.placeholder', { fallback: 'Enter your email' })}
              />
              {errors.email && <p className={styles.error}>{errors.email.message}</p>}
            </div>
            <div className={styles.inputWrapper}>
              <label>{t('lastName.label', { fallback: 'Last Name:' })}</label>
              <input
                {...register('lastName')}
                placeholder={t('lastName.placeholder', { fallback: 'Enter your last name' })}
              />
              {errors.lastName && <p className={styles.error}>{errors.lastName.message}</p>}
            </div>
            <div className={`${styles.phoneWrapper}`}>
              <label>{t('phone.label', { fallback: 'Phone:' })}</label>
              <Controller
                name="phone"
                control={control}
                render={({ field }) => <PhoneField {...field} country={countryCode} />}
              />
              {errors.phone && <p className={styles.error}>{errors.phone.message}</p>}
            </div>
          </div>
          <div className={cn(styles.col, styles.columnAdd)}>
            <div className={`${styles.inputWrapper} ${styles.fullWidth}`}>
              <label>{t('projectDetails.label', { fallback: 'Project Details:' })}</label>
              <textarea
                {...register('projectDetails')}
                placeholder={t('projectDetails.placeholder', { fallback: 'Describe your details' })}
              />
              {errors.projectDetails && (
                <p className={styles.error}>{errors.projectDetails.message}</p>
              )}
            </div>
          </div>
          <div className={styles.col}>
            <div className={`${styles.inputWrapper} ${styles.fullWidth}`}>
              <label>{t('file.label', { fallback: 'Any Documents?' })}</label>
              <Controller
                name="file"
                control={control}
                render={({ field }) => (
                  <Dropdzone name="file" onDrop={field.onChange} value={field.value} />
                )}
              />
            </div>
          </div>
        </div>
        <div className={styles.buttonWrapper}>
          <div className={`${styles.checkbox}`}>
            <label>
              <input type="checkbox" {...register('consent')} />
              <span>
                {t('consent.0', { fallback: 'I agree to the' })}{' '}
                <Link href="/legal/terms-and-conditions">
                  {t('consent.1', { fallback: 'Terms and Conditions' })}
                </Link>{' '}
                {t('consent.2', { fallback: 'and' })}{' '}
                <Link href="/legal/privacy-policy">
                  {t('consent.3', { fallback: 'Privacy Policy' })}
                </Link>
                .
              </span>
            </label>
            {errors.consent && <p className={styles.error}>{errors.consent.message}</p>}
          </div>
          <ReCaptcha
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ''}
            onChange={onCaptchaVerify}
          />
          <Button
            buttonType="submit"
            color="grey"
            plus
            size="large"
            disabled={!isCaptchaVerified || isLoading}
          >
            {isLoading
              ? t('submitting', { fallback: 'Submitting...' })
              : t('button', { fallback: 'Submit Your Request' })}
          </Button>
        </div>
      </form>
      {isSuccess && (
        <Popup open={isSuccess} setOpen={setIsSuccess}>
          <MessageSent isSuccess={isSuccess} onClose={() => setIsSuccess(false)} />
        </Popup>
      )}
    </div>
  );
};
