'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Link from 'next/link';

import st from './LegalContent.module.scss';

export const LegalContent = ({ content }: { content: string }) => {
  const [titles, setTitles] = useState<{ [key: string]: string }>({});
  const [activeTitle, setActiveTitle] = useState<string | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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
    setActiveTitle(id);
  };

  useEffect(() => {
    if (activeTitle) {
      const el = document.getElementById(activeTitle);
      if (el) {
        window.scrollTo({
          top: el.offsetTop,
          behavior: 'smooth',
        });
      }
    }
  }, [activeTitle]);

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
                <Link
                  href={`#${id}`}
                  key={id}
                  onClick={() => handleTitleClick(title)}
                  className={activeTitle === title ? st.active : ''}
                >
                  {title}
                </Link>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
