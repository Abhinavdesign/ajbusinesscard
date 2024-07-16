import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Logo from './components/Logo';
import ArrowAnimation from './components/ArrowAnimation';
import TextWithStyle from './components/TextWithStyle';
import Footer from './components/Footer';

const Home: NextPage = () => {
  return (
    <div className="home-container">
      <Head>
        <title>Homepage</title>
        <meta name="description" content="Sample homepage" />
        <meta name="viewport" content="width=device-width, initial-scale=1" /> {/* Add the viewport meta tag */}
      </Head>
      <div className="content-container">
        <Image
          src="/Learn with us.png"
          alt="Learn with Us"
          layout="fill"
          objectFit="cover"
          className="background-image"
          priority
          quality={100}
        />
        <Logo />
        <Image
          src="/Aj.png"
          alt="Aj Image"
          width={125}
          height={125}
          className="absolute aj-image"
          priority
        />
        <TextWithStyle />
        <div className="absolute open-text-container">
          <div className="green-neon-text">We are open</div>
        </div>
        <div className="absolute arrow-animation-container">
          <ArrowAnimation />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
