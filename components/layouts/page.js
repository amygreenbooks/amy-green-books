import Markdown from "../markdown";
import Jumbotron from "../jumbotron";

export default function Page({ title, description, bannerImage, contentMark }) {
  return (
    <>
      <Jumbotron title={title} subtitle={description} image={bannerImage} />
      <div className="ph3">
        <article className="measure-wide center mt4 mb5">
          <div className="cms">
            <Markdown markdown={contentMark} />
          </div>
        </article>
      </div>
    </>
  );
}
