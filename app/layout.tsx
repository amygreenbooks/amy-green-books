import { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";

import { description, siteTitle, themeColor } from "@/lib/siteConfig";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable}`}>
      <head>
        <link
          rel="mask-icon"
          href="/media/safari-pinned-tab.svg"
          color={themeColor}
        />
        <meta name="theme-color" content={themeColor} />
        <link rel="preconnect" href="https://assets.mlcdn.com" />
        <link rel="preconnect" href="https://res.cloudinary.com" />
      </head>
      {children}
    </html>
  );
}
