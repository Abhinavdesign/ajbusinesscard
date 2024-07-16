import React from 'react';
import Link from 'next/link';

interface FooterCProps {
  className?: string;
}

const FooterC: React.FC<FooterCProps> = ({ className }) => {
  return (
    <footer className={`contactUsFooter ${className}`}>
      <span>© Abhinav Jha. All rights reserved.</span>
      <div className="flex space-x-4">
        <Link href="/terms-of-use" legacyBehavior>
          <a className="terms">Terms of Use</a>
        </Link>
        <Link href="/privacy-policy" legacyBehavior>
          <a className="privacy">Privacy Policy</a>
        </Link>
      </div>
    </footer>
  );
};

export default FooterC;
