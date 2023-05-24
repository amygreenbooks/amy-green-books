import { Metadata } from "next";

import { siteTitle, description } from "@/siteConfig";

export const metadata: Metadata = {
  metadataBase: new URL("https://amygreenbooks.com"),
  title: siteTitle,
  description,
};

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
      <body>{children}</body>
    </html>
  );
}
