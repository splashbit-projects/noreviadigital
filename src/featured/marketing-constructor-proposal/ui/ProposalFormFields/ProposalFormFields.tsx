'use client';

import { useEffect, useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';

import { Button } from '@/shared/ui/kit';

import styles from './ProposalFormFields.module.scss';

import {
  type ProposalFormValues,
  proposalSchema,
  useProposalFormStore,
} from '@/featured/marketing-constructor-proposal';

export const ProposalFormFields = () => {
  const t = useTranslations('proposalFormFields');
  const { selectedServices, setIsSuccess } = useProposalFormStore();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm<ProposalFormValues>({
    resolver: zodResolver(proposalSchema),
  });

  useEffect(() => {
    setValue('selectedServices', selectedServices.map((service) => service.name).join(','));
  }, [selectedServices, setValue]);

  const onSubmit = (data: ProposalFormValues) => {
    console.log(data);
    try {
      setIsLoading(true);
      console.log(data);
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
        <div className={styles.inputWrapper}>
          <input type="hidden" {...register('selectedServices')} />
          {errors.selectedServices && (
            <p className={styles.error}>{errors.selectedServices.message}</p>
          )}
        </div>
        <Button buttonType="submit" color="grey" plus size="large">
          {isLoading ? 'Submitting...' : 'Get Proposal'}
        </Button>
      </form>
    </>
  );
};
