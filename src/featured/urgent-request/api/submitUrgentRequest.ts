import type { UrgentRequestValues } from '../model/UrgentRequestSchema';

export const submitUrgentRequest = async (data: UrgentRequestValues) => {
  const res = await fetch('/api/urgent-request', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error('Submission failed');
  }
};
