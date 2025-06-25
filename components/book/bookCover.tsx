import cn from "classnames";
import Image from "next/image";

import styles from "./bookCover.module.css";
import ScrollAnimation from "../util/animateOnScroll";
import CldImage from "../CldImage";

const BookCover = ({
  title,
  image,
  spineImage,
  className,
  animateIn = false,
  priority = false,
  ...props
}: {
  title: string;
  image: string;
  spineImage?: string;
  className?: string;
  animateIn?: boolean;
  priority?: boolean;
} & React.HTMLAttributes<HTMLElement>) => {
  const book = (
    <figure
      className={cn(className, styles.book, {
        [styles.animatedBook]: !!spineImage,
      })}
      {...props}
    >
      {spineImage && (
        <CldImage
          src={spineImage}
          className={styles.spine}
          alt=""
          width={58}
          height={500}
          priority={priority}
        />
      )}

      <CldImage
        src={image}
        className={styles.cover}
        alt={title}
        width={324}
        height={500}
        priority={priority}
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
