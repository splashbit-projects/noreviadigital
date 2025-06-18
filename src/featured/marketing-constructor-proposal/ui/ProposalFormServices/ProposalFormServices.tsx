'use client';

import { useTranslations } from 'next-intl';

import { useProposalFormStore } from '../../model/ProposalFormStore';
import styles from './ProposalFormServices.module.scss';

export const ProposalFormServices = () => {
  const t = useTranslations('marketingConstructor');

  const selectedServices = useProposalFormStore((state) => state.selectedServices);

  return (
    <div className={styles.proposalFormServices}>
      <label>
        <span>
          {t('proposalFormServices.label', {
            fallback: 'Selected Services:',
          })}
        </span>
      </label>
      {selectedServices.length > 0 ? (
        <div className={styles.proposalFormServices__list}>
          {selectedServices.map((service) => (
            <div key={service.id}>{service.name}</div>
          ))}
        </div>
      ) : (
        <h3
          dangerouslySetInnerHTML={{
            __html: t('proposalFormServices.noServices', {
              fallback: 'No services <br/>selected',
            }),
          }}
        />
      )}
    </div>
  );
};
