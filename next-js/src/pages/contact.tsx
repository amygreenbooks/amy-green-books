import { GetStaticProps } from "next";

import Layout from "../components/layout";
import Contact from "../components/layouts/contact";
import { getContentData, getBookSummaries, Source } from "../lib/content";
import { mainMenu, MenuItem } from "../../../src/siteConfig";

export default function ContactPage({
  content,
  menu,
}: {
  content: {
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
      <Contact {...content} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const content = await getContentData(null, "contact");
  return {
    props: {
      content,
      menu: mainMenu(await getBookSummaries()),
    },
  };
};
