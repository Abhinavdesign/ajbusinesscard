import { NextPage } from 'next';
import Head from 'next/head';
import Logo from './components/Logo';
import ArrowAnimation from './components/ArrowAnimation';
import TextWithStyle from './components/TextWithStyle';
import Footer from './components/Footer';

const Home: NextPage = () => {
  return (
    <div className="relative w-screen h-screen overflow-x-auto overflow-y-hidden">
      <Head>
        <title>Homepage</title>
        <meta name="description" content="Sample homepage" />
      </Head>
      <div
        className="relative flex justify-center items-center"
        style={{
          height: '100vh',
          width: 'calc(100vh * (16 / 9))',
          minWidth: '100vw',
        }}
      >
        <img
          src="/Learn with us.png"
          alt="Learn with Us"
          className="background-image"
        />
        <Logo />
        <img
          src="/Aj.png"
          alt="Aj Image"
          className="absolute"
          style={{ top: '0rem', left: '9rem', width: '125px', height: '125px' }} // Adjust the size and position accordingly
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