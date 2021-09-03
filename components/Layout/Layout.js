import Head from "next/head";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Layout({
  title,
  keywords,
  description,
  imagePath,
  children,
  noIndex,
  url,
  footer,
}) {
  return (
    <>
      <Head>
        {/* HTML Meta Tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Google Meta Tags */}

        <meta itemProp="name" content={title} />
        <meta itemProp="description" content={description} />
        <meta itemProp="image" content={imagePath} />

        {/* Facebook Meta Tags */}

        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imagePath} />

        {/* Twitter Meta Tags */}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imagePath} />

        {/* Google Search Console Verification */}

        {/* Google Analytics*/}

        {/* No Index Tag */}

        {noIndex ? <meta name="robots" content="noindex,nofollow" /> : null}
      </Head>
      <main>{children}</main>
      {footer ? <Footer /> : null}
    </>
  );
}

Layout.defaultProps = {
  title: "Sticky Tomato",
  description: "",
  keywords: "",
  imagePath: "",
  url: "",
  noIndex: false,
};
