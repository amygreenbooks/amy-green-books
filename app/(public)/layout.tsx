import { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";

import Footer from "@/components/footer/footer";
import Nav from "@/components/header/nav";
import { getBooks } from "@/lib/content";
import { description, mainMenu, siteTitle, themeColor } from "@/lib/siteConfig";

import "../../styles/main.css";
import styles from "./layout.module.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.amygreenbooks.com"),
  title: siteTitle,
  description,
};

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--serif-font-family",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-family",
  display: "swap",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const books = await getBooks();
  const menu = mainMenu(books);
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable}`}>
      <head>
        <link
          rel="mask-icon"
          href="/media/safari-pinned-tab.svg"
          color={themeColor}
        />
        <meta name="theme-color" content={themeColor} />
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
