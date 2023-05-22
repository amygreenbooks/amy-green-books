import { Metadata } from "next";

import "../styles/main.css";
import { siteTitle, description } from "../siteConfig";

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
          color="#CF262C"
        />
        <meta name="theme-color" content="#CF262C" />

        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="sans-serif">{children}</body>
    </html>
  );
}
