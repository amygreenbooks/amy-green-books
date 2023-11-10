import cn from "classnames";

import Jumbotron from "@/components/header/jumbotron";
import { H2 } from "@/components/typography/h";
import { getContentData } from "@/lib/content";

import Typewriter from "./typewriter";
import styles from "../contact.module.css";
import { ContactType } from "../page";

export default async function ContactSuccessPage() {
  const {
    frontmatter: { title, description, bannerImage },
  } = await getContentData<ContactType>(null, "contact");
  return (
    <>
      <Jumbotron title={title} subtitle={description} image={bannerImage} />
      <div className="relative z-0 ph3">
        <div
          className={cn(
            `mw6 center pa3 mt4 mb5 paper-2 br1 bg-white`,
            styles.envelope,
          )}
        >
          <span className={styles.seal}>
            <span className={styles.embossed}>
              <Typewriter className={styles.typewriter} />
            </span>
          </span>
          <div className="cms">
            <H2 className="tc">Thanks for your message!</H2>
            {/* <p>
              <Link href="/">Back to Home</Link>
            </p> */}
          </div>
        </div>
      </div>
    </>
  );
}
