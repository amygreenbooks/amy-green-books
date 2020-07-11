import React from "react";
import format from "date-fns/format";

const Retailer = ({ name, link, imageUrl }) => (
  <div class="w-third pa2 border-box flex w100">
    <a
      class="db pa2 raise bg-off-white flex items-center w-100 br1"
      href={link}
    >
      <img
        src={imageUrl}
        alt={name}
        className="db mw-100 br0 center"
        style={{ maxHeight: 100 }}
      />
    </a>
  </div>
);

const Blockquote = ({ author, quote }) => (
  <blockquote class="bg-grey-1 primary pa3 mb3 br1 b mw6 center">
    <p class="f4 mb0">“{quote}”</p>
    <cite class="tr db grey-3">{author}</cite>
  </blockquote>
);

export default class BookPreview extends React.Component {
  render() {
    const { entry, widgetFor, getAsset } = this.props;
    let image = getAsset(entry.getIn(["data", "image"]));

    const entryRetailers = entry.getIn(["data", "retailers"]);
    const retailers = entryRetailers ? entryRetailers.toJS() : [];

    const entryEndorsements = entry.getIn(["data", "endorsements"]);
    const endorsements = entryEndorsements ? entryEndorsements.toJS() : [];

    return (
      <div>
        <div class="mw6 center ph3 pv4">
          <h1 class="f2 lh-title b mb3">{entry.getIn(["data", "title"])}</h1>
          {entry.getIn(["data", "date"]) && (
            <p class="grey-3 b lh-title mb2">
              Releases:{" "}
              {format(entry.getIn(["data", "releaseDate"]), "MMMM yyyy")}
            </p>
          )}
          <div class="cms mw6 mb4">
            <p>{entry.getIn(["data", "description"])}</p>
            {image && <img src={image} alt={entry.getIn(["data", "title"])} />}
            {widgetFor("body")}
          </div>
        </div>

        <div class="bg-grey-1 pv4 mb4">
          <div class="mw6 ph3 center">
            <h2 class="f3 b lh-title primary">Preorder now at:</h2>

            <div class="flex flex-wrap justify-center">
              {retailers.map(({ name, link, imageUrl }, i) => (
                <Retailer key={i} name={name} link={link} imageUrl={imageUrl} />
              ))}
            </div>
          </div>
        </div>

        <div class="center mb4 ph3 mw6">
          {endorsements.map(({ author, quote }, i) => (
            <Blockquote author={author} quote={quote} />
          ))}
        </div>
      </div>
    );
  }
}
