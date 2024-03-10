import { HistoryType, getContentData, getHistoryPages } from "@/lib/content";

import HistoryLayout from "./historyLayout";
import HistorySummary from "./historySummary";

export default async function HistoryPage() {
  const posts = await getHistoryPages();

  const layoutData = await getContentData<HistoryType>("history", "index", {
    noParagraph: true,
  });

  return (
    <HistoryLayout {...layoutData}>
      <div className="flex flex-column">
        {posts.map((post, i) => (
          <HistorySummary
            key={post.id}
            id={post.id}
            image={post.frontmatter.image}
            title={post.frontmatter.title}
            flip={i % 2 == 1}
          />
        ))}
      </div>
    </HistoryLayout>
  );
}
