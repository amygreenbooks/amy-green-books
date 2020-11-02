import Book from "../layouts/book";

export default function BookPreview({ entry, widgetFor, getAsset }) {
  let image = getAsset(entry.getIn(["data", "image"]));

  const entryRetailers = entry.getIn(["data", "retailers"]);
  const retailers = entryRetailers ? entryRetailers.toJS() : [];

  const entryEndorsements = entry.getIn(["data", "endorsements"]);
  const endorsements = entryEndorsements ? entryEndorsements.toJS() : [];
  return (
    <Book
      title={entry.getIn(["data", "title"])}
      releaseDate={entry.getIn(["data", "releaseDate"])}
      image={image}
      contentMark={entry.getIn(["data", "body"])}
      retailers={retailers}
      endorsements={endorsements}
    />
  );
}
