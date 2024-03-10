import { Endorsement } from "../../lib/content";
import Markdown from "../markdown";

export function EndorsementComp({ quote, author, authorDesc }: Endorsement) {
  return (
    <blockquote className="mb4 br1 mw6 ph3 w-33-l w-50-ns w-100 border-box">
      <p
        className="f1 primary serif lh-solid"
        style={{ marginBottom: "-0.75rem" }}
      >
        &#8220;
      </p>
      <p className="f6 mb1">
        <Markdown source={quote} noParagraph />
      </p>
      <cite className="db black serif fw6 mt3">{author}</cite>
      <p className="f6 grey-3 serif">
        <Markdown source={authorDesc} noParagraph />
      </p>
    </blockquote>
  );
}

export default function Endorsements({
  endorsements,
}: {
  endorsements: Endorsement[];
}) {
  if (!endorsements || endorsements.length === 0) {
    return null;
  }

  return (
    <>
      <div className="mh3">
        <h2 className="f3 b lh-title serif mb2">Praise</h2>
      </div>
      <div className="mb5 flex flex-wrap items-start w-100">
        {endorsements.map((endorsement, i) => (
          <EndorsementComp key={`endorsement-${i}`} {...endorsement} />
        ))}
      </div>
    </>
  );
}
