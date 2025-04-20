import { Metadata } from "next";

import PageLayout from "@/components/pageLayout";
import { PageType, getAllContentIds, getContentData } from "@/lib/content";

type PageParams = Promise<{ slug: string }>;

export default async function Page({ params }: { params: PageParams }) {
  const { slug } = await params;
  const {
    frontmatter: { description, title },
    content,
  } = await getContentData<PageType>("pages", slug);

  return (
    <PageLayout title={title} description={description}>
      {content && <div className="cms">{content}</div>}
    </PageLayout>
  );
}

export async function generateStaticParams() {
  return getAllContentIds("pages").map((id) => ({
    slug: id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const { slug } = await params;
  const {
    frontmatter: { description, title },
  } = await getContentData<PageType>("pages", slug);

  return {
    title,
    description,
  };
}
