// src/app/components/TextWithStyle.tsx
'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const TextWithStyle: React.FC = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/ContactUs');
  };

  return (
    <div
      className="absolute text-white text-0.5xl html-style-text cursor-pointer"
      style={{
        top: '7rem',
        left: '50%',
        transform: 'translateX(-50%)',
      }}
      onClick={handleClick}
    >
      Build your Website or Web-Application with Us
    </div>
  );
};

export default TextWithStyle;
