import About from "../layouts/about";

export default function AboutPreview({ entry, getAsset }) {
  return (
    <About
      title={entry.getIn(["data", "title"])}
      aboutImage={getAsset(entry.getIn(["data", "aboutImage"]))}
      contentMark={entry.getIn(["data", "body"])}
    />
  );
}
