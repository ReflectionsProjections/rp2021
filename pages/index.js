import Head from "next/head";
import Agenda from '../components/Agenda'
import events from '../static/data/rp2020.json';
import useGetStaticData from '../services/useGetStaticData';
import Layout from '../UIComponents/Layout';

export default function Landing() {
  const { isLoaded, rpData, nav, gates } = useGetStaticData();
  const { events, faqSection, speakerSection, projectSection, sponsors } = rpData;

  return (
    // <Agenda events={events}/>
  <Layout>
    {isLoaded && (
      <>
        {/* <Element name="agenda"> */}
          <Agenda events={events} />
        {/* </Element> */}
      </>
    )}
  </Layout> 
    // <div className={styles.landingContainer}>
    //   <Head>
    //     <title>Reflections Projects 2021</title>
    //     <link rel="preconnect" href="https://fonts.gstatic.com" />
    //     <link
    //       href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
    //       rel="stylesheet"
    //     />
    //     <link rel="icon" href="/favicon.png" />
    //   </Head>

    //   <main className={styles.main}>
    //     <img src="/logo.png" alt="Reflections Projects Logo" />
    //     <h1>
    //       reflections <span className={styles.logoBar}>|</span> projections
    //     </h1>
    //     <p>27 years of connecting students with industry</p>
    //     <h2>September 20-25th, 2021</h2>
    //   </main>

    //   <footer className={styles.footer}>
    //     Questions? Interested in sponsoring?&nbsp;
    //     <a
    //       href="mailto:contact@reflectionsprojections.org"
    //       rel="noopener noreferrer"
    //     >
    //       Email us at contact [at] reflectionsprojections.org
    //     </a>
    //   </footer>
    // </div>
  );
}
