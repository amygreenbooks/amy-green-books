import {
  HistoryType,
  getAllContentIds,
  getContentData,
} from "../../../../lib/content";

const contentType = "history";

export default async function HistoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const {
    id,
    frontmatter: { title },
    content,
  } = await getContentData<HistoryType>(contentType, params.slug);

  return (
    <article id={id}>
      <header className="mt6 mb2">
        <h2 className="f3 b">
          The History Behind <em>{title}</em>
        </h2>
      </header>
      {content && <div className="cms">{content}</div>}
    </article>
  );
}

export async function generateStaticParams() {
  return getAllContentIds(contentType).map((id) => ({
    slug: id,
  }));
}
