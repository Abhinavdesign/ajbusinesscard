'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import FooterC from '../components/FooterC'; // Import the new FooterC component
import DownloadModal from '../components/DownloadModal'; // Import the DownloadModal component
import Image from 'next/image'; // Import Image from next/image
import './contactus.css';// Import the scoped CSS

const ContactUs: React.FC = () => {
  const [showDownloadModal, setShowDownloadModal] = useState(false);

  useEffect(() => {
    // Adjust styles if necessary on initial render and resize
    const adjustStyles = () => {
      const icons = document.querySelectorAll('.top-icon') as NodeListOf<HTMLElement>;
      const viewportWidth = window.innerWidth;
      icons.forEach(icon => {
        if (viewportWidth <= 600) {
          icon.style.width = '30px';
          icon.style.height = '30px';
        } else {
          icon.style.width = '40px';
          icon.style.height = '40px';
        }
      });
    };

    adjustStyles();
    window.addEventListener('resize', adjustStyles);

    return () => {
      window.removeEventListener('resize', adjustStyles);
    };
  }, []);

  useEffect(() => {
    // Ensure phone and email icons are styled correctly on mount
    const icons = document.querySelectorAll('.icon') as NodeListOf<HTMLElement>;
    const adjustIconStyles = () => {
      const viewportWidth = window.innerWidth;
      icons.forEach(icon => {
        if (viewportWidth <= 768) {
          icon.style.width = '100px';
          icon.style.height = '100px';
        } else if (viewportWidth <= 1024) {
          icon.style.width = '120px';
          icon.style.height = '120px';
        } else {
          icon.style.width = '150px';
          icon.style.height = '150px';
        }
      });
    };

    adjustIconStyles();
    window.addEventListener('resize', adjustIconStyles);

    return () => {
      window.removeEventListener('resize', adjustIconStyles);
    };
  }, []);

  const handleDownloadClick = () => {
    setShowDownloadModal(true);
  };

  const handleCloseModal = () => {
    setShowDownloadModal(false);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Brouchure.pdf'; // Adjust the path according to your setup
    link.download = 'Brouchure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowDownloadModal(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: '100vw' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '-100vw' }}
      transition={{ duration: 0.5 }}
      className="ContactUs relative flex flex-col justify-center items-center min-h-screen overflow-hidden"
    >
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/cherryvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="container">
        <div className="icon-group">
          <Image
            src="/Phoneicon.png"
            alt="Phone Icon"
            className="icon"
            width={80}
            height={80}
          />
          <Image
            src="/Phoneno.png"
            alt="Phone Number"
            className="text"
            width={700}
            height={150}
          />
        </div>
        <div className="icon-group">
          <Image
            src="/emailicon.png"
            alt="Email Icon"
            className="icon"
            width={80}
            height={80}
          />
          <Image
            src="/emailid.png"
            alt="Email ID"
            className="text"
            width={700}
            height={150}
          />
        </div>
      </div>
      <div className="top-icons">
        <button onClick={handleDownloadClick} className="top-icon">
          <Image
            src="/download.png"
            alt="Download Icon"
            width={30}
            height={30}
          />
        </button>
        <Link href="/project" legacyBehavior>
          <a>
            <Image
              src="/projecticon.png"
              alt="Project Icon"
              className="top-icon"
              width={30}
              height={30}
            />
          </a>
        </Link>
        <Link href="/" legacyBehavior>
          <a>
            <Image
              src="/home.png"
              alt="Home Icon"
              className="top-icon"
              width={30}
              height={30}
            />
          </a>
        </Link>
      </div>
      <div className="footer-container">
        <FooterC />
      </div>
      {showDownloadModal && (
        <DownloadModal onClose={handleCloseModal} onDownload={handleDownload} />
      )}
    </motion.div>
  );
};

export default ContactUs;