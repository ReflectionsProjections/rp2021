import Head from 'next/head';
import FAQ from '../components/FAQ';
import About from '../components/About';

import styles from '../components/landing/Landing.module.scss';
import useGetStaticData from '../services/useGetStaticData';
import SponsorSection from '../components/SponsorSection.js';
import Button from 'react-bootstrap/Button';

export default function Index() {
  const { rpData } = useGetStaticData();
  const { faqSection, sponsors } = rpData;

  if (typeof window !== 'undefined') {
    window.addEventListener('mousemove', (event) => {
      const width = window.outerWidth;
      const height = window.outerHeight;
      const xOffset = 0;
      const yOffset = 7;
      const mouseXpercentage = (event.clientX / width) * 100 + xOffset;
      const mouseYpercentage = (event.clientY / height) * 100 + yOffset;
      document.body.style = `background: radial-gradient(at ${mouseXpercentage}% ${mouseYpercentage}%, var(--orange-3), var(--yellow-3))`;
    });
  }

  return (
    <>
      <Head>
        <title>Reflections|Projections 2021</title>
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
      <div className={styles.landingContainer}>
        <main className={styles.main}>
          <img src="/logo.png" alt="Reflections|Projections Logo" />
          <h1>
            reflections <span className={styles.logoBar}>|</span> projections
          </h1>
          <p>27 years of connecting students with industry</p>
          <h2>September 20-25th, 2021</h2>
          <br />
        </main>

        <a href="https://airtable.com/shrTGIqGrMhlD32NC">
          <Button className={styles.registrationButton}>Register Now!</Button>
        </a>

        <About name="about" />
        <FAQ faqData={faqSection ?? { sections: [] }} />
        {sponsors && <SponsorSection sponsors={sponsors} />}

        <footer className={styles.footer}>
          Questions? Interested in sponsoring?&nbsp;
          <a
            href="mailto:contact@reflectionsprojections.org"
            rel="noopener noreferrer"
          >
            Email us at contact [at] reflectionsprojections.org
          </a>
        </footer>

        <footer className={styles.footer}>
          Visit our old website&nbsp;
          <a
            href="https://2020.reflectionsprojections.org"
            rel="noopener noreferrer"
          >
            here
          </a>
        </footer>
      </div>
    </>
  );
}
