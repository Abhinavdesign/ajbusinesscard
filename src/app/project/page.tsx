// /Users/abhinavjha/Documents/cherry-business-card/src/app/project/page.tsx
'use client';

import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import FooterC from '../components/FooterC'; // Adjust the path as necessary
import './project.css'; // Import the scoped CSS

const Project: NextPage = () => {
  useEffect(() => {
    const adjustFontSize = () => {
      const viewportWidth = window.innerWidth;
      const fontSize = viewportWidth * 0.03; // Adjust this value as needed
      document.documentElement.style.setProperty('--responsive-font-size', `${fontSize}px`);
    };

    adjustFontSize();
    window.addEventListener('resize', adjustFontSize);

    return () => {
      window.removeEventListener('resize', adjustFontSize);
    };
  }, []);

  return (
    <div className="relative w-screen h-screen flex flex-col justify-between">
      <Head>
        <title>Project Page</title>
        <meta name="description" content="Project page with background image" />
      </Head>
      <div className="top-right-icons">
        <Link href="/" legacyBehavior>
          <a>
            <img src="/home.png" alt="Home" className="icon" />
          </a>
        </Link>
        <Link href="/ContactUs" legacyBehavior>
          <a>
            <img src="/contact.png" alt="Contact" className="icon" />
          </a>
        </Link>
      </div>
      <div
        className="flex-grow flex items-center justify-center"
        style={{
          backgroundImage: 'url(/project.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-center text-white relative" style={{ fontFamily: 'Bungee', fontSize: 'var(--responsive-font-size)' }}>
          <h1 className="relative inline-block">
            <a href="https://postman.land" target="_blank" rel="noopener noreferrer">
              POSTMAN - LETTER MAILING APP
              <span className="trademark">®</span>
            </a>
          </h1>
          <h2 className="relative inline-block mt-10">
            <Link href="/Message" legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                GPTBargainer - AI BARGAINING BOT API FOR ECOMMERCE
                <span className="trademark">®</span>
              </a>
            </Link>
          </h2>
          <h3 className="relative inline-block mt-10">
            <Link href="/Message" legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                MAPSHOP - MAP BASED ECOMMERCE
                <span className="trademark">®</span>
              </a>
            </Link>
          </h3>
        </div>
      </div>
      <div className="footer-container">
        <FooterC className="projectFooter" />
      </div>
    </div>
  );
};

export default Project;
