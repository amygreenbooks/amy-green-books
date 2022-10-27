import { component$, useStyles$ } from "@builder.io/qwik";
import cn from "classnames";
import imgSrcSet from "~/lib/imgSrcSet";

import styles from "./bookCover.css";

interface BookCoverProps {
  Component?: "figure";
  title: string;
  image: string;
  spineImage: string;
  class?: string | null;
}

export default component$(
  ({
    Component = "figure",
    title,
    image,
    spineImage,
    class: className = null,
    ...props
  }: BookCoverProps) => {
    useStyles$(styles);
    return (
      <>
        <Component
          class={cn(className, "book", { "animated-book": !!spineImage })}
          {...props}
        >
          {spineImage && (
            <img
              {...imgSrcSet({
                src: spineImage,
                resize: "fit",
                h: 500,
              })}
              className="spine"
              alt=""
            />
          )}
          <img
            {...imgSrcSet({
              src: image,
              resize: "fit",
              h: 500,
            })}
            alt={title}
            className="cover"
          />
        </Component>
      </>
    );
  }
);
