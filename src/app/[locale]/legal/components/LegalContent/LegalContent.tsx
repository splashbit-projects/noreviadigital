'use client';

import { useLayoutEffect, useRef, useState } from 'react';

import { useLenis } from 'lenis/react';

import st from './LegalContent.module.scss';

export const LegalContent = ({ content }: { content: string }) => {
  const [titles, setTitles] = useState<{ [key: string]: string }>({});
  const contentRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis();

  useLayoutEffect(() => {
    if (!contentRef.current) return;

    const sections = contentRef.current.querySelectorAll('h2');
    const newTitles: { [key: string]: string } = {};

    sections.forEach((section) => {
      const id = section.getAttribute('id') || '';
      const title = section.textContent || '';
      newTitles[title] = id;
    });

    setTitles(newTitles);
  }, [content]);

  const handleTitleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element && lenis) {
      lenis.scrollTo(element, {
        offset: 0,
        duration: 1.5,
      });
    }
  };

  return (
    <section className={st.post}>
      <div className="_container">
        <div className={st.post__body}>
          <article className={st.post__article}>
            <div
              className={st.content}
              ref={contentRef}
              dangerouslySetInnerHTML={{ __html: content }}
            />
            <div className={st.navigation}>
              {Object.entries(titles).map(([title, id]) => (
                <button key={id} onClick={() => handleTitleClick(id)}>
                  {title}
                </button>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
