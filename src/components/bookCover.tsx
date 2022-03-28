import cn from "classnames";

import ScrollAnimation from "./util/animateOnScroll";
import imgSrcSet from "./util/imgSrcSet";

const rotate = 27;
const spineActualWidthRems = 0.65;

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
    <>
      <Component
        className={cn(className, "book", { "animated-book": !!spineImage })}
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
      <style jsx>{`
        .book {
          perspective: 1800px;
          position: relative;
          margin: 0.5rem;
          z-index: 1;
        }

        .animated-book {
          margin: 0.5rem 0.5rem 0.5rem ${1 + spineActualWidthRems}rem;
        }

        .cover,
        .spine {
          transition: transform 1s ease 0s;
          border-radius: 0;
          display: block;
        }

        .cover {
          max-width: 100%;
          max-height: 500px;
          transform-origin: left;
          box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
          margin: 0 auto;
        }

        .spine {
          background-color: #ccc;
          top: 0;
          bottom: 0;
          right: 100%;
          position: absolute;
          transform-origin: right;
          height: 100%;
        }

        .animated-book .cover,
        :global(.animated.enter) .animated-book .cover {
          transform: rotateY(${rotate}deg);
          margin: 0;
        }

        .animated-book .spine,
        :global(.animated.enter) .animated-book .spine {
          transform: rotateY(${rotate - 90}deg);
        }

        :global(.animated) .animated-book .cover,
        :global(.animated.enter) .animated-book:hover .cover,
        :global(.animated.enter) .animated-book:focus .cover,
        .animated-book:hover .cover,
        .animated-book:focus .cover {
          transform: rotateY(0deg) translateX(-${spineActualWidthRems}rem);
        }

        :global(.animated) .animated-book .spine,
        :global(.animated.enter) .animated-book:hover .spine,
        :global(.animated.enter) .animated-book:focus .spine,
        .animated-book:hover .spine,
        .animated-book:focus .spine,
        .spine {
          transform: rotateY(-90deg) translateZ(${spineActualWidthRems}rem);
        }

        @media (prefers-reduced-motion) {
          :global(.animated) .animated-book .cover,
          :global(.animated.enter) .animated-book:hover .cover,
          :global(.animated.enter) .animated-book:focus .cover,
          .animated-book:hover .cover,
          .animated-book:focus .cover {
            transform: rotateY(${rotate}deg);
          }

          :global(.animated) .animated-book .spine,
          :global(.animated.enter) .animated-book:hover .spine,
          :global(.animated.enter) .animated-book:focus .spine,
          .animated-book:hover .spine,
          .animated-book:focus .spine {
            transform: rotateY(${rotate - 90}deg);
          }
        }
      `}</style>
    </>
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
