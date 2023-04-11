import { HistoryType, getSortedContentData } from "../../../../lib/content";
import HistorySummary from "../historySummary";

export default async function HistoryPage() {
  const posts = await getSortedContentData<HistoryType>("history");

  return (
    <>
      {posts.map((post, i) => (
        <HistorySummary key={post.id} {...post} flip={i % 2 == 1} />
      ))}
    </>
  );
}
