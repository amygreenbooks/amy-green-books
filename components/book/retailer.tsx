import styles from "./retailer.module.css";
import CldImage from "../CldImage";

export default function Retailer({
  link,
  image,
  name,
}: {
  link: string;
  image: string;
  name: string;
}) {
  return (
    <div className="w-third-ns w-50 pa2 border-box flex w100">
      <a
        className="db pa4 pa3-ns pa2-m raise bg-off-white flex items-center w-100 br1"
        target="_blank"
        rel="noreferrer"
        href={link}
      >
        <CldImage
          width={300}
          height={100}
          src={image}
          alt={name}
          className={`db mw-100 br0 center ${styles.img}`}
        />
      </a>
    </div>
  );
}
