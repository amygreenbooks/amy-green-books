"use client";

import Link from "next/link";

import { MenuItem, socialLinks } from "../../siteConfig";
import NewsletterForm from "./newsletterForm";
import SocialIcon from "./socialIcon";
import Svg from "./svg";

interface FooterProps {
  mainMenu: MenuItem[];
}

export default function Footer({ mainMenu }: FooterProps) {
  return (
    <>
      <footer className="bg-black ph3 pv4 white">
        <div className="mw7 center pt3">
          <div className="measure center mb4">
            <h1 className="db center mb4 primary f2 b tc serif">
              Amy Lynn Green
            </h1>

            <p className="f3 lh-title light-gray b tc mb2 serif">
              Sign Up for my Newsletter
            </p>
            <p className="tc">
              Enter your email address for quarterly writing updates
              and&nbsp;bookish&nbsp;fun!
            </p>

            <NewsletterForm />
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
