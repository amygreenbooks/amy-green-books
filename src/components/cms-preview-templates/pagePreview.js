import Page from "../layouts/page";

export default function PagePreview({ entry, getAsset }) {
  return (
    <Page
      title={entry.getIn(["data", "title"])}
      description={entry.getIn(["data", "description"])}
      bannerImage={getAsset(entry.getIn(["data", "bannerImage"]))}
      contentMark={entry.getIn(["data", "body"])}
    />
  );
}
