import { GetStaticPaths, GetStaticProps } from "next";
import Layout from "../components/layout";
import Page from "../components/layouts/page";
import {
  getAllContentIds,
  getContentData,
  getSortedContentData,
  Source,
} from "../lib/content";
import { mainMenu, MenuItem } from "../siteConfig";

const contentType = "pages";

export default function PagePage({
  pageContent,
  menu,
}: {
  pageContent: {
    id: string;
    title: string;
    description: string;
    bannerImage: string;
    source: Source;
  };
  menu: Array<MenuItem>;
}) {
  return (
    <Layout mainMenu={menu}>
      <Page {...pageContent} />
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllContentIds(contentType).map((page) => ({
    params: {
      page,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: {
  params: { page: string };
}) => {
  const pageContent = await getContentData(contentType, params.page);
  return {
    props: {
      pageContent,
      menu: mainMenu(await getSortedContentData("books")),
    },
  };
};
