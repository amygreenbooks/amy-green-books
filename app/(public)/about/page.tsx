import { Metadata } from "next";

import CldImage from "@/components/CldImage";
import { getContentData } from "@/lib/content";

export type AboutContent = {
  date: number;
  title: string;
};

export default async function AboutPage() {
  const {
    frontmatter: { title },
    content,
  } = await getContentData<AboutContent>(null, "about");

  return (
    <article className="mw5 center ph3 mt4 mb5 cms">
      <CldImage
        src="Amy_Lynn_Green_glvzmk"
        alt={title}
        width={396}
        height={396}
        crop="fill"
        className="br-100"
        sizes="(max-width: 432px) 100vw, 396px"
      />
      {content}
    </article>
  );
}

export const metadata: Metadata = {
  title: "About Amy Lynn Green",
};
