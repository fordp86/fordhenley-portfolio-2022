import Head from "next/head";
import SimpleReactLightbox from "simple-react-lightbox";
import "swiper/css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>

      <Head>
        <title>Rewall | Personal Portfolio React Template</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="description" content="personal portfolio react template" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
        <link rel="icon" href="img/favicon.ico" />
      </Head>
      <SimpleReactLightbox>
        <Component {...pageProps} />{" "}
      </SimpleReactLightbox>
    </>
  );
}

export default MyApp;
