import Markdown from "../markdown";

export default function About({ aboutImage, title, contentMark }) {
  return (
    <article className="mw5 center ph3 mt4 mb5 cms">
      {aboutImage && <img src={aboutImage} alt={title} />}
      <Markdown markdown={contentMark} />
    </article>
  );
}
