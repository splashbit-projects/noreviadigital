'use client';

import { useState } from 'react';
import Link from 'next/link';

import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';

import { cn } from '@/shared/lib/helpers/styles';
import { MessageSent } from '@/shared/ui/components/message-sent/MessageSent';
import { Popup } from '@/shared/ui/components/popup';
import { Button } from '@/shared/ui/kit';
import { Dropdzone } from '@/shared/ui/kit/dropzone';

import { sendContactForm } from '../../api/send-contact-form';
import { type ContactSchema, contactSchema } from '../../model/schemas';
import styles from './ContactForm.module.scss';

export const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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

  return (
    <div className={styles.container}>
      <section className={styles.heading}>
        <h2>Let’s Start with the Basics</h2>
        <p>
          Just fill out the form below — and we’ll get back to you with clarity, ideas, or a
          proposal tailored to your goals.
        </p>
      </section>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={`${styles.inputWrapper} `}>
              <label>First Name:</label>
              <input {...register('firstName')} placeholder="Enter your first name" />
              {errors.firstName && <p className={styles.error}>{errors.firstName.message}</p>}
            </div>
            <div className={`${styles.inputWrapper} `}>
              <label>Email</label>
              <input {...register('email')} placeholder="Enter your email" />
              {errors.email && <p className={styles.error}>{errors.email.message}</p>}
            </div>
            <div className={styles.inputWrapper}>
              <label>Last Name:</label>
              <input {...register('lastName')} placeholder="Enter your last name" />
              {errors.lastName && <p className={styles.error}>{errors.lastName.message}</p>}
            </div>
            <div className={`${styles.inputWrapper} `}>
              <label>Phone:</label>
              <input {...register('phone')} placeholder="Enter your phone" />
              {errors.phone && <p className={styles.error}>{errors.phone.message}</p>}
            </div>
          </div>
          <div className={cn(styles.col, styles.columnAdd)}>
            <div className={`${styles.inputWrapper} ${styles.fullWidth}`}>
              <label>Project Details</label>
              <textarea {...register('projectDetails')} placeholder="Describe your details" />
              {errors.projectDetails && (
                <p className={styles.error}>{errors.projectDetails.message}</p>
              )}
            </div>
          </div>
          <div className={styles.col}>
            <div className={`${styles.inputWrapper} ${styles.fullWidth}`}>
              <label>Tell Us What You Need</label>
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
                I agree to the <Link href="/legal/terms-and-conditions">Terms and Conditions</Link>{' '}
                and <Link href="/legal/privacy-policy">Privacy Policy</Link>.
              </span>
            </label>
            {errors.consent && <p className={styles.error}>{errors.consent.message}</p>}
          </div>
          <Button buttonType="submit" color="grey" plus size="large">
            {isLoading ? 'Submitting...' : 'Submit Your Request'}
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
