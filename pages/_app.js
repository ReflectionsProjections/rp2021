import '../styles/globals.css';
import '../components/Agenda/timeline.scss';
import '../components/Agenda/agenda.scss';
import Head from 'next/head';

import handleMouseMove from '../services/handleMouseMove';

function MyApp({ Component, pageProps }) {
  if (typeof window !== 'undefined') {
    window.addEventListener('mousemove', handleMouseMove);
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Reflections Projections" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://reflectionsprojections.org" />
        <meta property="og:image" content="https://acmrp.org/logo.png" />
        <title>Reflections|Projections 2021</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css"
        />

        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
          integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
          integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
          crossOrigin="anonymous"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
