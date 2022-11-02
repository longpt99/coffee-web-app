import styles from "./styles.module.css";
import { bgImage } from "../../assets/images";

function Background(props) {
  return (
    <div className={styles.wrapper}>
      <img src={bgImage} alt="" />
      <h1 className={styles.headingText}>{props.children}</h1>
    </div>
  );
}

export default Background;
