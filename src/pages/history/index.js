import Layout from "../../components/layout";
import HistorySummary from "../../components/history/historySummary";
import HistoryLayout from "../../components/layouts/history";
import { getContentData, getSortedContentData } from "../../lib/content";
import { mainMenu } from "../../siteConfig";

export default function HistoryListPage({ index, posts, menu }) {
  return (
    <Layout mainMenu={menu}>
      <HistoryLayout index={index}>
        {posts.map((post, i) => (
          <HistorySummary key={post.id} {...post} flip={i % 2 == 1} />
        ))}
      </HistoryLayout>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      index: await getContentData("history", "index"),
      posts: await getSortedContentData("history"),
      menu: mainMenu(await getSortedContentData("books")),
    },
  };
}
