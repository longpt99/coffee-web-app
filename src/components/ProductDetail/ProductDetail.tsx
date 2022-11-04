import React, { useCallback, useEffect, useMemo, useState } from "react";
import styles from "./styles.module.css";
import { itemShowcaseMain } from "../../assets/images";
import classNames from "classnames";
import Button from "../Button/Button";

function ProductDetail(props) {
  const [quantity, setQuantity] = useState(1);

  function handleCountQuantity(val) {
    setQuantity(quantity + val);
  }

  const mapProductAttribute = (attribute): any => {
    const result = attribute.reduce((current, next, i) => {
      const arr = current[next.key] ?? [];
      arr.push({ value: next.value, price: next.price });
      current[next.key] = arr;
      return current;
    }, {});
    return Object.entries(result);
  };

  if (!props.product) {
    return <div>Loading</div>;
  }

  return (
    <div className={styles.wrapper}>
      <div className={classNames(styles.leftSide)}>
        <img src={itemShowcaseMain} alt="" />
      </div>
      <div className={classNames(styles.rightSide)}>
        <div className={styles.infoContainer}>
          <h3 className={styles.textName}>{props.product.name}</h3>
          <p className={styles.textDescription}>{props.product.description}</p>
          {mapProductAttribute(props.product.productAttributes).map((item) => {
            return (
              <div className={styles.attributeContent}>
                <label className={styles.itemLabel}>{item[0]}</label>
                <div className={styles.listAttribute}>
                  {item[1].map((val) => (
                    <span>{val.value}</span>
                  ))}
                </div>
              </div>
            );
          })}
          <div className={styles.quantity}>
            <label className={styles.itemLabel}>Quantity</label>
            <div className={styles.addItem}>
              <span onClick={() => handleCountQuantity(-1)}>-</span>
              <span className={styles.quantityItem}>{quantity}</span>
              <span onClick={() => handleCountQuantity(1)}>+</span>
            </div>
          </div>
          <Button className="btnAddItem" onClick={() => props.close()}>
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
