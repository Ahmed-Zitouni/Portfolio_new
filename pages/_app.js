import "../styles/globals.css";
import { ThemeProvider } from "styled-components";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const theme = {
    mobile: `(max-width: 479px)`,
    tablet: `(max-width: 767px)`,
    laptop: `(max-width: 991px)`,
    primary: "#4d88d2",
    text: "#3e3c46",
    background: "#ffffff",
  };

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Ahmed Zitouni's Portfolio</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
