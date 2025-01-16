"use client"

import "./css/style.css";

import { DM_Sans } from "next/font/google";
import LuciaSDK from "luciasdk-t3";
import { useEffect } from "react";

const dm_sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm_sans",
  display: "swap",
});

// export const metadata = {
//   title: "Home – Lucia Protocol",
//   description: "Web2 & Web3 Ad Attribution Platform",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Initialize LuciaSDK once on component mount
    LuciaSDK.init({
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID ?? "",
      baseURL: process.env.NEXT_PUBLIC_BASE_URL ?? "",
      api_key: process.env.NEXT_PUBLIC_API_KEY ?? "",
    });
    
    // Track a page view
    LuciaSDK.pageView(window.location.pathname);
  }, []);

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${dm_sans.variable} bg-stone-50 font-dm_sans tracking-tight text-stone-900 antialiased`}
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>
      </body>
    </html>
  );
}
