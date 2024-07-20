import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import PageTransition from './components/PageTransition'; // Adjusted the path

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Get Exceptional Websites',
  description: 'By Abhinav Jha',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{String(metadata.title) || 'Default Title'}</title>
        <meta name="description" content={String(metadata.description) || 'Default Description'} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
