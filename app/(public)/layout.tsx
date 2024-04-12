import Script from "next/script";

import Footer from "@/components/footer/footer";
import Nav from "@/components/header/nav";
import { getBooks } from "@/lib/content";
import { mainMenu } from "@/lib/siteConfig";

import "../../styles/main.css";
import styles from "./layout.module.css";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const books = await getBooks();
  const menu = mainMenu(books);
  return (
    <body className={styles.body}>
      <div id="skip" className={styles.skip}>
        <a href="#main-content">Skip to main content</a>
      </div>
      <Nav mainMenu={menu} />
      <main id="main-content">{children}</main>
      <Footer mainMenu={menu} />

      <Script src="https://static.mailerlite.com/js/w/webforms.min.js?vc25f966922c0a35ad9c2401af6506ef1"></Script>
    </body>
  );
}
