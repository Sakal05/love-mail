'use client'

import Head from "next/head";
import LoveAnimation from "./LoveAnimation";
import styles from './page.module.css';
import LoveMailBox from "./LoveMailBox"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Love Animation</title>
        <meta name="description" content="Animation of text saying I love you" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* <LoveAnimation /> */}
        <LoveMailBox />
      </main>

      <footer>
        {/* You can add footer content if needed */}
      </footer>
    </div>
  );
}
