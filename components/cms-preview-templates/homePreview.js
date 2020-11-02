import Home from "../layouts/home";

export default function HomePreview({ entry, getAsset }) {
  // let image = getAsset(entry.getIn(["data", "image"]));

  // const entryRetailers = entry.getIn(["data", "retailers"]);
  // const retailers = entryRetailers ? entryRetailers.toJS() : [];

  // const entryEndorsements = entry.getIn(["data", "endorsements"]);
  // const endorsements = entryEndorsements ? entryEndorsements.toJS() : [];
  return <Home title={entry.getIn(["data", "title"])} />;
}
