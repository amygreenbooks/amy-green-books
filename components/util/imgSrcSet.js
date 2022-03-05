export default function imgSrcSet({ src, resize, h, w }) {
  if (process.env.NODE_ENV === "development") {
    src = `https://amygreenbooks.com${src}`;
  }
  let srcSet = null;
  if (resize) {
    src = `${src}?nf_resize=${resize}`;
    srcSet = src;
    if (h) {
      src = `${src}&h=${h}`;
      srcSet = `${srcSet}&h=${h * 2}`;
    }
    if (w) {
      src = `${src}&w=${w}`;
      srcSet = `${srcSet}&w=${w * 2}`;
    }
    srcSet = `${srcSet} 2x`;
  }

  return { src, srcSet };
}
