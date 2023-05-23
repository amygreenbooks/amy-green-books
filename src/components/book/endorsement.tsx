import { Endorsement } from "../../lib/content";
import Markdown from "../markdown";

export default function EndorsementComp({ quote, author }: Endorsement) {
  return (
    <blockquote className="bg-grey-1 pa3 mb3 br1 mw6 center">
      <p className="f5 mb1">
        <span className="f1 primary serif lh-solid">&#8220;</span>
        <Markdown source={quote} noParagraph />
      </p>
      <cite className="tr db grey-3 serif fw5">
        <Markdown source={author} noParagraph />
      </cite>
    </blockquote>
  );
}
