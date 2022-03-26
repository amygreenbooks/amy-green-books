import imgSrcSet from "../util/imgSrcSet";
import Markdown from "../markdown";

export default function About({ aboutImage, title, source }) {
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
      <Markdown source={source} />
    </article>
  );
}
