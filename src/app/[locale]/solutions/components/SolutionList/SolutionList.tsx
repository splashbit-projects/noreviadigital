'use client';

import dynamic from 'next/dynamic';

import { useTranslations } from 'next-intl';

import { Transform3D } from '@/shared/ui/kit';

import st from './SolutionList.module.scss';

import type { Solution } from '@/featured/solution/model/types';
import { SolutionCard } from '@/featured/solution/ui/SolutionCard';

const SolutionPopup = dynamic(
  () => import('@/featured/solution/ui/SolutionPopup').then((mod) => mod.SolutionPopup),
  {
    ssr: false,
  }
);

export const SolutionList = () => {
  const t = useTranslations('solutionsPage.solutionList');

  const solutions: Solution[] = [
    {
      title: t('0.title', { fallback: 'Market Launch & Positioning' }),
      subtitle: t('0.subtitle', {
        fallback: 'For brands entering the market or launching a new product or service.',
      }),
      description: t('0.description', {
        fallback:
          'Lay the foundation for strong market entry with sharp positioning, cohesive branding, full-funnel execution, and high-performance campaigns tailored for visibility and growth.',
      }),
      purpose: [
        t('0.purpose0', { fallback: 'Startups' }),
        t('0.purpose1', { fallback: 'Product launches' }),
        t('0.purpose2', { fallback: 'New market entries' }),
        t('0.purpose3', { fallback: 'Businesses pivoting their positioning' }),
      ],
      price: '€20,000',
      includes: [
        t('0.includes0', { fallback: 'Positioning and Messaging Workshop' }),
        t('0.includes1', { fallback: 'Branding and Identity Development' }),
        t('0.includes2', { fallback: 'Website Analysis and Optimization' }),
        t('0.includes3', { fallback: 'Google Ads' }),
        t('0.includes4', { fallback: 'Social Media Advertising' }),
        t('0.includes5', { fallback: 'Search Engine Optimization' }),
        t('0.includes6', {
          fallback:
            'Customer Relationship Management as a Service or Email Marketing and Automation',
        }),
      ],
    },
    {
      title: t('1.title', { fallback: 'Performance Acceleration' }),
      subtitle: t('1.subtitle', {
        fallback: 'For businesses with traffic but poor conversion or underperforming campaigns.',
      }),
      description: t('1.description', {
        fallback:
          'Boost your performance with data-backed funnel diagnostics, precise conversion optimization, improved creative direction, and fully integrated retargeting workflows.',
      }),
      purpose: [
        t('1.purpose0', { fallback: 'Mid-sized businesses' }),
        t('1.purpose1', { fallback: 'Stalled funnels' }),
        t('1.purpose2', { fallback: 'Campaigns with poor ROI' }),
        t('1.purpose3', { fallback: 'Low lead flow' }),
      ],
      price: '€25,000',
      includes: [
        t('1.includes0', { fallback: 'Full Funnel Audit' }),
        t('1.includes1', { fallback: 'Pay-Per-Click Advertising' }),
        t('1.includes1', { fallback: 'Display Advertising' }),
        t('1.includes2', { fallback: 'Social Media Advertising' }),
        t('1.includes3', { fallback: 'Conversion Rate Optimization' }),
        t('1.includes4', { fallback: 'Landing Page A/B Testing Setup' }),
        t('1.includes5', { fallback: 'Ad Creative Strategy Pack' }),
        t('1.includes6', { fallback: 'Video Ad Scriptwriting & Direction' }),
        t('1.includes7', { fallback: 'UTM Strategy & Implementation' }),
        t('1.includes8', { fallback: 'Analytics Dashboard Setup (GA4 + Looker)' }),
        t('1.includes9', {
          fallback: 'Email Marketing and Automation or Programmatic Retargeting',
        }),
        t('1.includes10', { fallback: 'Marketing Analytics and Reporting' }),
      ],
    },
    {
      title: t('2.title', { fallback: 'Rebranding & Relaunch' }),
      subtitle: t('2.subtitle', {
        fallback: 'For established companies shifting brand identity or reaching a new audience.',
      }),
      description: t('2.description', {
        fallback:
          'Modernize your brand, align your strategy, and re-enter the market with high-impact campaigns and upgraded digital presence.',
      }),
      purpose: [
        t('2.purpose0', { fallback: 'Established businesses refreshing their image' }),
        t('2.purpose1', { fallback: 'Repositioning their offer' }),
        t('2.purpose2', { fallback: 'Expanding into new segments' }),
      ],
      price: '€30,000',
      includes: [
        t('2.includes0', { fallback: 'Brand Marketing Strategy Development' }),
        t('2.includes1', { fallback: 'Branding and Identity Development' }),
        t('2.includes2', { fallback: 'Social Media Management and Strategy' }),
        t('2.includes3', { fallback: 'Content Marketing and Strategy' }),
        t('2.includes4', { fallback: 'Search Engine Optimization' }),
        t('2.includes5', { fallback: 'Website Analysis and Optimization' }),
        t('2.includes6', {
          fallback: 'Influencer Marketing Strategy or Public Relations and Media Outreachs',
        }),
        t('2.includes7', { fallback: 'Paid Campaigns (Google Ads + Social Media Advertising)' }),
        t('2.includes8', { fallback: 'Marketing Analytics and Reporting' }),
        t('2.includes9', { fallback: 'Positioning and Messaging Workshop' }),
      ],
    },
    {
      title: t('3.title', { fallback: 'Digital Transformation in Marketing' }),
      subtitle: t('3.subtitle', {
        fallback: 'For traditional or offline-first businesses adopting digital marketing.',
      }),
      description: t('3.description', {
        fallback:
          'Build a modern marketing engine with the right systems, automation, analytics, and foundational campaigns to scale sustainably.',
      }),
      purpose: [
        t('3.purpose0', { fallback: 'Offline-first companies' }),
        t('3.purpose1', { fallback: 'Local businesses' }),
        t('3.purpose2', { fallback: 'Traditional agencies transitioning into digital channels' }),
      ],
      price: '€35,000',
      includes: [
        t('3.includes0', { fallback: 'Marketing Automation and Workflow Optimization' }),
        t('3.includes1', { fallback: 'CRM Setup and Customization' }),
        t('3.includes2', {
          fallback: 'Paid Acquisition Plan (Google Ads + Social Media Advertising + Display)',
        }),
        t('3.includes3', { fallback: 'Content Marketing Foundation' }),
        t('3.includes4', { fallback: 'Search Engine Optimization' }),
        t('3.includes5', { fallback: 'Pixel, UTM, and Conversion Tracking Setup' }),
        t('3.includes6', { fallback: 'Analytics Dashboard (GA4 + Looker)' }),
        t('3.includes7', { fallback: 'Website Analysis and UX Optimization' }),
        t('3.includes8', { fallback: 'Custom Team Training' }),
        t('3.includes9', { fallback: 'Branding and Identity Update' }),
        t('3.includes10', { fallback: 'Email Deliverability Fix' }),
        t('3.includes11', { fallback: 'MarTech Stack Optimization' }),
      ],
    },
    {
      title: t('4.title', { fallback: 'Audience Expansion & Demand Generation' }),
      subtitle: t('4.subtitle', {
        fallback: 'For scaling brands ready to reach new audiences and increase demand.',
      }),
      description: t('4.description', {
        fallback:
          'Scale acquisition through strategic full-funnel targeting, optimized messaging, and performance marketing designed to convert and retain high-value customers.',
      }),
      price: '€38,000',
      purpose: [
        t('4.purpose0', { fallback: 'Growth-stage businesses' }),
        t('4.purpose1', { fallback: 'Expanding startups' }),
        t('4.purpose2', { fallback: 'Companies launching into new verticals or regions' }),
      ],
      includes: [
        t('4.includes0', { fallback: 'Full Funnel Audit' }),
        t('4.includes1', { fallback: 'Google Ads' }),
        t('4.includes2', { fallback: 'Programmatic Advertising' }),
        t('4.includes2', { fallback: 'Social Media Advertising' }),
        t('4.includes3', { fallback: 'Influencer Marketing' }),
        t('4.includes4', { fallback: 'Event Marketing' }),
        t('4.includes5', { fallback: 'Content Marketing and Strategy' }),
        t('4.includes6', { fallback: 'Brand Marketing Strategy Development' }),
        t('4.includes7', { fallback: 'Conversion Rate Optimization' }),
        t('4.includes8', { fallback: 'Ad Creative Strategy Pack' }),
        t('4.includes9', { fallback: 'Email Marketing and Automation' }),
        t('4.includes10', { fallback: 'UTM Strategy & Implementation' }),
        t('4.includes11', { fallback: 'Analytics Dashboard Setup' }),
        t('4.includes12', { fallback: 'Pixel & Conversion Tracking Setups' }),
        t('4.includes13', { fallback: 'Market Research and Analysis' }),
        t('4.includes14', { fallback: 'Landing Page A/B Testing Setup' }),
      ],
    },
    {
      title: t('5.title', { fallback: 'Crisis Recovery & Marketing Reset' }),
      subtitle: t('5.subtitle', {
        fallback: 'For businesses that need to recover from failed campaigns or drops in revenue.',
      }),
      description: t('5.description', {
        fallback:
          'Audit, fix, and rebuild your marketing from the ground up. We focus on what went wrong, what to improve, and how to recover sustainably — with clear ROI metrics and stable execution.',
      }),
      price: '€23,000',
      purpose: [
        t('5.purpose0', { fallback: 'Brands burned by previous agencies' }),
        t('5.purpose1', { fallback: 'mismanaged campaigns' }),
        t('5.purpose2', { fallback: 'disrupted by shifting markets' }),
      ],
      includes: [
        t('5.includes0', { fallback: 'Marketing Readiness Audit' }),
        t('5.includes1', { fallback: 'Offer Optimization Consultation' }),
        t('5.includes2', { fallback: 'Google Ads (Revamp)' }),
        t('5.includes2', { fallback: 'Social Media Advertising (Revamp)' }),
        t('5.includes3', { fallback: 'Website Analysis and Optimization' }),
        t('5.includes4', { fallback: 'Email Deliverability Fix' }),
        t('5.includes5', { fallback: 'Pixel & Conversion Tracking Setup' }),
        t('5.includes6', { fallback: 'Executive Marketing Briefing (Monthly – 2 months)' }),
      ],
    },
  ];

  return (
    <div className="_container">
      <section className={st.cards}>
        {solutions.map((solution) => (
          <Transform3D key={solution.title}>
            <SolutionLayout {...solution} />
          </Transform3D>
        ))}
      </section>
      <SolutionPopup />
    </div>
  );
};

const SolutionLayout = (props: Solution) => (
  <article className={st.cardLayout}>
    <SolutionCard {...props} />
  </article>
);
