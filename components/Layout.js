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
      </Head>

      {children}

      <Footer {...footerContent} />
    </>
  );
}
