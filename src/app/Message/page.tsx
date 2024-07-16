// /Users/abhinavjha/Documents/cherry-business-card/src/app/Message/page.tsx
'use client';

import React from 'react';
import Head from 'next/head';

const Message = () => {
  return (
    <>
      <Head>
        <title>Project Status</title>
      </Head>
      <div className="h-screen w-screen bg-purple-200 flex items-center justify-center">
        <h1 className="text-base md:text-lg lg:text-xl font-sans font-bold text-center text-black">
          The project is either building or in pre-build phase.
        </h1>
      </div>
    </>
  );
};

export default Message;
