import Head from "next/head";
import styles from "!css-loader!postcss-loader!../styles/main.css";
import BookPreview from "../components/cms-preview-templates/bookPreview";
import HomePreview from "../components/cms-preview-templates/homePreview";
import AboutPreview from "../components/cms-preview-templates/aboutPreview";
import ContactPreview from "../components/cms-preview-templates/contactPreview";

if (typeof window !== "undefined") {
  import("netlify-cms-app").then((CMS) => {
    init(CMS);
  });
}

function init(CMS) {
  CMS.registerPreviewStyle(styles.toString(), { raw: true });
  CMS.registerPreviewTemplate("books", BookPreview);
  CMS.registerPreviewTemplate("home", HomePreview);
  CMS.registerPreviewTemplate("about", AboutPreview);
  CMS.registerPreviewTemplate("contact", ContactPreview);
  CMS.init();

  document.body.style.minHeight = "100vh";
}

export default function Admin() {
  return (
    <Head>
      <title>Admin | Amy Green Books</title>
      <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
    </Head>
  );
}
