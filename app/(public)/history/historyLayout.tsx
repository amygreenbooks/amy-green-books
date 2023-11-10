import HistoryLink from "@/components/book/historyLink";

export default function HistoryLayout({
  children,
  content,
  frontmatter: { title },
  showMoreLink = false,
}: {
  children: React.ReactNode;
  frontmatter: {
    title: string;
  };
  content?: React.ReactElement;
  showMoreLink?: boolean;
}) {
  return (
    <>
      <div className="ph4">
        <div className="measure-wide center mt5 mb5 paper-2 bg-white pa4 br1">
          <header className="mb4 serif">
            <h1 className="db primary f2 b lh-title mb1 mt3">{title}</h1>
            {content && <p className="mid-gray lh-title mb2">{content}</p>}
          </header>

          {children}
        </div>
      </div>
      {showMoreLink && (
        <HistoryLink
          href="/history"
          title="Interested In More?"
          description="Explore the history behind my other books"
        />
      )}
    </>
  );
}
