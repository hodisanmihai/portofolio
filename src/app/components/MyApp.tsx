"use client";

import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';  // Import global styles (e.g., Tailwind)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>My Portfolio | HODISAN MIHAI</title>
        <meta name="description" content="My personal portfolio showcasing web development projects, built with React, Next.js, TypeScript, and Tailwind CSS." />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
