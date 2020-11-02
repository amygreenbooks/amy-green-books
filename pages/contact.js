import Layout from "../components/layout";
import Markdown from "../components/markdown";
import Jumbotron from "../components/jumbotron";
import { getContentData } from "../lib/content";

export default function Contact({ content }) {
  const { title, description, bannerImage, contentMark } = content;

  return (
    <Layout>
      <Jumbotron title={title} subtitle={description} image={bannerImage} />

      <article className="mw6 center ph3 mt4 mb5">
        <div className="cms">
          <Markdown markdown={contentMark} />
        </div>

        <div className="mb4">
          <form
            name="contact"
            method="POST"
            action="/contact/success"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Don’t fill this out if you're human: <input name="bot-field" />
              </label>
            </p>
            <div className="flex-l mhn1-l">
              <div className="pr1-l w-50-l relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  className="w-100 mb2"
                />
                <label for="name">Name</label>
              </div>
              <div className="pl1-l w-50-l relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="w-100 mb2"
                />
                <label for="email">Email</label>
              </div>
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                placeholder="Your message"
                rows="8"
                cols="80"
                className="w-100"
              />
              <label for="message">Your message</label>
            </div>
            <div className="tc">
              <button type="submit" className="btn w-100 w-auto-ns raise">
                Submit
              </button>
            </div>
          </form>
        </div>
      </article>
    </Layout>
  );
}

export async function getStaticProps() {
  const content = await getContentData(null, "contact");
  return {
    props: {
      content,
    },
  };
}
