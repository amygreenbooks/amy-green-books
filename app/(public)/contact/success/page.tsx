import cn from "classnames";

import Jumbotron from "@/components/header/jumbotron";
import { getContentData } from "@/lib/content";

import styles from "../contact.module.css";
import ContactSuccess from "../contactSuccess";
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
          <ContactSuccess />
        </div>
      </div>
    </>
  );
}
