import { Source } from "../../lib/content";
import Markdown from "../markdown";

interface HistoryPageProps {
  id: string;
  title: string;
  source: Source;
}

export default function HistoryPage({ id, title, source }: HistoryPageProps) {
  return (
    <article id={id}>
      <header className="mt6 mb2">
        <h2 className="f3 b">
          The History Behind <em>{title}</em>
        </h2>
      </header>
      <div className="cms">
        <Markdown source={source} />
      </div>
    </article>
  );
}
