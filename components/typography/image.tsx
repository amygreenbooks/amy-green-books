import { ImgHTMLAttributes } from "react";

import NextImage from "next/image";

export default function Image({
  src,
  alt,
  width,
  height,
}: ImgHTMLAttributes<HTMLImageElement>) {
  if (!src || !alt || !width || !height) return null;
  return (
    <NextImage
      src={src}
      alt={alt}
      width={width as number}
      height={height as number}
    />
  );
}
