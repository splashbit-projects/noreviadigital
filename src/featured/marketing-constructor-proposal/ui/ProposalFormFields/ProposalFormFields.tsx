'use client';

import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';

import { Button } from '@/shared/ui/kit';

import styles from './ProposalFormFields.module.scss';

import {
  type ProposalFormValues,
  proposalSchema,
  useSelectedServicesStore,
} from '@/featured/marketing-constructor-proposal';

export const ProposalFormFields = () => {
  const t = useTranslations('proposalFormFields');
  const { selectedServices } = useSelectedServicesStore();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProposalFormValues>({
    resolver: zodResolver(proposalSchema),
  });

  const onSubmit = (data: ProposalFormValues) => {
    try {
      setIsLoading(true);
      console.log(data);
      setTimeout(() => {
        reset();
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form className={styles.form}>
        <div className={`${styles.inputWrapper} ${styles.fullWidth}`}>
          <label>
            {t('caseDescription.label', {
              fallback: 'Case Description:',
            })}
          </label>

          <textarea
            {...register('caseDescription')}
            placeholder={t('caseDescription.placeholder', {
              fallback: 'Describe your case',
            })}
          />
          {errors.caseDescription && (
            <p className={styles.error}>{errors.caseDescription.message}</p>
          )}
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
        <div className={`${styles.inputWrapper}`}>
          <label>
            {t('name.label', {
              fallback: 'Your Name:',
            })}
          </label>
          <input {...register('name')} placeholder="Enter your name" />
          {errors.name && <p className={styles.error}>{errors.name.message}</p>}
        </div>
        <input
          type="hidden"
          {...register('selectedServices')}
          value={selectedServices.map((service) => service.name)}
        />
        <Button buttonType="button" color="grey" plus size="large" onClick={handleSubmit(onSubmit)}>
          {isLoading ? 'Submitting...' : 'Get Proposal'}
        </Button>
      </form>
    </>
  );
};
