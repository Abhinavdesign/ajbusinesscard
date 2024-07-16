// src/app/components/ArrowAnimation.tsx
'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const ArrowAnimation: React.FC = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/project');
  };

  return (
    <div className="relative flex flex-col items-center cursor-pointer" onClick={handleClick}>
      <div className="text-xl text-white flex">
        <span className="arrow-animate-1">{'>'}</span>
        <span className="arrow-animate-2">{'>'}</span>
        <span className="arrow-animate-3">{'>'}</span>
      </div>
      <div className="stylish-projects-text mt-1">PROJECTS</div>
    </div>
  );
};

export default ArrowAnimation;
