import Link from "next/link";

import { MenuItem, socialLinks } from "@/lib/siteConfig";

import SocialIcon from "./socialIcon";
import Svg from "./svg";
import NewsletterSection from "../newsletter/newsletterSection";

interface FooterProps {
  mainMenu: MenuItem[];
}

export default function Footer({ mainMenu }: FooterProps) {
  return (
    <>
      <footer className="bg-black ph3 pv4 white">
        <div className="mw7 center pt3">
          <div className="measure center mb4">
            <h1 className="db center mb4 white f2 fw9 tc serif">
              Amy Lynn Green
            </h1>

            <NewsletterSection id="2157310" footer />
          </div>

          <ul className="mb3 center flex-ns flex-wrap justify-between mw5 tc">
            <li>
              <Link href="/" className="link">
                Home
              </Link>
            </li>
            {mainMenu.map(({ title, url }) => (
              <li key={url}>
                <Link href={url} className="link">
                  {title}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="mhn2 tc">
            <SocialIcon
              link={socialLinks.facebook}
              name="Facebook"
              svg="icons-facebook"
            />
            <SocialIcon
              link={socialLinks.instagram}
              name="Instagram"
              svg="icons-instagram"
            />
          </ul>
        </div>
      </footer>

      <Svg />
    </>
  );
}
