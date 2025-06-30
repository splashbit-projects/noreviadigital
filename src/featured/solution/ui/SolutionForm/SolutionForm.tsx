'use client';

import { useState } from 'react';
import Link from 'next/link';

import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { Controller, useForm } from 'react-hook-form';

import { Button } from '@/shared/ui/kit';
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@/shared/ui/kit/dropdown';

import { sendSolutionRequest } from '../../api/send-solution-request';
import { type SolutionFormSchema, solutionFormSchema } from '../../model/schemas';
import styles from './SolutionForm.module.scss';

export const SolutionForm = ({ onSuccess }: { onSuccess?: () => void }) => {
  const t = useTranslations('urgentRequest');
  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SolutionFormSchema>({
    resolver: zodResolver(solutionFormSchema),
  });

  const onSubmit = async (data: SolutionFormSchema) => {
    try {
      setIsLoading(true);
      await sendSolutionRequest(data);
      setTimeout(() => {
        onSuccess?.();
        reset();
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error(error);
    }
  };

  const industries = [
    'Technology',
    'Finance',
    'eCommerce & Retail',
    'Real Estate',
    'Healthcare',
    'Education',
    'Professional Services',
    'Travel & Hospitality',
    'Manufacturing',
    'Other',
  ];

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
              <input {...register('industry')} placeholder="Enter your website" />
              {errors.industry && <p className={styles.error}>{errors.industry.message}</p>}
            </div>
            <div className={`${styles.inputWrapper} `}>
              <label>
                {t('companyName.label', {
                  fallback: 'Company:',
                })}
              </label>

              <input
                {...register('website')}
                placeholder={t('companyName.placeholder', {
                  fallback: 'Enter your company name',
                })}
              />
              {errors.website && <p className={styles.error}>{errors.website.message}</p>}
            </div>
            <div className={styles.inputWrapper}>
              <label>
                {t('email.label', {
                  fallback: 'Email:',
                })}
              </label>
              <input {...register('company')} placeholder="Enter your email" />
              {errors.company && <p className={styles.error}>{errors.company.message}</p>}
            </div>
            <div className={styles.inputWrapper}>
              <label>
                {t('phone.label', {
                  fallback: 'Phone:',
                })}
              </label>
              <input {...register('email')} placeholder="Enter your phone" />
              {errors.email && <p className={styles.error}>{errors.email.message}</p>}
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.inputWrapper} style={{ width: '100%' }}>
              <label>Industry:</label>
              <Controller
                name="industry"
                control={control}
                render={({ field }) => (
                  <Dropdown>
                    <DropdownTrigger>
                      {field.value ? field.value : 'Select your industry'}
                    </DropdownTrigger>
                    <DropdownMenu>
                      {industries.map((item) => (
                        <DropdownItem
                          key={item}
                          onSelect={(e) => {
                            e.preventDefault();
                            field.onChange(item);
                          }}
                        >
                          {item}
                        </DropdownItem>
                      ))}
                    </DropdownMenu>
                  </Dropdown>
                )}
              />
              {errors.industry && <p className={styles.error}>{errors.industry.message}</p>}
            </div>
            <div className={`${styles.inputWrapper} ${styles.fullWidth}`}>
              <label>
                {t('description.label', {
                  fallback: 'What is going wrong right now?',
                })}
              </label>
              <textarea
                {...register('phone')}
                placeholder={t('description.placeholder', {
                  fallback: 'Describe your case',
                })}
              />
              {errors.phone && <p className={styles.error}>{errors.phone.message}</p>}
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
