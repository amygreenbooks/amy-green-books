"use client";
import Script from "next/script";

if (typeof window !== "undefined") {
  import("netlify-cms-app").then((CMS) => {
    init(CMS);
  });
}

function init(CMS: any) {
  CMS.init();

  document.body.style.minHeight = "100vh";
}

export default function Admin() {
  return (
    <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></Script>
  );
}
