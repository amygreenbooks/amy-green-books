import Link from "next/link";

import Jumbotron from "@/components/header/jumbotron";
import Markdown from "@/components/markdown";
import { getContentData } from "@/lib/content";

import { ContactType } from "../page";

export default async function ContactSuccessPage() {
  const {
    frontmatter: { title, bannerImage, successMessage },
  } = await getContentData<ContactType>(null, "contact");
  return (
    <>
      <Jumbotron title={title} image={bannerImage} />
      <div className="ph3 bg-off-white">
        <div className="center mw6 pv3 cms">
          <Markdown source={successMessage} />
          <p>
            <Link href="/">Back to Home</Link>
          </p>
        </div>
      </div>
    </>
  );
}
