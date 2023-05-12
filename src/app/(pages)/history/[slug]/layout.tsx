import { HistoryType, getContentData } from "../../../../lib/content";
import HistoryLayout from "../historyLayout";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getContentData<HistoryType>("history", "index", {
    noParagraph: true,
  });
  return (
    <HistoryLayout {...data} showMoreLink>
      {children}
    </HistoryLayout>
  );
}
