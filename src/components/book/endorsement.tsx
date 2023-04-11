import { Endorsement } from "../../lib/content";
import Markdown from "../markdown";

export default function EndorsementComp({ quote, author }: Endorsement) {
  return (
    <blockquote className="bg-grey-1 primary pa3 mb3 br1 b mw6 center">
      <p className="f4 mb1">
        “<Markdown source={quote} noParagraph />”
      </p>
      <cite className="tr db grey-3">
        <Markdown source={author} noParagraph />
      </cite>
    </blockquote>
  );
}
