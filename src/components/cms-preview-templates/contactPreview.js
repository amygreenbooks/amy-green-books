import Contact from "../layouts/contact";

export default function ContactPreview({ entry, getAsset }) {
  return (
    <Contact
      title={entry.getIn(["data", "title"])}
      description={entry.getIn(["data", "description"])}
      bannerImage={getAsset(entry.getIn(["data", "bannerImage"]))}
      contentMark={entry.getIn(["data", "body"])}
    />
  );
}
