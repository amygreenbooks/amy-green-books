import Markdown from "../markdown";
import Jumbotron from "../jumbotron";

export default function Page({ title, description, bannerImage, source }) {
  return (
    <>
      {/* <Jumbotron title={title} subtitle={description} image={bannerImage} /> */}
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
    </>
  );
}
