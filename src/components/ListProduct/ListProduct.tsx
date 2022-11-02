import styles from "./styles.module.css";
import { itemShowcaseMain } from "../../assets/images";

export default function ListProduct(props) {
  return (
    <div className={styles.wrapper}>
      {props.children.map((item, i) => (
        <div className={styles.card} key={i}>
          <img src={itemShowcaseMain} className={styles.productImage} />
          <h3 className={styles.textProduct}>{item.name}</h3>
          <p>{item.price} VND</p>
          <button
            className={styles.btn}
            onClick={() => props.handleOnClickAddProduct(item.id)}
          >
            Buy
          </button>
        </div>
      ))}
    </div>
  );
}
