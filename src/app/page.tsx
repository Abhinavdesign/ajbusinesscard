'use client';

import React, { useState, useEffect, useRef } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Logo from './components/Logo';
import ArrowAnimation from './components/ArrowAnimation';
import TextWithStyle from './components/TextWithStyle';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

const Home: NextPage = () => {
  const [loading, setLoading] = useState(true);
  const imagesToLoad = useRef(1); // Start with 1 to account for initial state

  const handleImageLoad = () => {
    imagesToLoad.current -= 1;
    if (imagesToLoad.current === 0) {
      setLoading(false);
    }
  };

  useEffect(() => {
    const handleLoad = () => {
      console.log('Page fully loaded');
      setLoading(false);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);

      return () => {
        window.removeEventListener('load', handleLoad);
      };
    }
  }, []);

  // Increase the count for each image you want to track
  useEffect(() => {
    imagesToLoad.current += 1;
  }, []);

  return (
    <>
      <Head>
        <title>Homepage</title>
        <meta name="description" content="Sample homepage" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </Head>
      {loading && <Preloader />}
      <div style={{ display: loading ? 'none' : 'block', overflowX: 'auto', overflowY: 'hidden', width: '100vw', height: '100vh', backgroundColor: 'grey' }}>
        <div
          style={{
            position: 'relative',
            height: '100%',
            width: 'calc(100vh * 16 / 9)', // Ensure the container width maintains the aspect ratio
          }}
        >
          <Image
            src="/Learn with us.png"
            alt="Learn with Us"
            fill
            unoptimized
            onLoad={handleImageLoad}
            style={{ objectFit: 'cover' }}
          />
          <Logo />
          <div style={{ position: 'absolute', top: '50%', right: '7rem', transform: 'translateY(-50%)' }}>
            <ArrowAnimation />
          </div>
          <div style={{ position: 'absolute', top: '5rem', right: '5rem' }} className="green-neon-text">
            We are open
          </div>
          <TextWithStyle />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
