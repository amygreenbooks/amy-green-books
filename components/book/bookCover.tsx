import cn from "classnames";

import styles from "./bookCover.module.css";
import ScrollAnimation from "../util/animateOnScroll";
import imgSrcSet from "../util/imgSrcSet";

const BookCover = ({
  title,
  image,
  spineImage,
  className,
  animateIn = false,
  ...props
}: {
  title: string;
  image: string;
  spineImage?: string;
  className?: string;
  animateIn?: boolean;
} & React.HTMLAttributes<HTMLElement>) => {
  const book = (
    <figure
      className={cn(className, styles.book, {
        [styles.animatedBook]: !!spineImage,
      })}
      {...props}
    >
      {spineImage && (
        <img
          {...imgSrcSet({
            src: spineImage,
            resize: "fit",
            h: 500,
          })}
          className={styles.spine}
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
        className={styles.cover}
      />
    </figure>
  );

  if (animateIn) {
    return (
      <ScrollAnimation animateIn="enter" initiallyVisible offset={300}>
        {book}
      </ScrollAnimation>
    );
  }

  return book;
};

export default BookCover;
