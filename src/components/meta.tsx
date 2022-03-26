import Head from "next/head";
import { useRouter } from "next/router";
import {
  author,
  siteTitle,
  description as siteDescription,
  domain,
  socialLinks,
} from "../siteConfig";

export default function Meta({
  home,
  book,
  title: titleProp,
  description: descriptionProp,
  image,
}: {
  home?: boolean;
  book?: boolean;
  title?: string;
  description?: string;
  image?: string;
}) {
  const title = home || !titleProp ? siteTitle : `${titleProp} | ${siteTitle}`;
  const description =
    home || !descriptionProp ? siteDescription : descriptionProp;

  const router = useRouter();

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, viewport-fit=cover"
      />
      <link
        rel="sitemap"
        type="application/xml"
        title="Sitemap"
        href="/sitemap.xml"
      />

      {/* <link rel="canonical" href="{{ .Permalink }}" itemProp="url" />
      <meta name="url" content="{{ .Permalink }}" />
      <meta name="twitter:url" content="{{ .Permalink }}" />
      <meta property="og:url" content="{{ .Permalink }}" /> */}

      {/* Favicons */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/media/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        href="/media/favicon-32.png"
        sizes="32x32"
      />
      <link
        rel="icon"
        type="image/png"
        href="/media/favicon-16.png"
        sizes="16x16"
      />
      <link
        rel="icon"
        type="image/png"
        href="/media/favicon-128.png"
        sizes="128x128"
      />
      <link
        rel="icon"
        type="image/png"
        href="/media/favicon-192.png"
        sizes="192x192"
      />
      <link rel="manifest" href="/manifest.json" />
      <link
        rel="mask-icon"
        href="/media/safari-pinned-tab.svg"
        color="#CF262C"
      />
      <meta name="theme-color" content="#CF262C" />

      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta name="twitter:title" content={title} />
      <meta itemProp="name" content={title} />
      <meta name="application-name" content={title} />

      <meta name="description" content={description} />
      <meta itemProp="description" content={description} />
      <meta property="og:description" content={description} />
      <meta name="twitter:description" content={description} />

      <meta property="og:site_name" content={siteTitle} />

      {image ? (
        <>
          <meta itemProp="image" content={`${domain}${image}`} />
          <meta property="og:image" content={`${domain}${image}`} />
          <meta name="twitter:image" content={`${domain}${image}`} />
          <meta name="twitter:image:src" content={`${domain}${image}`} />
        </>
      ) : (
        <>
          <meta itemProp="image" content={`${domain}/media/ogimage.jpg`} />
          <meta property="og:image" content={`${domain}/media/ogimage.jpg`} />
          <meta name="twitter:image" content={`${domain}/media/ogimage.jpg`} />
          <meta
            name="twitter:image:src"
            content={`${domain}/media/ogimage.jpg`}
          />
        </>
      )}

      {!book && (
        <>
          <meta property="og:type" content="website" />
          <meta name="author" content={author} />
          <script
            defer
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html:
                `{` +
                `"@context":"http://schema.org",` +
                `"@type":"WebSite",` +
                `"url":"${domain}${router.asPath}",` +
                `"sameAs":[` +
                `"${socialLinks.facebook}",` +
                `"${socialLinks.instagram}"` +
                `],` +
                `"name": "${title}"` +
                `}`,
            }}
          ></script>
        </>
      )}
      <meta name="robots" content="index,follow" />
      <meta name="googlebot" content="index,follow" />

      <link
        href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400;1,700&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
}
