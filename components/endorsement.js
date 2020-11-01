import Markdown from "./markdown";

export default function Endorsement({ quote, author }) {
  return (
    <blockquote className="bg-grey-1 primary pa3 mb3 br1 b mw6 center">
      <p className="f4 mb1">
        “<Markdown markdown={quote} noParagraph />”
      </p>
      <cite className="tr db grey-3">
        <Markdown markdown={author} noParagraph />
      </cite>
    </blockquote>
  );
}
