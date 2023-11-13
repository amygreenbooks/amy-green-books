import Jumbotron from "@/components/header/jumbotron";
import NewsletterSection from "@/components/newsletter/newsletterSection";
import { PageType, getContentData } from "@/lib/content";

export default async function NewsletterPage() {
  const {
    frontmatter: { title, description, bannerImage },
  } = await getContentData<PageType>("pages", "newsletter");
  return (
    <>
      {bannerImage && (
        <Jumbotron title={title} subtitle={description} image={bannerImage} />
      )}

      <NewsletterSection id="2157311" />
    </>
  );
}
