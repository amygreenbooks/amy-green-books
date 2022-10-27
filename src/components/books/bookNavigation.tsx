import { component$, useStyles$ } from "@builder.io/qwik";
import { BookSummaryType } from "~/lib/content";
import imgSrcSet from "~/lib/imgSrcSet";
import styles from "./bookNavigation.css";

type BookNavigationProps = {
  next: BookSummaryType;
  previous: BookSummaryType;
};

export default component$(({ next, previous }: BookNavigationProps) => {
  useStyles$(styles);
  return (
    <section class="mw6 mb5 ph3 center">
      <h2 class="lh-title primary f3 b mb1">Explore my other books</h2>
      <div class="flex-ns">
        <div class="book-nav">{next && <BookNavLink {...next} />}</div>
        <div class="book-nav">
          {previous && <BookNavLink {...previous} right />}
        </div>
      </div>
    </section>
  );
});

type BookNavLinkProps = {
  right?: boolean;
} & BookSummaryType;

export function BookNavLink({
  id,
  image,
  title,
  right = false,
}: BookNavLinkProps) {
  return (
    <a href={`/books/${id}`} class="flex items-center pa2 book-link raise">
      {!right && <span class="arrow mr2 db-ns dn">←</span>}
      <img
        {...imgSrcSet({
          src: image,
          resize: "fit",
          h: 120,
        })}
        aria-labelledby={`exp-book-${id}`}
        class="book-link-cover"
      />
      <div class="ml3 ml2-ns">
        <h4 class="f5 f6-ns b mb1" id={`exp-book-${id}`}>
          <em>{title}</em>
        </h4>
        <p class="ma0 f6">View Book</p>
      </div>
      {right && <span class="arrow mr2 db-ns dn">→</span>}
    </a>
  );
}
