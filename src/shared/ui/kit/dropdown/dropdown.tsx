'use client';

import type {
  DropdownMenuItemProps,
  DropdownMenuTriggerProps,
} from '@radix-ui/react-dropdown-menu';
import { Content, Item, Portal, Root, Trigger } from '@radix-ui/react-dropdown-menu';
import type { ReactNode } from 'react';

import { cn } from '@/shared/lib/helpers/styles';

import st from './dropdown.module.scss';

const ArrowBottom = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M8 8.80008L11.0667 5.73342L12 6.66675L8 10.6667L4 6.66675L4.93333 5.73341L8 8.80008Z"
      fill="#0D0D0D"
      fillOpacity="0.5"
    />
  </svg>
);

export const Dropdown = Root;
export const DropdownTrigger = ({ className, children, ...args }: DropdownMenuTriggerProps) => (
  <Trigger className={cn(st.trigger, className)} {...args}>
    {children}
    <ArrowBottom />
  </Trigger>
);
export const DropdownMenu = ({ children }: { children: ReactNode }) => (
  <Portal>
    <Content className={st.content} sideOffset={6}>
      {children}
    </Content>
  </Portal>
);
export const DropdownItem = ({ children, className, ...args }: DropdownMenuItemProps) => (
  <Item className={cn(st.item, className)} {...args}>
    {children}
  </Item>
);
