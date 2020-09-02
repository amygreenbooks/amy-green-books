import React from "react";
import Jumbotron from "./components/Jumbotron";

export default class PostPreview extends React.Component {
  render() {
    const { entry, widgetFor, getAsset } = this.props;
    let image = getAsset(entry.getIn(["data", "bannerImage"]));

    return (
      <div>
        <Jumbotron
          image={image}
          title={entry.getIn(["data", "title"])}
          subtitle={entry.getIn(["data", "description"])}
        />
        <section className="ph3 bg-off-white">
          <div className="center mw7 pv3 cms">{widgetFor("body")}</div>
        </section>
      </div>
    );
  }
}
