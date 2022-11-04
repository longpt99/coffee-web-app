import styles from "./styles.module.css";
import { itemShowcaseMain } from "../../assets/images";
import React, { useCallback, useState } from "react";
import ModalLayout from "../Layout/Modal/Modal";
import ProductDetail from "../ProductDetail/ProductDetail";
import axios from "../../utils/axios";

function ListProduct(props) {
  const [modalShown, setModalShow] = useState(false);
  const [product, setProduct] = useState(null);

  const handleOnClickAddProduct = useCallback(async (id: string) => {
    const res = await axios.get(`/products/${id}`);
    if (res) setProduct(res.data);
    setModalShow(!modalShown);
  }, []);

  return (
    <React.Fragment>
      {modalShown && (
        <ModalLayout
          shown={modalShown}
          close={() => {
            setModalShow(!modalShown);
          }}
        >
          <ProductDetail
            product={product}
            close={() => {
              setModalShow(!modalShown);
            }}
          />
        </ModalLayout>
      )}
      <div className={styles.wrapper}>
        {props.products.map((item, i) => (
          <div className={styles.card} key={i}>
            <img src={itemShowcaseMain} className={styles.productImage} />
            <h3 className={styles.textProduct}>{item.name}</h3>
            <p>{item.price} VND</p>
            <button
              className={styles.btn}
              onClick={() => handleOnClickAddProduct(item.id)}
            >
              Buy
            </button>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

export default ListProduct;
