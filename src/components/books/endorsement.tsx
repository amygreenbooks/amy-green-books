type EndorsementProps = {
  quote_md: string;
  author_md: string;
};

export default function Endorsement({ quote_md, author_md }: EndorsementProps) {
  return (
    <blockquote class="bg-grey-1 primary pa3 mb3 br1 b mw6 center">
      <p class="f4 mb1">
        “<span dangerouslySetInnerHTML={quote_md} />”
      </p>
      <cite class="tr db grey-3" dangerouslySetInnerHTML={author_md} />
    </blockquote>
  );
}
