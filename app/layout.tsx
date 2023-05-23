import { Metadata } from "next";

import { description, siteTitle, themeColor } from "@/lib/siteConfig";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.amygreenbooks.com"),
  title: siteTitle,
  description,
};

export default function RootLayout({
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

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&family=Playfair+Display:ital,wght@0,400;0,500;0,700;0,900;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      {children}
    </html>
  );
}
