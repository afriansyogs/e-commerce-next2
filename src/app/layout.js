"use client";

import localFont from "next/font/local";
import "./globals.css";
import Script from 'next/script';
import { useEffect } from 'react';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export default function RootLayout({ children }) {
  useEffect(() => {
    // Inisialisasi AOS setelah DOM siap
    const AOS = window.AOS;
    if (AOS) {
      AOS.init({
        duration: 1000,
        once: true,
      });
    }
  }, []);

  return (
    <html lang="en">
      <head>
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Script
          src="https://kit.fontawesome.com/f9189b0d8d.js"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
        <Script
          src="https://unpkg.com/aos@2.3.1/dist/aos.js"
          strategy="lazyOnload"
          onLoad={() => {
            if (window.AOS) {
              window.AOS.init({
                duration: 1000,
                once: true,
              });
            }
          }}
        />
      </body>
    </html>
  );
}
