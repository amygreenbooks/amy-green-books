import React from "react";
import format from "date-fns/format";

import Hero from "./components/hero";

export default class PostPreview extends React.Component {
  render() {
    const { entry, getAsset } = this.props;
    return (
      <div>
        <Hero
          image={getAsset(entry.getIn(["data", "image"]))}
          title={entry.getIn(["data", "title"])}
          subtitle={entry.getIn(["data", "subtitle"])}
        />

        <div className="bg-off-white pv4">
          <div className="ph3 mw7 center">
            <h2 className="f2 b lh-title mb3">Books</h2>

            <div className="mw7 center ph3 pt4">
              <article class="flex-m mhn3-m mb4">
                <div class="db pr3-m w-50-m">
                  <img
                    src="/img/things-we-didnt-say.jpg"
                    alt=""
                    class="db mb2"
                  />
                </div>

                <div class="pl3-m w-50-m">
                  <header>
                    <div
                      className="w-90 bg-grey-2 mb1"
                      style={{ height: 41 }}
                    />
                    <div
                      className="w-30 bg-grey-1 mb3"
                      style={{ height: 27 }}
                    />
                  </header>

                  <div className="w-100 bg-grey-1 mb1" style={{ height: 27 }} />
                  <div className="w-100 bg-grey-1 mb1" style={{ height: 27 }} />
                  <div className="w-100 bg-grey-1 mb1" style={{ height: 27 }} />
                  <div className="w-20 bg-grey-1 mb3" style={{ height: 27 }} />

                  <div className="w-100 bg-grey-1 mb1" style={{ height: 27 }} />
                  <div className="w-100 bg-grey-1 mb1" style={{ height: 27 }} />
                  <div className="w-90 bg-grey-1 mb1" style={{ height: 27 }} />
                  <div className="w-100 bg-grey-1 mb1" style={{ height: 27 }} />
                  <div className="w-70 bg-grey-1 mb3" style={{ height: 27 }} />
                  <footer>
                    <p class="link">Learn more →</p>
                  </footer>
                </div>
              </article>
            </div>
          </div>
        </div>
        <div className="bg-grey-1 pv4">
          <div className="flex-l mhn1-l ph3 center mw7">
            <h2 className="f2 b lh-title mb2 w-40-l">
              {entry.getIn(["data", "welcome", "heading"])}
            </h2>
            <p className="w-60-l mb0">
              {entry.getIn(["data", "welcome", "text"])}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
