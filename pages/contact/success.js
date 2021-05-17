import Link from "next/link";
import Layout from "../../components/layout";
import Markdown from "../../components/markdown";
import Jumbotron from "../../components/jumbotron";
import { getContentData, getSortedContentData } from "../../lib/content";
import { mainMenu } from "../../content/siteConfig";

export default function ContactSuccess({ content, menu }) {
  const { successMessage_md, title, bannerImage } = content;

  return (
    <Layout mainMenu={menu}>
      <Jumbotron title={title} image={bannerImage} />
      <div className="ph3 bg-off-white">
        <div className="center mw6 pv3 cms">
          <Markdown source={successMessage_md} />
          <p>
            <Link href="/">Back to Home</Link>
          </p>
        </div>
      </div>
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
