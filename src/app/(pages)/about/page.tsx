import Markdown from "../../../components/markdown";
import imgSrcSet from "../../../components/util/imgSrcSet";
import { ContentData, getContentData } from "../../../lib/content";

export type AboutContent = ContentData & {
  aboutImage: string;
  title: string;
};

export default async function AboutPage() {
  const { aboutImage, title, source } = await getContentData<AboutContent>(
    null,
    "about"
  );

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
      {source && <Markdown source={source} />}
    </article>
  );
}
