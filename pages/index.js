import Head from "next/head";

import { Element } from 'react-scroll';

import About from '../components/About';

import styles from "../styles/Landing.module.css";

import Landing from '../components/landing';

export default function Index() {
  return (
    <>
    <div>
      <Head>
        <title>Reflections Projections 2021</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
        <link 
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" 
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.main}>
        <img src="/logo.png" alt="Reflections Projects Logo" />
        <h1>
          reflections <span className={styles.logoBar}>|</span> projections
        </h1>
        <p>27 years of connecting students with industry</p>
        <h2>September 20-25th, 2021</h2>
      </main>

      <About name="about" />

      <footer className={styles.footer}>
        Questions? Interested in sponsoring?&nbsp;
        <a
          href="mailto:contact@reflectionsprojections.org"
          rel="noopener noreferrer"
        >
          Email us at contact [at] reflectionsprojections.org
        </a>
      </footer>
    </div>
      <Landing />
    </>
  );
}
