import Head from "next/head";
import styles from "../styles/Landing.module.scss";
import Speaker from '../components/Speaker';
import { Element } from 'react-scroll';
import useGetStaticData from '../services/useGetStaticData';



export default function Landing() {

  const { isLoaded, rpData, nav, gates } = useGetStaticData();

  const { events, faqSection, speakerSection, projectSection, sponsors } = rpData;


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
      <Element name="speakers">
        {<Speaker speakers={speakerSection.list} />}
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
