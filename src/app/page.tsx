import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image'; // Import Image from next/image
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
      </Head>
      <div className="content-container">
        <Image
          src="/Learn with us.png"
          alt="Learn with Us"
          layout="fill"
          objectFit="cover"
          className="background-image"
          priority // Preload the image
          quality={100} // Ensure high quality
        />
        <Logo />
        <Image
          src="/Aj.png"
          alt="Aj Image"
          width={125}
          height={125}
          className="absolute aj-image"
          priority // Preload the image
        />
        <TextWithStyle />
        <div className="absolute open-text-container">
          <div className="green-neon-text">We are open</div>
        </div>
        <div className="absolute arrow-animation-container">
          <ArrowAnimation />
        </div>
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
