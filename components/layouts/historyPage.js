import Markdown from "../markdown";

export default function History({ id, title, source }) {
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
