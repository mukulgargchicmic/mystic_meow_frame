import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MysticMeow - Feline Fortune Telling',
  description: 'Seek the wisdom of the cosmic feline through the crystal ball',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="fc:frame"
          content='{"version":"next","imageUrl":"https://mystic-meow.vercel.app/frames/thumbnail.png","button":{"title":"MysticMeow","action":{"type":"launch_frame","name":"MysticMeow","url":"https://mystic-meow.vercel.app","splashImageUrl":"https://mystic-meow.vercel.app/frames/head.png","splashBackgroundColor":"#312e81"}}}'
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}