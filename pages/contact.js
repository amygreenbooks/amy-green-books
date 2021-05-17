import Layout from "../components/layout";
import Contact from "../components/layouts/contact";
import { getContentData, getSortedContentData } from "../lib/content";
import { mainMenu } from "../content/siteConfig";

export default function ContactPage({ content, menu }) {
  return (
    <Layout mainMenu={menu}>
      <Contact {...content} />
    </Layout>
  );
}

export async function getStaticProps() {
  const content = await getContentData(null, "contact");
  return {
    props: {
      content,
      menu: mainMenu(await getSortedContentData("books")),
    },
  };
}
