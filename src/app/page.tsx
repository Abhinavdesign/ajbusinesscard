import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Logo from './components/Logo';
import ArrowAnimation from './components/ArrowAnimation';
import TextWithStyle from './components/TextWithStyle';
import Footer from './components/Footer';

const Home: NextPage = () => {
  return (
    <div 
      className="relative w-screen h-screen" 
      style={{ overflowX: 'auto', overflowY: 'hidden' }}
    >
      <Head>
        <title>Homepage</title>
        <meta name="description" content="Sample homepage" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div
        className="relative flex justify-center items-center"
        style={{
          height: '100vh',
          width: 'calc(100vh * (16 / 9))',
          minWidth: '100vw',
        }}
      >
        <Image
          src="/Learn with us.png"
          alt="Learn with Us"
          layout="fill"
          objectFit="cover"
          style={{ position: 'absolute', top: 0, left: 0 }}
        />
        <Logo />
        <Image
          src="/Aj.png"
          alt="Aj Image"
          width={125}
          height={125}
          className="absolute"
          style={{ top: '0rem', left: '9rem' }} // Adjust the size and position accordingly
        />
        <TextWithStyle />
        <div className="absolute" style={{ top: '3rem', right: '5rem' }}>
          <div className="green-neon-text">We are open</div>
        </div>
        <div className="absolute" style={{ top: '50%', right: '10rem', transform: 'translateY(-50%)' }}>
          <ArrowAnimation />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
