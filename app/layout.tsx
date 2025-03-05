import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
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
          content='{"version":"next","imageUrl":"https://mystic-meow-frame-test-1.vercel.app/frames/thumbnail.png","button":{"title":"MysticMeow","action":{"type":"launch_frame","name":"MysticMeow","url":"https://mystic-meow-frame-test-1.vercel.app"}}}'
        />
        {GTM_ID && (
          <>
            {/* GTM Async Script */}
            <script async src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`}></script>

            {/* GTAG Initialization */}
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){window.dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GTM_ID}', { 'debug_mode': true });
                `,
              }}
            />

            {/* GTM Custom Push Script */}
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  (function(w,d,s,l,i){
                    w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
                    var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                    j.async=true;
                    j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                    f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','${GTM_ID}');
                `,
              }}
            />
          </>
        )}
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}