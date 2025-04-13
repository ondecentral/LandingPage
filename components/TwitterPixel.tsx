'use client';

import Script from 'next/script';

export default function TwitterPixel() {
  return (
    <>
      <Script 
        src="https://static.ads-twitter.com/uwt.js"
        strategy="beforeInteractive"
        id="twitter-pixel"
      />
      <Script id="twitter-pixel-init" strategy="afterInteractive">
        {`
          if (window.twq) {
            twq('config','pi3z1');
            console.log('Twitter pixel initialized');
          }
        `}
      </Script>
    </>
  );
}
