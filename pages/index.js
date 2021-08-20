import Head from "next/head";
import { Element } from 'react-scroll';
import FAQ from "../components/FAQ";
import Layout from '../UIComponents/Layout';

import styles from "../styles/Landing.module.css";
import useGetStaticData from '../services/useGetStaticData';

export default function Landing() {

  const { isLoaded, rpData } = useGetStaticData();
  const { faqSection } = rpData;

  return (
    <div className={styles.landingContainer}>
      <Head>
        <title>Reflections Projects 2021</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
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

      <Layout>
      {isLoaded && (
        <>
          <Element name="faq">
            {<FAQ faqData={faqSection} />}
          </Element>
        </>
      )}
      </Layout>

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

