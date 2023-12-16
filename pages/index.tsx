/* eslint-disable @next/next/no-page-custom-font */
// pages/index.js
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ollayor</title>
        <meta name="description" content="Your website's coming soon page" />
        <link rel="icon" href="/favicon.ico" />
        {/* Import the Inter font */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Coming Soon</h1>
        {/* You can add any creative design or elements here */}
      </main>

      <footer className={styles.footer}>
        {/* Footer content if needed */}
      </footer>
    </div>
  );
}
