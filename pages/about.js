import Layout from "../components/layout";
import About from "../components/layouts/about";
import { getContentData, getSortedContentData } from "../lib/content";
import { mainMenu } from "../content/siteConfig";

export default function AboutPage({ content, menu }) {
  return (
    <Layout mainMenu={menu}>
      <About {...content} />
    </Layout>
  );
}

export async function getStaticProps() {
  const content = await getContentData(null, "about");
  return {
    props: {
      content,
      menu: mainMenu(await getSortedContentData("books")),
    },
  };
}
