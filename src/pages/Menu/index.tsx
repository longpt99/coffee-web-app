import MainLayout from "../../components/Layout/Main/MainLayout";
import Background from "../../components/Backgound/Background";
import ListProduct from "../../components/ListProduct/ListProduct";
import { useQuery } from "react-query";
import axios from "../../utils/axios";
import React, { useEffect, useState } from "react";
import ModalLayout from "../../components/Layout/Modal/Modal";

function ProductPage() {
  const [modalShown, toggleModal] = useState(false);
  const [productId, setProductId] = useState(null);
  const [products, setProducts] = useState([]);
  // Fetcher function
  const getProducts = async () => {
    const res = await axios.get(`/products`);
    return res.data;
  };
  const getProductDetail = async (productId) => {
    console.log("productId: ", productId);

    const res = await axios.get(`/products/${productId}`);
    return res.data;
  };

  const productList = useQuery("products", getProducts);
  // Fetcher function
  const productDetail = useQuery(
    ["productDetail", productId],
    () => getProductDetail(productId),
    {
      enabled: false,
      refetchOnWindowFocus: false,
    }
  );

  function handleOnClickAddProduct(id) {
    setProductId(id);
    productDetail.refetch();
  }

  useEffect(() => {
    if (productList.data) {
      setProducts(productList.data);
    }
  }, [productList.data]);

  if (productList.isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <ModalLayout
        shown={modalShown}
        close={() => {
          toggleModal(false);
        }}
      ></ModalLayout>
      <MainLayout>
        <Background>Menu</Background>
        <ListProduct handleOnClickAddProduct={handleOnClickAddProduct}>
          {products}
        </ListProduct>
      </MainLayout>
    </React.Fragment>
  );
}

export default ProductPage;
