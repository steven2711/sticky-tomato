/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { useRouter } from "next/router";
import { getBgImageFromPath } from "../lib";
import Main from "../styles/elements/Main";
import { bgCategoryLegend } from "../styles/backgrounds";
import styled from "styled-components";

export default function Layout({
  title,
  children,
  keywords,
  description,
  imagePath,
  url,
}) {
  const router = useRouter();

  const bgImage = getBgImageFromPath(router.pathname, bgCategoryLegend);

  return (
    <>
      <Head>
        {/* HTML Meta Tags */}
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />

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

        {/* <meta
          name="google-site-verification"
          content="-JvaYpKFpaQTbRpkLKV5DpaWlKRjs2Zwve8w-w3EZ44"
        /> */}

        {/* Google Analytics*/}
        {/* 
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        /> */}

        {/* Rich Search Result Scripts */}
      </Head>

      <MAIN background={bgImage}>{children}</MAIN>
    </>
  );
}

const MAIN = styled(Main)`
  position: relative;
  overflow: hidden;
  background: ${(props) =>
    `no-repeat center/cover url('/images/${
      props.background || "candy-bg.png"
    }')`};
`;

Layout.defaultProps = {
  title: "Sticky Tomato",
  keywords: "",
  description: "",
  imagePath: "",
  url: "",
};
