'use client';

import { useState } from 'react';
import Link from 'next/link';

import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { Controller, useForm } from 'react-hook-form';

import { Button } from '@/shared/ui/kit';
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@/shared/ui/kit/dropdown';

import { sendGeneralRequest } from '../../api/send-general-request';
import { type GeneralRequestSchema, generalRequestSchema } from '../../model/schemas';
import styles from './GeneralRequestForm.module.scss';

export const GeneralRequestForm = ({ onSuccess }: { onSuccess?: () => void }) => {
  const [isLoading, setIsLoading] = useState(false);

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
  const ti = useTranslations('industries');
  const tg = useTranslations('marketingGoals');
  const tu = useTranslations('urgency');

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
    ti('0'),
    ti('1'),
    ti('2'),
    ti('3'),
    ti('4'),
    ti('5'),
    ti('6'),
    ti('7'),
    ti('8'),
    ti('9'),
  ];
  const mainMarketingGoals = [tg('0'), tg('1'), tg('2'), tg('3'), tg('4'), tg('5')];
  const urgency = [tu('0'), tu('1'), tu('2')];

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
