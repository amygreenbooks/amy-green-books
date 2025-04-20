import { Metadata } from "next";

import { HistoryType, getAllContentIds, getContentData } from "@/lib/content";

import HistoryLayout from "../historyLayout";

const contentType = "history";

type HistoryPageParams = Promise<{
  slug: string;
}>;

export default async function HistoryPage({
  params,
}: {
  params: HistoryPageParams;
}) {
  const { slug } = await params;
  const layoutData = await getContentData<HistoryType>("history", "index", {
    noParagraph: true,
  });

  const {
    id,
    frontmatter: { title },
    content,
  } = await getContentData<HistoryType>(contentType, slug);

  return (
    <HistoryLayout {...layoutData} showMoreLink>
      <article id={id} className="mt6">
        <header className="mb2">
          <h2 className="f3 b serif">
            The History Behind <em>{title}</em>
          </h2>
        </header>
        {content && <div className="cms">{content}</div>}
      </article>
    </HistoryLayout>
  );
}

export async function generateStaticParams() {
  return getAllContentIds(contentType).map((id) => ({
    slug: id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: HistoryPageParams;
}): Promise<Metadata> {
  const { slug } = await params;
  const {
    frontmatter: { title },
  } = await getContentData<HistoryType>(contentType, slug);
  return {
    title: `The History Behind ${title}`,
  };
}
