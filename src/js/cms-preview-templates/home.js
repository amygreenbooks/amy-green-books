import React from "react";
import Markdown from "./components/Markdown";

export default class PostPreview extends React.Component {
  render() {
    const { entry, getAsset, widgetFor } = this.props;
    const image = getAsset(entry.getIn(["data", "image"]));
    return (
      <div>
        <div
          className="hero cover bg-cover"
          style={{
            backgroundImage: image && `url(${image})`,
            backgroundPosition: "84% 70%",
          }}
        >
          <div style={{ backgroundColor: "rgba(0,0,0,0.1)" }}>
            <div className="mw7 center pv5 pv6-l ph3 tr">
              <div className="db mb3">
                <div className="relative mb2">
                  <h1 className="f2 f1-l b di lh-title mw6 white{{if $altHeader}} ph2 bg-black{{end}}">
                    {entry.getIn(["data", "title"])}
                  </h1>
                </div>
                <div className="relative">
                  {entry.getIn(["data", "subtitle"]) && (
                    <p className="f3 fw5 di lh-title mw6 {{if $altHeader}}ph2 white bg-primary{{else}}grey-5{{end}}">
                      {entry.getIn(["data", "subtitle"])}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-off-white pv4">
          <div className="ph3 mw7 center">
            <h2 className="f2 b lh-title mb3">Books</h2>

            <div className="mw7 center ph3 pt4">
              <article className="flex-m mhn3-m mb4">
                <div className="db pr3-m w-50-m">
                  <img
                    src="/img/things-we-didnt-say.jpg"
                    alt=""
                    className="db mb2"
                  />
                </div>

                <div className="pl3-m w-50-m">
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
                    <p className="link">Learn more →</p>
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
            <Markdown markdown={entry.getIn(["data", "welcome", "text"])} />
          </div>
        </div>
      </div>
    );
  }
}
