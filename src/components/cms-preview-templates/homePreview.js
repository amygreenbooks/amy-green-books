import Home from "../layouts/home";
import Masthead from "../masthead";

export default function HomePreview({ entry, getAsset }) {
  const entryWelcome = entry.getIn(["data", "welcome"]);
  const welcome = entryWelcome ? entryWelcome.toJS() : {};
  return (
    <>
      <Masthead
        title={entry.getIn(["data", "title"])}
        subtitle={entry.getIn(["data", "subtitle"])}
        bannerImage={getAsset(entry.getIn(["data", "bannerImage"]))}
        mainMenu={[]}
      />
      <Home books={[]} welcome={welcome} />
    </>
  );
}
