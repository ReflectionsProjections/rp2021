import Head from "next/head";

import Landing from "../components/landing";

export default function Index() {
  return (
    <>
      <Head>
        <title>Reflections Projections 2021</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Landing />
    </>
  );
}
