import { Endorsement } from "../../lib/content";
import Markdown from "../markdown";

export function EndorsementComp({ quote, author, authorDesc }: Endorsement) {
  return (
    <blockquote className="mb-8 w-full max-w-lg rounded px-4 sm:w-1/2 lg:w-1/3">
      <p className="-mb-3 font-serif text-5xl text-primary">&#8220;</p>
      <p className="mb-1 text-sm font-light">
        <Markdown source={quote} noParagraph />
      </p>
      <cite className="mt-4 block font-serif font-semibold text-black">
        {author}
      </cite>
      <p className="font-serif text-sm text-foreground text-opacity-40">
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
      <div className="mx-4">
        <h2 className="mb-2 font-serif text-2xl font-bold leading-tight">
          Praise
        </h2>
      </div>
      <div className="mb-16 flex w-full flex-wrap items-start">
        {endorsements.map((endorsement, i) => (
          <EndorsementComp key={`endorsement-${i}`} {...endorsement} />
        ))}
      </div>
    </>
  );
}
