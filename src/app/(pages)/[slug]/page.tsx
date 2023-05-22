import { Metadata } from "next";

import {
  PageType,
  getAllContentIds,
  getContentData,
} from "../../../lib/content";

type PageParams = { slug: string };

export default async function Page({ params }: { params: PageParams }) {
  const {
    frontmatter: { description, title },
    content,
  } = await getContentData<PageType>("pages", params.slug);

  return (
    <div className="ph4">
      <article className="measure-wide center mt4 mb5">
        <header className="mb4">
          <h1 className="db primary f2 b lh-title mb1 mt6">{title}</h1>
          {description && (
            <p className="mid-gray lh-title mb2">{description}</p>
          )}
        </header>
        {content && <div className="cms">{content}</div>}
      </article>
    </div>
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
  const {
    frontmatter: { description, title },
  } = await getContentData<PageType>("pages", params.slug);

  return {
    title,
    description,
  };
}
