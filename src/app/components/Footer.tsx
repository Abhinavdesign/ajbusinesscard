import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <div className="footer absolute bottom-10 left-1/2 transform -translate-x-1/2 flex justify-between items-center text-white" style={{ width: '60%' }}>
      <span className="text-sm font-serif">&copy; Abhinav Jha. All rights reserved.</span>
      <div className="flex space-x-4">
        <Link href="/terms-of-use" legacyBehavior>
          <a className="text-sm font-serif">Terms of Use</a>
        </Link>
        <Link href="/privacy-policy" legacyBehavior>
          <a className="text-sm font-serif">Privacy Policy</a>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
