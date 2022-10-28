import { Source } from "../../lib/content";
import Markdown from "../markdown";

interface PageProps {
  title: string;
  description: string;
  source: Source;
}

export default function Page({ title, description, source }: PageProps) {
  return (
    <div className="ph4">
      <article className="measure-wide center mt4 mb5">
        <header className="mb4">
          <h1 className="db primary f2 b lh-title mb1 mt6">{title}</h1>
          {description && (
            <p className="mid-gray lh-title mb2">{description}</p>
          )}
        </header>
        <div className="cms">
          <Markdown source={source} />
        </div>
      </article>
    </div>
  );
}
