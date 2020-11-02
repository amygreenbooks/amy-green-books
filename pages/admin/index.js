import { useEffect } from "react";
import Head from "next/head";
import styles from "!css-loader!postcss-loader!../../styles/main.css";
import BookPreview from "../../components/cms-preview-templates/bookPreview";

function init() {
  window.CMS.registerPreviewStyle(styles.toString(), { raw: true });
  window.CMS.registerPreviewTemplate("books", BookPreview);
  window.CMS.init();

  document.body.style.minHeight = "100vh";
}

export default function Admin() {
  useEffect(() => {
    if (window && window.CMS) {
      init();
    } else {
      var script = document.createElement("script");
      script.setAttribute("type", "text/javascript");
      script.onload = init;
      script.setAttribute(
        "src",
        "https://unpkg.com/netlify-cms@2.9.7/dist/netlify-cms.js"
      );
      document.getElementsByTagName("head")[0].appendChild(script);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Admin | Amy Green Books</title>
      </Head>
      <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
    </>
  );
}
