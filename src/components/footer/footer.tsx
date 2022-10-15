import { component$, useContext } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { NewsletterForm } from "./newsletterForm";
import { SocialIcon } from "./socialIcon";
import { Svg } from "./svg";
import { GlobalStore } from "~/context";
import { socialLinks } from "~/siteConfig";

export default component$(() => {
  const globalStore = useContext(GlobalStore);
  return (
    <>
      <footer class="bg-black ph3 pv4 white">
        <div class="mw7 center pt3">
          <div class="measure center mb4">
            <h1 class="db center mb4 primary f2 b tc">Amy Lynn Green</h1>

            <p class="f3 lh-title light-gray b tc mb2">
              Sign Up for my Newsletter
            </p>
            <p class="tc">
              Enter your email address for quarterly writing updates
              and&nbsp;bookish&nbsp;fun!
            </p>

            <NewsletterForm />
          </div>

          <ul class="mb3 center flex-ns flex-wrap justify-between mw5 tc">
            <li>
              <Link href="/" class="link">
                Home
              </Link>
            </li>
            {globalStore.mainMenu.map(({ title, url }) => (
              <li>
                <Link class="link" href={url}>
                  {title}
                </Link>
              </li>
            ))}
          </ul>

          <ul class="mhn2 tc">
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
});
