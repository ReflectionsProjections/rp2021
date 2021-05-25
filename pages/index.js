import Head from "next/head";

import Nav from "../components/ui/Nav";
import Landing from "../components/landing";

// TODO: temporary component used to test scroll links
const _placeholderSection = ({ id, idx }) => (
  <section
    id={id}
    style={{
      height: "60vh",
      backgroundColor: "rgb(255,0,0)",
      filter: `hue-rotate(${(idx ?? 0) * 120}deg)`,
    }}
  />
);

export default function Index() {
  return (
    <>
      <Head>
        <title>Reflections Projects 2021</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Nav />
      <Landing />

      {["schedule", "about", "speakers", "faqs"].map((id, idx) => (
        <_placeholderSection id={id} idx={idx} />
      ))}
    </>
  );
}
