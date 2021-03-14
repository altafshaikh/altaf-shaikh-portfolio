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
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://altafshaikh.github.io/static-file-storage/Portfolio/Favicon/crystal_ball.png"
        />
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.5/typed.min.js"
          integrity="sha512-1KbKusm/hAtkX5FScVR5G36wodIMnVd/aP04af06iyQTkD17szAMGNmxfNH+tEuFp3Og/P5G32L1qEC47CZbUQ=="
          crossorigin="anonymous"
        ></script>
      </Head>

      {children}

      {/* <Footer {...footerContent} /> */}
    </>
  );
}
