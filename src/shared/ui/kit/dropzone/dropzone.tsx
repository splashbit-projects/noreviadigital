'use client';

import { useRef } from 'react';

import { useDropzone } from 'react-dropzone';

import st from './dropzone.module.scss';

export function Dropdzone({
  required,
  name,
  onDrop,
  value,
}: {
  required?: boolean;
  name?: string;
  onDrop?: (file: File | null) => void;
  value?: File | null;
}) {
  const hiddenInputRef = useRef<HTMLInputElement | null>(null);

  const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    multiple: false,
    onDrop: (incomingFiles) => {
      if (onDrop) {
        onDrop(incomingFiles[0] || null);
      }
    },
  });

  const file = value ?? acceptedFiles[0];

  return (
    <div className={st.container}>
      <div {...getRootProps({ className: 'dropzone' })} className={st.inner}>
        <input
          type="file"
          name={name}
          required={required}
          style={{ opacity: 0 }}
          ref={hiddenInputRef}
          {...getInputProps()}
        />
        <DownloadIcon />
        <button
          className={st.chooseFile}
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            open();
          }}
        >
          CHOOSE FILE
        </button>
        {file && <p>{file.name}</p>}
      </div>
    </div>
  );
}

const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
    <path
      d="M10.65 6.22222H15.15L9.75 11.5556L4.35 6.22222H8.85V0H10.65V6.22222ZM2.55 14.2222H16.95V8H18.75V15.1111C18.75 15.3469 18.6552 15.573 18.4864 15.7397C18.3176 15.9064 18.0887 16 17.85 16H1.65C1.41131 16 1.18239 15.9064 1.0136 15.7397C0.844821 15.573 0.75 15.3469 0.75 15.1111V8H2.55V14.2222Z"
      fill="#383838"
      fillOpacity="0.5"
    />
  </svg>
);
