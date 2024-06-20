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
      <footer className="bg-black px-4 py-8 text-white">
        <div className="mx-auto max-w-3xl pt-4">
          <div className="mx-auto mb-8 max-w-prose">
            <h1 className="mx-auto mb-8 block text-center font-serif text-4xl font-black text-white">
              Amy Lynn Green
            </h1>

            <NewsletterSection id="2157310" footer />
          </div>

          <ul className="mx-auto mb-4 max-w-sm flex-wrap justify-between text-center sm:flex">
            <li>
              <Link
                href="/"
                className="block py-4 font-light leading-tight hover:underline"
              >
                Home
              </Link>
            </li>
            {mainMenu.map(({ title, url }) => (
              <li key={url}>
                <Link
                  href={url}
                  className="block py-4 font-light leading-tight hover:underline"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="-mx-2 text-center">
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
