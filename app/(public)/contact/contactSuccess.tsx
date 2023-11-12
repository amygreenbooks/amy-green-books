import { H2 } from "@/components/typography/h";

import styles from "./contact.module.css";
import Typewriter from "./typewriter";

export default function ContactSuccess() {
  return (
    <>
      <span className={styles.seal}>
        <span className={styles.embossed}>
          <Typewriter className={styles.typewriter} />
        </span>
      </span>
      <div className="cms">
        <H2 className="tc">Thanks for your message!</H2>
      </div>
    </>
  );
}
