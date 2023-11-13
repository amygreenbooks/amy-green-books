import HistoryLink from "@/components/book/historyLink";
import PageLayout from "@/components/pageLayout";

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
      <PageLayout title={title} description={content}>
        {children}
      </PageLayout>
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
