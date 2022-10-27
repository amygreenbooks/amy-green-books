import { Endorsement } from "../../lib/content";
import Markdown from "../markdown";

export default function EndorsementComp({ quote_md, author_md }: Endorsement) {
  return (
    <blockquote className="bg-grey-1 primary pa3 mb3 br1 b mw6 center">
      <p className="f4 mb1">
        “<Markdown source={quote_md} noParagraph />”
      </p>
      <cite className="tr db grey-3">
        <Markdown source={author_md} noParagraph />
      </cite>
    </blockquote>
  );
}
