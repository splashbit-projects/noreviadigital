import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'de', 'it', 'et'],
  localePrefix: 'as-needed',
  defaultLocale: 'et',
});
