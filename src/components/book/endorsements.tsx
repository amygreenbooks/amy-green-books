import { Endorsement } from "../../lib/content";
import Markdown from "../markdown";

export function EndorsementComp({ quote, author }: Endorsement) {
  return (
    <blockquote className="mb4 br1 mw6 ph3 w-33-l w-50-m w-100 border-box">
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

export default function Endorsements({
  endorsements,
}: {
  endorsements: Endorsement[];
}) {
  if (!endorsements || endorsements.length === 0) {
    return null;
  }

  return (
    <section>
      <div className="mh3">
        <h2 className="f3 b lh-title serif mb2">Praise</h2>
      </div>
      <div className="mb5 flex flex-wrap items-start w-100">
        {endorsements.map((endorsement, i) => (
          <EndorsementComp key={`endorsement-${i}`} {...endorsement} />
        ))}
      </div>
    </section>
  );
}
