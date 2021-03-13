import Head from "next/head";

export default function Layout({
  children,
  favicon = "vercel.svg",
  title = "Altaf Shaikh",
  Footer,
  footerContent,
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/png" sizes="32x32" href={favicon} />
      </Head>

      {children}

      <Footer {...footerContent} />
    </>
  );
}
