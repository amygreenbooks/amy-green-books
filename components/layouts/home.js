import imgSrcSet from "../util/imgSrcSet";
import BookSummary from "../bookSummary";
import Markdown from "../markdown";

export default function Home({ books, welcome }) {
  return (
    <>
      <section className="bg-grey-1 pb4 pt5">
        <div className="mw7 center flex-m">
          {books.map((book) => (
            <BookSummary key={book.id} {...book} />
          ))}
        </div>
      </section>

      <section className="bg-off-white pb4 pt5">
        <div className="mw7 center">
          <div className="flex-m mhn3-m mb4">
            <div className="ph3 order-last-m">
              <img
                {...imgSrcSet({
                  src: welcome.image,
                  resize: "fit",
                  w: 350,
                })}
                alt="Amy Lynn Green"
                className="db mb2 center mw4"
              />
            </div>

            <div className="ph3">
              <h3 className="f3 b lh-title mb1">{welcome.heading}</h3>
              <div className="cms">
                <Markdown source={welcome.text_md} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
