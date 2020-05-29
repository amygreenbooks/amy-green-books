import React from "react";
import format from "date-fns/format";

const Retailer = ({ name, link, imageUrl }) => (
  <a className="w-third pa3 border-box raise" href={link}>
    <img
      src={imageUrl}
      alt={name}
      className="db mw-100 br0 center"
      style={{ maxHeight: 100 }}
    />
  </a>
);

export default class BookPreview extends React.Component {
  render() {
    const { entry, widgetFor, getAsset } = this.props;
    let image = getAsset(entry.getIn(["data", "image"]));

    const entryRetailers = entry.getIn(["data", "retailers"]);
    const retailers = entryRetailers ? entryRetailers.toJS() : [];

    return (
      <div className="mw6 center ph3 pv4">
        <h1 className="f2 lh-title b mb3">{entry.getIn(["data", "title"])}</h1>
        <div className="flex justify-between grey-3">
          <p>{format(entry.getIn(["data", "date"]), "ddd, MMM D, YYYY")}</p>
        </div>
        <div className="cms mw6">
          <p>{entry.getIn(["data", "description"])}</p>
          {image && <img src={image} alt={entry.getIn(["data", "title"])} />}
          {widgetFor("body")}
        </div>

        <div className="mw6 flex flex-wrap items-center justify-center">
          {retailers.map(({ name, link, imageUrl }, i) => (
            <Retailer key={i} name={name} link={link} imageUrl={imageUrl} />
          ))}
        </div>
      </div>
    );
  }
}
