import Head from "next/head";
import { useRouter } from "next/router";

import {
  author,
  siteTitle,
  description as siteDescription,
  domain,
  socialLinks,
} from "../../../src/siteConfig";

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
      <link
        rel="sitemap"
        type="application/xml"
        title="Sitemap"
        href="/sitemap.xml"
      />

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
    </Head>
  );
}
