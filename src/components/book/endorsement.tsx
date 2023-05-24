import { Endorsement } from "../../lib/content";
import Markdown from "../markdown";

export default function EndorsementComp({ quote, author }: Endorsement) {
  return (
    <blockquote className="mb4 br1 mw6 center ph3 w-33-l w-50-m w-100 border-box">
      <p
        className="f1 primary serif lh-solid"
        style={{ marginBottom: "-0.75rem" }}
      >
        &#8220;
      </p>
      <p className="f5 mb1">
        <Markdown source={quote} noParagraph />
      </p>
      <cite className="tr db grey-3 serif fw5">
        <Markdown source={author} noParagraph />
      </cite>
    </blockquote>
  );
}
