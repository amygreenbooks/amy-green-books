import { Metadata } from "next";
import Script from "next/script";

import { description, siteTitle, themeColor } from "@/lib/siteConfig";

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
          color={themeColor}
        />
        <meta name="theme-color" content={themeColor} />
      </head>
      <body>
        {children}
        <Script
          src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"
          strategy="beforeInteractive"
        ></Script>
      </body>
    </html>
  );
}
