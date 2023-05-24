import { Metadata } from "next";
import Script from "next/script";

import Footer from "@/components/footer/footer";
import Nav from "@/components/header/nav";
import { getBooks } from "@/lib/content";
import { description, mainMenu, siteTitle } from "@/lib/siteConfig";

import "../../styles/main.css";
import styles from "./layout.module.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.amygreenbooks.com"),
  title: siteTitle,
  description,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const books = await getBooks();
  const menu = mainMenu(books);
  return (
    <html lang="en">
      <head>
        <link
          rel="mask-icon"
          href="/media/safari-pinned-tab.svg"
          color="#006b2e"
        />
        <meta name="theme-color" content="#006b2e" />

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
      <body className={styles.body}>
        <div id="skip" className={styles.skip}>
          <a href="#main-content">Skip to main content</a>
        </div>
        <Nav mainMenu={menu} />
        <main id="main-content">{children}</main>
        <Footer mainMenu={menu} />

        <Script src="https://static.mailerlite.com/js/w/webforms.min.js?vc25f966922c0a35ad9c2401af6506ef1"></Script>
      </body>
    </html>
  );
}
