import Head from "next/head";

if (typeof window !== "undefined") {
  import("netlify-cms-app").then((CMS) => {
    init(CMS);
  });
}

function init(CMS) {
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
