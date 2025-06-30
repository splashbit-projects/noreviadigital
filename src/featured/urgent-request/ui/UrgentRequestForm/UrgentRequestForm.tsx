'use client';

import { useState } from 'react';
import Link from 'next/link';

import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';

import { Button } from '@/shared/ui/kit';

import { submitUrgentRequest } from '../../api/submitUrgentRequest';
import styles from './UrgentRequestForm.module.scss';

import {
  urgentRequestSchema,
  type UrgentRequestValues,
  useUrgentRequestStore,
} from '@/featured/urgent-request';

export const UrgentRequestForm = () => {
  const t = useTranslations('urgentRequest');
  const { setIsSuccess } = useUrgentRequestStore();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UrgentRequestValues>({
    resolver: zodResolver(urgentRequestSchema),
  });

  const onSubmit = (data: UrgentRequestValues) => {
    console.log(data);
    try {
      setIsLoading(true);
      submitUrgentRequest(data);
      setTimeout(() => {
        setIsSuccess(true);
        reset();
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={`${styles.inputWrapper} `}>
              <label>
                {t('firstName.label', {
                  fallback: 'First Name:',
                })}
              </label>

              <input
                {...register('firstName')}
                placeholder={t('firstName.placeholder', {
                  fallback: 'Enter your first name',
                })}
              />
              {errors.firstName && <p className={styles.error}>{errors.firstName.message}</p>}
            </div>
            <div className={`${styles.inputWrapper} `}>
              <label>
                {t('lastName.label', {
                  fallback: 'Last Name:',
                })}
              </label>

              <input
                {...register('lastName')}
                placeholder={t('lastName.placeholder', {
                  fallback: 'Enter your last name',
                })}
              />
              {errors.lastName && <p className={styles.error}>{errors.lastName.message}</p>}
            </div>
            <div className={styles.inputWrapper}>
              <label>
                {t('website.label', {
                  fallback: 'Website:',
                })}
              </label>
              <input
                {...register('website')}
                placeholder={t('website.placeholder', {
                  fallback: 'Enter your website',
                })}
              />
              {errors.website && <p className={styles.error}>{errors.website.message}</p>}
            </div>
            <div className={`${styles.inputWrapper} `}>
              <label>
                {t('companyName.label', {
                  fallback: 'Company:',
                })}
              </label>

              <input
                {...register('companyName')}
                placeholder={t('companyName.placeholder', {
                  fallback: 'Enter your company name',
                })}
              />
              {errors.companyName && <p className={styles.error}>{errors.companyName.message}</p>}
            </div>
            <div className={styles.inputWrapper}>
              <label>
                {t('email.label', {
                  fallback: 'Email:',
                })}
              </label>
              <input {...register('email')} placeholder="Enter your email" />
              {errors.email && <p className={styles.error}>{errors.email.message}</p>}
            </div>
            <div className={styles.inputWrapper}>
              <label>
                {t('phone.label', {
                  fallback: 'Phone:',
                })}
              </label>
              <input {...register('phone')} placeholder="Enter your phone" />
              {errors.phone && <p className={styles.error}>{errors.phone.message}</p>}
            </div>
          </div>
          <div className={styles.col}>
            <div className={`${styles.inputWrapper} ${styles.fullWidth}`}>
              <label>
                {t('description.label', {
                  fallback: 'What is going wrong right now?',
                })}
              </label>
              <textarea
                {...register('description')}
                placeholder={t('description.placeholder', {
                  fallback: 'Describe your case',
                })}
              />
              {errors.description && <p className={styles.error}>{errors.description.message}</p>}
            </div>
          </div>
        </div>

        <div className={styles.buttonWrapper}>
          <div className={`${styles.checkbox}`}>
            <label>
              <input type="checkbox" {...register('consent')} />
              <span>
                I agree to the processing of my personal data for the purpose of handling my
                request, in accordance with the{' '}
                <Link href="/legal/privacy-policy">Privacy Policy</Link>.
              </span>
            </label>
            {errors.consent && <p className={styles.error}>{errors.consent.message}</p>}
          </div>
          <Button buttonType="submit" color="grey" plus size="large">
            {isLoading ? 'Submitting...' : 'Submit'}
          </Button>
        </div>
      </form>
    </>
  );
};
