'use client';

import dynamic from 'next/dynamic';

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
  const solutions: Solution[] = [
    {
      title: 'Market Launch & Positioning',
      subtitle: 'For brands entering the market or launching a new product or service.',
      description:
        'Lay the foundation for strong market entry with sharp positioning, cohesive branding, full-funnel execution, and high-performance campaigns tailored for visibility and growth.',
      purpose: [
        'Startups',
        'Product launches',
        'New market entries',
        'Businesses pivoting their positioning',
      ],
      price: '€20,000',
      includes: [
        'Positioning and Messaging Workshop',
        'Branding and Identity Development',
        'Website Analysis and Optimization',
        'Google Ads',
        'Social Media Advertising',
        'Search Engine Optimization',
        'Customer Relationship Management as a Service or Email Marketing and Automation',
      ],
    },
    {
      title: 'Performance Acceleration',
      subtitle: 'For businesses with traffic but poor conversion or underperforming campaigns.',
      description:
        'Boost your performance with data-backed funnel diagnostics, precise conversion optimization, improved creative direction, and fully integrated retargeting workflows.',
      purpose: [
        'Mid-sized businesses',
        'Stalled funnels',
        'Campaigns with poor ROI',
        'Low lead flow',
      ],
      price: '€25,000',
      includes: [
        'Full Funnel Audit',
        'Pay-Per-Click Advertising',
        'Display Advertising',
        'Social Media Advertising',
        'Conversion Rate Optimization',
        'Landing Page A/B Testing Setup',
        'Ad Creative Strategy Pack',
        'Video Ad Scriptwriting & Direction',
        'UTM Strategy & Implementation',
        'Analytics Dashboard Setup (GA4 + Looker)',
        'Email Marketing and Automation or Programmatic Retargeting',
        'Marketing Analytics and Reporting',
      ],
    },
    {
      title: 'Rebranding & Relaunch',
      subtitle: 'For established companies shifting brand identity or reaching a new audience.',
      description:
        'Modernize your brand, align your strategy, and re-enter the market with high-impact campaigns and upgraded digital presence.',
      purpose: [
        'Established businesses refreshing their image',
        'Repositioning their offer',
        'Expanding into new segments',
      ],
      price: '€30,000',
      includes: [
        'Brand Marketing Strategy Development',
        'Branding and Identity Development',
        'Social Media Management and Strategy',
        'Content Marketing and Strategy',
        'Search Engine Optimization',
        'Website Analysis and Optimization',
        'Influencer Marketing Strategy or Public Relations and Media Outreachs',
        'Paid Campaigns (Google Ads + Social Media Advertising)',
        'Marketing Analytics and Reporting',
        'Positioning and Messaging Workshop',
      ],
    },
    {
      title: 'Digital Transformation in Marketing',
      subtitle: 'For traditional or offline-first businesses adopting digital marketing.',
      description:
        'Build a modern marketing engine with the right systems, automation, analytics, and foundational campaigns to scale sustainably.',
      purpose: [
        'Offline-first companies',
        'Local businesses',
        'Traditional agencies transitioning into digital channels',
      ],
      price: '€35,000',
      includes: [
        'Marketing Automation and Workflow Optimization',
        'CRM Setup and Customization',
        'Paid Acquisition Plan (Google Ads + Social Media Advertising + Display)',
        'Content Marketing Foundation',
        'Search Engine Optimization',
        'Pixel, UTM, and Conversion Tracking Setup',
        'Analytics Dashboard (GA4 + Looker)',
        'Website Analysis and UX Optimization',
        'Custom Team Training',
        'Branding and Identity Update',
        'Email Deliverability Fix',
        'MarTech Stack Optimization',
      ],
    },
    {
      title: 'Audience Expansion & Demand Generation',
      subtitle: 'For scaling brands ready to reach new audiences and increase demand.',
      description:
        'Scale acquisition through strategic full-funnel targeting, optimized messaging, and performance marketing designed to convert and retain high-value customers.',
      price: '€38,000',
      purpose: [
        'Growth-stage businesses',
        'Expanding startups',
        'Companies launching into new verticals or regions',
      ],
      includes: [
        'Full Funnel Audit',
        'Google Ads',
        'Programmatic Advertising',
        'Social Media Advertising',
        'Influencer Marketing',
        'Event Marketing',
        'Content Marketing and Strategy',
        'Brand Marketing Strategy Development',
        'Conversion Rate Optimization',
        'Ad Creative Strategy Pack',
        'Email Marketing and Automation',
        'UTM Strategy & Implementation',
        'Analytics Dashboard Setup',
        'Pixel & Conversion Tracking Setups',
        'Market Research and Analysis',
        'Landing Page A/B Testing Setup',
      ],
    },
    {
      title: 'Crisis Recovery & Marketing Reset',
      subtitle: 'For businesses that need to recover from failed campaigns or drops in revenue.',
      description:
        'Audit, fix, and rebuild your marketing from the ground up. We focus on what went wrong, what to improve, and how to recover sustainably — with clear ROI metrics and stable execution.',
      price: '€23,000',
      purpose: [
        'Brands burned by previous agencies',
        'mismanaged campaigns',
        'disrupted by shifting markets',
      ],
      includes: [
        'Marketing Readiness Audit',
        'Offer Optimization Consultation',
        'Google Ads (Revamp)',
        'Social Media Advertising (Revamp)',
        'Website Analysis and Optimization',
        'Email Deliverability Fix',
        'Pixel & Conversion Tracking Setup',
        'Executive Marketing Briefing (Monthly – 2 months)',
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
