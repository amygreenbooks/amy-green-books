import Markdown from "../markdown";

export default function History({ index, children }) {
  const { title, source } = index;
  return (
    <div className="ph4">
      <div className="measure-wide center mt4 mb5">
        <header className="mb4">
          <h1 className="db primary f2 b lh-title mb1 mt6">{title}</h1>
          {source && (
            <p className="mid-gray lh-title mb2">
              <Markdown source={source} noParagraph />
            </p>
          )}
        </header>
        {children}
      </div>
    </div>
  );
}
