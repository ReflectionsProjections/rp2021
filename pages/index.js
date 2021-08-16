import Head from "next/head";

import Landing from '../components/landing';

export default function Index() {
  if (typeof window !== "undefined") {
    window.addEventListener("mousemove", event => {
      const width = window.outerWidth;
      const height = window.outerHeight;
      const xOffset = 0;
      const yOffset = 7;
      const mouseXpercentage = (event.clientX / width * 100) + xOffset;//Math.round(event.pageX / width * 100);
      const mouseYpercentage = (event.clientY / height * 100) + yOffset;//Math.round(event.pageY / height * 100);
      document.getElementsByTagName("body")[0].style = "background: radial-gradient(at " + mouseXpercentage + "% " + mouseYpercentage + "%, var(--orange-3), var(--yellow-3))";
    });
  }
  return (
    <>
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

        <Landing />
    </>
  );
}
