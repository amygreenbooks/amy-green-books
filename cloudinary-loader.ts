const normalizeSrc = (src: string) => (src[0] === "/" ? src.slice(1) : src);
export default function cloudinaryLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  const params = ["f_auto", "c_fill", `w_${width}`, `q_${quality || "auto"}`];
  return `https://res.cloudinary.com/dlgzqc5p3/image/upload/${params.join(
    ",",
  )}/${normalizeSrc(src)}`;
}
