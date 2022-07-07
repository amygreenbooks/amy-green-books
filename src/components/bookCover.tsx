import cn from "classnames";

// import ScrollAnimation from "../../next-js/src/components/util/animateOnScroll";
import imgSrcSet from "../util/imgSrcSet";
import styles from "./bookCover.module.css";

const BookCover = ({
  Component = "figure",
  title,
  image,
  spineImage,
  className,
  animateIn = false,
  ...props
}: {
  Component?: React.ElementType;
  title: string;
  image: string;
  spineImage?: string;
  className?: string;
  animateIn?: boolean;
}) => {
  const book = (
    <Component
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
    </Component>
  );

  // if (animateIn) {
  //   return (
  //     <ScrollAnimation animateIn="enter" initiallyVisible offset={300}>
  //       {book}
  //     </ScrollAnimation>
  //   );
  // }

  return book;
};

export default BookCover;
