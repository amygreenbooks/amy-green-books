import HistoryLayout from "../historyLayout";
import { HistoryType, getContentData } from "@/lib/content";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getContentData<HistoryType>("history", "index", {
    noParagraph: true,
  });
  return <HistoryLayout {...data}>{children}</HistoryLayout>;
}
