import Layout from "../../components/layout";
import History from "../../components/layouts/historyPage";
import HistoryLayout from "../../components/layouts/history";
import {
  getContentData,
  getSortedContentData,
  getAllContentIds,
} from "../../lib/content";
import { mainMenu } from "../../content/siteConfig";
import HistoryLink from "../../components/historyLink";

const contentType = "history";

export default function HistoryPage({ index, post, menu }) {
  return (
    <Layout mainMenu={menu}>
      <HistoryLayout index={index}>
        <History {...post} />
      </HistoryLayout>
      <HistoryLink
        href="/history"
        title="Interested In More?"
        description="Explore the history behind my other books"
      />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllContentIds(contentType).map((id) => ({
    params: {
      id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      index: await getContentData(contentType, "index"),
      post: await getContentData(contentType, params.id),
      menu: mainMenu(await getSortedContentData("books")),
    },
  };
}
