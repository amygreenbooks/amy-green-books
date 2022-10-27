import { component$, useStylesScoped$ } from "@builder.io/qwik";
import imgSrcSet from "~/lib/imgSrcSet";
import styles from "./retailer.css";

type RetailerProps = {
  link: string;
  image: string;
  name: string;
};

export default component$(({ link, image, name }: RetailerProps) => {
  useStylesScoped$(styles);
  return (
    <div class="w-third-ns w-50 pa2 border-box flex w100">
      <a
        class="db pa2 raise bg-off-white flex items-center w-100 br1"
        target="_blank"
        rel="noreferrer"
        href={link}
      >
        <img
          {...imgSrcSet({
            src: image,
            resize: "fit",
            h: 100,
          })}
          alt={name}
          class="db mw-100 br0 center retailer-img"
        />
      </a>
    </div>
  );
});
