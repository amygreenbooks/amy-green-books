import HistorySummary from "../historySummary";
import { getHistoryPages } from "@/lib/content";

export default async function HistoryPage() {
  const posts = await getHistoryPages();

  return (
    <>
      {posts.map((post, i) => (
        <HistorySummary
          key={post.id}
          id={post.id}
          image={post.frontmatter.image}
          title={post.frontmatter.title}
          flip={i % 2 == 1}
        />
      ))}
    </>
  );
}
