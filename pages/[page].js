import Layout from "../components/layout";
import Page from "../components/layouts/page";
import { getAllContentIds, getContentData } from "../lib/content";

const contentType = "pages";

export default function PagePage({ pageContent }) {
  return (
    <Layout>
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
    },
  };
}
