import { Metadata } from "next";

import { HistoryType, getAllContentIds, getContentData } from "@/lib/content";

import HistoryLayout from "../historyLayout";

const contentType = "history";

type HistoryPageParams = {
  slug: string;
};

export default async function HistoryPage({
  params,
}: {
  params: HistoryPageParams;
}) {
  const layoutData = await getContentData<HistoryType>("history", "index", {
    noParagraph: true,
  });

  const {
    id,
    frontmatter: { title },
    content,
  } = await getContentData<HistoryType>(contentType, params.slug);

  return (
    <HistoryLayout {...layoutData} showMoreLink>
      <article id={id} className="mt-32">
        <header className="mb-2">
          <h2 className="font-serif text-2xl font-bold">
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
  const {
    frontmatter: { title },
  } = await getContentData<HistoryType>(contentType, params.slug);
  return {
    title: `The History Behind ${title}`,
  };
}
