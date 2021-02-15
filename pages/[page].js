import Layout from "../components/layout";
import Page from "../components/layouts/page";
import {
  getAllContentIds,
  getContentData,
  getSortedContentData,
} from "../lib/content";
import { mainMenu } from "../content/siteConfig";

const contentType = "pages";

export default function PagePage({ pageContent, menu }) {
  return (
    <Layout mainMenu={menu}>
      <Page {...pageContent} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllContentIds(contentType).map((page) => ({
    params: {
      page,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const pageContent = await getContentData(contentType, params.page);
  return {
    props: {
      pageContent,
      menu: mainMenu(getSortedContentData("books")),
    },
  };
}
