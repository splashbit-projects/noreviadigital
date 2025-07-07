'use client';

import { useEffect, useRef, useState } from 'react';
import { useParams } from 'next/navigation';

import { motion } from 'framer-motion';
import { useLenis } from 'lenis/react';

import { fadeInUp } from '@/shared/lib/helpers/animations';
import { servicesEn } from '@/shared/lib/services/services-en';
import { servicesEs } from '@/shared/lib/services/services-es';

import styles from './ServicesTabs.module.scss';

import { useProposalFormStore } from '@/featured/marketing-constructor-proposal/model/ProposalFormStore';

export const ServicesTabs = () => {
  const { locale } = useParams();

  const services = locale === 'en' ? servicesEn : servicesEs;

  const [activeTab, setActiveTab] = useState(services[0].title);
  const { selectedServices, setSelectedServices } = useProposalFormStore();
  const lenis = useLenis();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const divRefs = useRef<HTMLDivElement[]>([]);
  const contentRefs = useRef<HTMLDivElement[]>([]);
  const [contentHeights, setContentHeights] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Measure content heights after render
  useEffect(() => {
    const heights: { [key: string]: number } = {};
    contentRefs.current.forEach((ref, index) => {
      if (ref) {
        heights[services[index].title] = ref.scrollHeight;
      }
    });
    setContentHeights(heights);
  }, [services]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    if (!isMobile) {
      const rect = divRefs.current[index].getBoundingClientRect();
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  };

  const handleMouseEnter = (index: number) => {
    if (!isMobile) {
      setHoveredIndex(index);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setHoveredIndex(null);
    }
  };

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  const handleServiceToggle = (service: { id: string; name: string }) => {
    const isSelected = selectedServices.some((item) => item.id === service.id);
    if (isSelected) {
      setSelectedServices(selectedServices.filter((item) => item.id !== service.id));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      lenis?.resize(); // lenis?.raf(performance.now());
    }, 50);

    return () => clearTimeout(timeout);
  }, [activeTab, lenis]);

  return (
    <div className={styles.servicesTabs}>
      {services.map((service, index) => (
        <>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            key={index}
            className={`${styles.servicesTabs__tab} ${activeTab === service.title ? styles.active : ''}`}
            onClick={() => handleTabClick(service.title)}
            ref={(el) => {
              if (el) {
                divRefs.current[index] = el;
              }
            }}
            onMouseMove={(e: React.MouseEvent<HTMLDivElement>) => handleMouseMove(e, index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {activeTab !== service.title && (
              <video
                src={service.video}
                autoPlay
                muted
                loop
                width={192}
                height={108}
                style={{
                  left: hoveredIndex === index && !isMobile ? `${mousePos.x - 96}px` : '-100px',
                  top: hoveredIndex === index && !isMobile ? `${mousePos.y - 54}px` : '-100px',
                  opacity: hoveredIndex === index ? 1 : 0,
                  transition: 'transform 1s ease-out, opacity 0.2s ease-out ',
                }}
              />
            )}
            <div className={styles.servicesTabs__tabHead}>
              <span>{service.title}</span>
            </div>
            <div
              className={styles.servicesTabs__tabContent}
              style={{
                height: activeTab === service.title ? `${contentHeights[service.title] || 0}px` : 0,
                overflow: 'hidden',
                transition: 'height 0.3s ease-in-out',
              }}
              ref={(el) => {
                if (el) {
                  contentRefs.current[index] = el;
                }
              }}
            >
              {service.data.map((item) => (
                <label key={item.id}>
                  <input
                    type="checkbox"
                    name={'service'}
                    value={item.name}
                    checked={selectedServices.some((service) => service.id === item.id)}
                    onChange={() => handleServiceToggle(item)}
                  />
                  <span>{item.name}</span>
                </label>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ width: '0%' }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            className={styles.divider}
            transition={{
              duration: 1.5,
              ease: 'easeInOut',
            }}
          ></motion.div>
        </>
      ))}
    </div>
  );
};
