import "../styles/main.css";

export const metadata = {
  metadataBase: new URL("https://amygreenbooks.com"),
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
          rel="sitemap"
          type="application/xml"
          title="Sitemap"
          href="/sitemap.xml"
        />

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

        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="sans-serif">{children}</body>
    </html>
  );
}
