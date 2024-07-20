// Rest of your imports...
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Logo from './components/Logo';
import ArrowAnimation from './components/ArrowAnimation';
import TextWithStyle from './components/TextWithStyle';
import Footer from './components/Footer';

const Home: NextPage = () => {
  return (
    <div style={{ overflowX: 'auto', overflowY: 'hidden', width: '100vw', height: '100vh', backgroundColor: 'grey' }}>
      <Head>
        <title>Homepage</title>
        <meta name="description" content="Sample homepage" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </Head>
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
  );
};

export default Home;