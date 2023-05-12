import imgSrcSet from "../../../components/util/imgSrcSet";
import { getContentData } from "../../../lib/content";

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
        <img
          {...imgSrcSet({
            src: aboutImage,
            resize: "fit",
            w: 500,
            h: 500,
          })}
          alt={title}
        />
      )}
      {content}
    </article>
  );
}
