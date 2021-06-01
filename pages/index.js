import Head from "next/head";
import { Element } from "react-scroll";
import SponsorSection from "../components/SponsorSection";
import styles from "../styles/Landing.module.css";
import useGetStaticData from "../services/useGetStaticData";
import { getQueryObject } from "../lib/path";

export default function Landing() {
  let query = {};
  if (process.browser) {
    query = getQueryObject(window);
  }

  const { isLoaded, rpData, nav, gates } = useGetStaticData();

  const { events, faqSection, speakerSection, projectSection, sponsors } =
    rpData;

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

      {isLoaded && (
        <Element name="sponsor-section">
          {<SponsorSection sponsors={sponsors} />}
        </Element>
      )}

      <main className={styles.main}>
        <img src="/logo.png" alt="Reflections Projects Logo" />
        <h1>
          reflections <span className={styles.logoBar}>|</span> projections
        </h1>
        <p>27 years of connecting students with industry</p>
        <h2>September 20-25th, 2021</h2>
      </main>

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
