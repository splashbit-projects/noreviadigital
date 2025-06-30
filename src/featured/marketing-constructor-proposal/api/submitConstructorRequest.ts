import type { ProposalFormValues } from '../model/ProposalSchema';

export const submitConstructorRequest = async (data: ProposalFormValues) => {
  const res = await fetch('/api/marketing-constructor-proposal', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error('Submission failed');
  }
};
