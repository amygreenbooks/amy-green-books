import { cn } from "@/lib/utils";

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
      <div className="relative z-0 px-4">
        <div
          className={cn(
            `mx-auto mb-16 mt-8 max-w-lg rounded bg-white p-4 drop-shadow`,
            styles.envelope,
          )}
        >
          <ContactSuccess />
        </div>
      </div>
    </>
  );
}
