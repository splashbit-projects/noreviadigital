'use client';

import { type ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { useLocale } from 'next-intl';

import st from './LangSwitcher.module.scss';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'et', name: 'Estonian' },
  { code: 'de', name: 'German' },
  { code: 'it', name: 'Italian' },
];

export const LangSwitcher = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();

  useEffect(() => setOpen(false), [pathname]);

  const switchLanguage = useCallback(
    (newLocale: string) => {
      const segments = pathname.split('/');
      const supportedLocales = languages.map((l) => l.code);
      let newPathSegments = segments;
      if (supportedLocales.includes(segments[1])) {
        newPathSegments = ['', ...segments.slice(2)];
      }
      const newPath = newPathSegments.join('/') || '/';
      router.replace(`/${newLocale}${newPath.startsWith('/') ? newPath : '/' + newPath}`);
    },
    [router, pathname]
  );

  const currentLanguage = useMemo(
    () => languages.find((language) => language.code === locale)?.name,
    [locale]
  );

  return (
    <DropdownMenu.Root open={open} onOpenChange={setOpen}>
      <DropdownMenu.Trigger className={st.trigger}>
        <span className={st.triggerInner}>
          <p>{currentLanguage}</p>
        </span>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className={st.menuContent} sideOffset={10} alignOffset={100}>
          <section className={st.menuSection}>
            {languages.map((lang) => (
              <DropdownItem
                key={lang.code}
                onClick={() => {
                  setOpen(false);
                  switchLanguage(lang.code);
                }}
              >
                {lang.name.toUpperCase()}
              </DropdownItem>
            ))}
          </section>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export const DropdownItem = ({
  children,
  onClick,
  className,
}: {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}) => {
  return (
    <DropdownMenu.Item onSelect={onClick} className={`${st.dropdownItem} ${className || ''}`}>
      {children}
    </DropdownMenu.Item>
  );
};
