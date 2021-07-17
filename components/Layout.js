import Head from "next/head";
import Footer from "./footer/index";

export default function Layout({
  children,
  title = "Altaf Shaikh",
  footerContent,
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="This is a Portfolio website of Altaf Shaikh and he is a Backend Engineer" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://altafshaikh.github.io/static-file-storage/Portfolio/Favicon/crystal_ball.png"
        />
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.5/typed.min.js"
          integrity="sha512-1KbKusm/hAtkX5FScVR5G36wodIMnVd/aP04af06iyQTkD17szAMGNmxfNH+tEuFp3Og/P5G32L1qEC47CZbUQ=="
          crossOrigin="anonymous"
        ></script>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
          crossOrigin="anonymous"
        ></link>
      </Head>

      {children}

      {/* <Footer {...footerContent} /> */}
    </>
  );
}
