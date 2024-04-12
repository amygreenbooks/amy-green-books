import Script from "next/script";

/* eslint-disable @next/next/no-before-interactive-script-outside-document */

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
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
  );
}
