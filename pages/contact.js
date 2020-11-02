import Layout from "../components/layout";
import Contact from "../components/pages/contact";

import { getContentData } from "../lib/content";

export default function ContactPage({ content }) {
  return (
    <Layout>
      <Contact {...content} />
    </Layout>
  );
}

export async function getStaticProps() {
  const content = await getContentData(null, "contact");
  return {
    props: {
      content,
    },
  };
}
