'use client';

import { useState } from 'react';
import Link from 'next/link';

import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { Controller, useForm } from 'react-hook-form';

import { useCountryCode } from '@/shared/lib/hooks/use-country';
import { Button } from '@/shared/ui/kit';
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@/shared/ui/kit/dropdown';
import { PhoneField } from '@/shared/ui/kit/phone-field';

import { sendGeneralRequest } from '../../api/send-general-request';
import { type GeneralRequestSchema, generalRequestSchema } from '../../model/schemas';
import styles from './GeneralRequestForm.module.scss';

export const GeneralRequestForm = ({ onSuccess }: { onSuccess?: () => void }) => {
  const [isLoading, setIsLoading] = useState(false);
  const countryCode = useCountryCode();

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<GeneralRequestSchema>({
    resolver: zodResolver(generalRequestSchema),
  });

  const t = useTranslations('solution.form');

  const onSubmit = async (data: GeneralRequestSchema) => {
    try {
      setIsLoading(true);
      await sendGeneralRequest(data);
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
    t('industries.0', { fallback: 'Technology' }),
    t('industries.1', { fallback: 'Finance' }),
    t('industries.2', { fallback: 'eCommerce & Retail' }),
    t('industries.3', { fallback: 'Real Estate' }),
    t('industries.4', { fallback: 'Healthcare' }),
    t('industries.5', { fallback: 'Education' }),
    t('industries.6', { fallback: 'Professional Services' }),
    t('industries.7', { fallback: 'Travel & Hospitality' }),
    t('industries.8', { fallback: 'Manufacturing' }),
    t('industries.9', { fallback: 'Other' }),
  ];
  const mainMarketingGoals = [
    t('marketingGoals.0', { fallback: 'Launch a new product' }),
    t('marketingGoals.1', { fallback: 'Get more leads' }),
    t('marketingGoals.2', { fallback: 'Scale existing campaigns' }),
    t('marketingGoals.3', { fallback: 'Fix underperforming marketing' }),
    t('marketingGoals.4', { fallback: 'Competition' }),
    t('marketingGoals.5', { fallback: 'Other' }),
  ];
  const urgency = [
    t('urgency.0', { fallback: 'Just exploring' }),
    t('urgency.1', { fallback: 'Planning in 2–4 weeks' }),
    t('urgency.2', { fallback: 'Ready to start this week' }),
  ];

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={`${styles.inputWrapper} `}>
              <label>
                {t('firstName.label', {
                  fallback: 'First Name',
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
              <input {...register('website')} placeholder="Enter your website" />
              {errors.website && <p className={styles.error}>{errors.website.message}</p>}
            </div>
            <div className={`${styles.inputWrapper} `}>
              <label>
                {t('companyName.label', {
                  fallback: 'Company:',
                })}
              </label>

              <input
                {...register('company')}
                placeholder={t('companyName.placeholder', {
                  fallback: 'Enter your company name',
                })}
              />
              {errors.company && <p className={styles.error}>{errors.company.message}</p>}
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
            <div className={styles.phoneWrapper}>
              <label>
                {t('phone.label', {
                  fallback: 'Phone:',
                })}
              </label>
              <Controller
                name="phone"
                control={control}
                render={({ field }) => <PhoneField {...field} country={countryCode} />}
              />
              {errors.phone && <p className={styles.error}>{errors.phone.message}</p>}
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.inputWrapper}>
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
            <div className={styles.inputWrapper}>
              <label>Urgency of Request:</label>
              <Controller
                name="urgency"
                control={control}
                render={({ field }) => (
                  <Dropdown>
                    <DropdownTrigger>
                      {field.value ? field.value : 'Select your request'}
                    </DropdownTrigger>
                    <DropdownMenu>
                      {urgency.map((item) => (
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
              {errors.urgency && <p className={styles.error}>{errors.urgency.message}</p>}
            </div>
            <div className={styles.inputWrapper}>
              <label>Main Marketing Goal:</label>
              <Controller
                name="goal"
                control={control}
                render={({ field }) => (
                  <Dropdown>
                    <DropdownTrigger>
                      {field.value ? field.value : 'Select your goal'}
                    </DropdownTrigger>
                    <DropdownMenu>
                      {mainMarketingGoals.map((item) => (
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
              {errors.goal && <p className={styles.error}>{errors.goal.message}</p>}
            </div>
          </div>
          <div className={styles.col}>
            <div className={`${styles.inputWrapper} ${styles.fullWidth}`}>
              <label>
                {t('marketingChallenge.label', {
                  fallback: 'What is going wrong right now?',
                })}
              </label>
              <textarea
                {...register('marketingChallenge')}
                placeholder={t('marketingChallenge.placeholder', {
                  fallback: 'Describe your challenge',
                })}
              />
              {errors.marketingChallenge && (
                <p className={styles.error}>{errors.marketingChallenge.message}</p>
              )}
            </div>
          </div>
        </div>
        <div className={styles.buttonWrapper}>
          <div className={`${styles.checkbox}`}>
            <label>
              <input type="checkbox" {...register('consent')} />
              <span>
                {t('consent.0', {
                  fallback:
                    'I agree to the processing of my personal data for the purpose of handling my request, in accordance with the',
                })}{' '}
                <Link href="/legal/privacy-policy">
                  {t('consent.1', {
                    fallback: 'Privacy Policy',
                  })}
                </Link>
                .
              </span>
            </label>
            {errors.consent && <p className={styles.error}>{errors.consent.message}</p>}
          </div>
          <Button buttonType="submit" color="grey" plus size="large">
            {isLoading ? t('submitting') : t('submit')}
          </Button>
        </div>
      </form>
    </>
  );
};
