import Head from "next/head";
import React from "react";
import { prodUrl } from "~/constants/app-info";

const defaultTitle = "Aditya Kashyap — Software Engineer";
const defaultDescription =
  "Final-year B.Tech student at MSIT Delhi. Builds production-grade systems in C++ and full-stack web. 300+ LeetCode, contest rating 1800+. Open to SWE fresher roles.";
const defaultImage = "https://i.postimg.cc/rFkhbJMp/og-image.png";

const Metatags = ({
  title,
  description,
  image,
}: {
  title?: string;
  description?: string;
  image?: string;
}) => {
  return (
    <Head>
      <title>{title ?? defaultTitle}</title>
      <meta name="description" content={description ?? defaultDescription} />
      <link rel="icon" href="/favicon.ico" />

      <meta property="og:url" content={prodUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title ?? defaultTitle} />
      <meta property="og:description" content={description ?? defaultDescription} />
      <meta property="og:image" content={image ?? defaultImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content={prodUrl} />
      <meta property="twitter:url" content={prodUrl} />
      <meta name="twitter:title" content={title ?? defaultTitle} />
      <meta name="twitter:description" content={description ?? defaultDescription} />
      <meta name="twitter:image" content={image ?? defaultImage} />

      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="sitemap" content={`${prodUrl}/sitemap.xml`} />
    </Head>
  );
};

export default Metatags;
