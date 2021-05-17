import ScrollAnimation from "./util/animateOnScroll";
import cn from "classnames";

const rotate = 27;
const spineActualWidthRems = 0.7;

const BookCover = ({
  Component = "figure",
  title,
  image,
  spineImage,
  className,
  animateIn = false,
  ...props
}) => {
  const book = (
    <>
      <Component
        className={cn(className, "book", { "animated-book": !!spineImage })}
        {...props}
      >
        {spineImage && (
          <img src={spineImage} className="spine" aria-hidden="true" />
        )}
        <img src={image} alt={title} className="cover" />
      </Component>
      <style jsx>{`
        .book {
          perspective: 1600px;
          position: relative;
          padding: 0.5rem 0.5rem 0.5rem ${1 + spineActualWidthRems}rem;
        }

        .cover,
        .spine {
          transition: transform 1s ease 0s;
          border-radius: 0;
          display: block;
        }

        .cover {
          max-width: 100%;
          max-height: 100%;
          margin: 0 auto;
          transform-origin: left;
          box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
        }

        .spine {
          background-color: #ccc;
          top: 0.5rem;
          bottom: 0.5rem;
          right: calc(100% - ${1 + spineActualWidthRems}rem);
          position: absolute;
          transform-origin: right;
          height: calc(100% - 1rem);
        }

        .animated-book .cover,
        :global(.animated.enter) .animated-book .cover {
          transform: rotateY(${rotate}deg);
        }

        .animated-book .spine,
        :global(.animated.enter) .animated-book .spine {
          transform: rotateY(${rotate - 90}deg);
        }

        :global(.animated) .animated-book .cover,
        :global(.animated.enter) .animated-book:hover .cover,
        :global(.animated.enter) .animated-book:focus .cover,
        .animated-book:hover .cover,
        .animated-book:focus .cover,
        .cover {
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
