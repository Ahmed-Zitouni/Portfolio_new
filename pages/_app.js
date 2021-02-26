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
        {/* <script>
          {(function (h, o, t, j, a, r) {
            h.hj =
              h.hj ||
              function () {
                (h.hj.q = h.hj.q || []).push(arguments);
              };
            h._hjSettings = { hjid: 2268499, hjsv: 6 };
            a = o.getElementsByTagName("head")[0];
            r = o.createElement("script");
            r.async = 1;
            r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
            a.appendChild(r);
          })(
            window,
            document,
            "https://static.hotjar.com/c/hotjar-",
            ".js?sv="
          )}
        </script> */}
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
