import ScrollAnimation from "./util/animateOnScroll";
import cn from "classnames";

const rotate = 15;

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
      <Component className={cn(className, "book")} {...props}>
        <div className="spine"></div>
        <img src={image} alt={title} className="cover" />
      </Component>
      <style jsx>{`
        .book {
          perspective: 1600px;
          position: relative;
          padding: 0.5rem 0.5rem 0.5rem 1.5rem;
        }

        .cover,
        .spine {
          transition: transform 1s ease 0s;
        }

        .cover {
          max-width: 100%;
          max-height: 100%;
          display: block;
          margin: 0 auto;
          transform-origin: left;
          box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
          border-radius: 0;
        }

        .spine {
          background-color: #ccc;
          top: 0.5rem;
          bottom: 0.5rem;
          left: 1.5rem;
          position: absolute;
          transform-origin: left;
          width: 4.5rem;
        }

        .cover,
        :global(.animated.enter) .cover {
          transform: rotateY(${rotate}deg);
        }

        .spine,
        :global(.animated.enter) .spine {
          transform: rotateY(${rotate + 90}deg);
        }

        :global(.animated) .cover,
        :global(.animated.enter) .book:hover .cover,
        :global(.animated.enter) .book:focus .cover,
        .book:hover .cover,
        .book:focus .cover {
          transform: rotateY(0deg) translateX(-0.5rem);
        }

        :global(.animated) .spine,
        :global(.animated.enter) .book:hover .spine,
        :global(.animated.enter) .book:focus .spine,
        .book:hover .spine,
        .book:focus .spine {
          transform: rotateY(90deg) translateZ(-0.5rem);
        }

        @media (prefers-reduced-motion) {
          :global(.animated) .cover,
          :global(.animated.enter) .book:hover .cover,
          :global(.animated.enter) .book:focus .cover,
          .book:hover .cover,
          .book:focus .cover {
            transform: rotateY(${rotate}deg);
          }

          :global(.animated) .spine,
          :global(.animated.enter) .book:hover .spine,
          :global(.animated.enter) .book:focus .spine,
          .book:hover .spine,
          .book:focus .spine {
            transform: rotateY(${rotate + 90}deg);
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
