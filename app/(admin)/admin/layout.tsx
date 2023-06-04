import { Metadata } from "next";
import Script from "next/script";

import { description, siteTitle } from "@/lib/siteConfig";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.amygreenbooks.com"),
  title: siteTitle,
  description,
};

/* eslint-disable @next/next/no-before-interactive-script-outside-document */

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="mask-icon"
          href="/media/safari-pinned-tab.svg"
          color="#006b2e"
        />
        <meta name="theme-color" content="#006b2e" />
      </head>
      <body>
        {children}

        <Script
          src="https://identity.netlify.com/v1/netlify-identity-widget.js"
          strategy="beforeInteractive"
        ></Script>
        <Script
          src="https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js"
          strategy="beforeInteractive"
        ></Script>
      </body>
    </html>
  );
}
