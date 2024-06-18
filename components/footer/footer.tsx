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
      <footer className="white bg-black px-4 py-8">
        <div className="mx-auto max-w-3xl pt-4">
          <div className="mx-auto mb-8 max-w-prose">
            <h1 className="white tc mx-auto mb-8 block font-serif text-4xl font-black">
              Amy Lynn Green
            </h1>

            <NewsletterSection id="2157310" footer />
          </div>

          <ul className="tc mx-auto mb-4 max-w-sm flex-wrap justify-between sm:flex">
            <li>
              <Link href="/" className="link lh-solid block py-4">
                Home
              </Link>
            </li>
            {mainMenu.map(({ title, url }) => (
              <li key={url}>
                <Link href={url} className="link lh-solid block py-4">
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
