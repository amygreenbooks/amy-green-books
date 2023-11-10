import { Metadata } from "next";
import Image from "next/image";

import { getContentData } from "@/lib/content";

export type AboutContent = {
  aboutImage: string;
  date: number;
  title: string;
};

export default async function AboutPage() {
  const {
    frontmatter: { aboutImage, title },
    content,
  } = await getContentData<AboutContent>(null, "about");

  return (
    <article className="mw5 center ph3 mt4 mb5 cms">
      {aboutImage && (
        <Image
          src={aboutImage}
          style={{
            width: "100%",
            height: "auto",
          }}
          alt={title}
          width={396}
          height={396}
          className="br-100"
          sizes="(min-width: 960px) 484px, 484px"
        />
      )}
      {content}
    </article>
  );
}

export const metadata: Metadata = {
  title: "About Amy Lynn Green",
};
