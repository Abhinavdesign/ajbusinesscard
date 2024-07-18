'use client';

import React from 'react';
import Link from 'next/link';

const TextWithStyle: React.FC = () => {
  return (
    <div
      className="absolute text-white text-0.5xl html-style-text"
      style={{
        top: '7rem',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <span>Build your Website or Web-Application with Us</span>
      <Link href="/ContactUs" legacyBehavior>
        <a className="arrow"></a>
      </Link>
    </div>
  );
};

export default TextWithStyle;
