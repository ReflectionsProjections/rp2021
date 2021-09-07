import Head from 'next/head';
import FAQ from '../components/FAQ';
import About from '../components/About';

import styles from '../styles/Landing.module.scss';
import useGetStaticData from '../services/useGetStaticData';
import SponsorSection from '../components/SponsorSection.js';
import Nav from '../components/ui/Nav';
import Button from 'react-bootstrap/Button';

export default function Index() {
  const { rpData } = useGetStaticData();
  const { faqSection, sponsors } = rpData;

  if (typeof window !== 'undefined') {
    window.addEventListener('mousemove', (event) => {
      const width = window.outerWidth;
      const height = window.outerHeight;
      const mouseXpercentage = (event.clientX / width) * 100;
      const mouseYpercentage = (event.clientY / height) * 100;
      document.body.style = `background: radial-gradient(at ${mouseXpercentage}% ${mouseYpercentage}%, var(--background-orange), white)`;
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
      <Nav />
      <div className={styles.landingContainer}>
        <main className={styles.main}>
          <img src="/big_logo.png" alt="Reflections Projections Logo" />

          <a href="https://airtable.com/shrTGIqGrMhlD32NC">
            <Button>Register Now!</Button>
          </a>
        </main>

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
