import Head from "next/head";
import { Link, Element } from 'react-scroll';

import About from '../components/About';

import styles from "../styles/Landing.module.css";

export default function Landing() {
  return (
    <div className={styles.landingContainer}>
      <Head>
        <title>Reflections Projects 2021</title>
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
        <Link
          activeClass="active"
          to="about"
          spy
          smooth="easeInOutQuad"
          duration={500}
          offset={-80}
        >
          <span className={styles.scrollDown}>
            <span className={styles.scrollDownText}>See More</span>
          </span>
        </Link>
      </main>

      <div style={{height: '550px'}}></div>

      <Element name="about">
        <About />
      </Element>

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
  );
}
