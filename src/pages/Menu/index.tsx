import MainLayout from "../../components/Layout/Main/MainLayout";
import Background from "../../components/Backgound/Background";
import ListProduct from "../../components/ListProduct/ListProduct";
import { useQuery } from "react-query";
import axios from "../../utils/axios";
import React, { useCallback, useEffect, useState } from "react";
import ModalLayout from "../../components/Layout/Modal/Modal";
import ProductDetail from "../../components/ProductDetail/ProductDetail";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

function ProductPage(props) {
  const [products, setProducts] = useState([]);

  // // Fetcher function
  const getProducts = async () => {
    const res = await axios.get(`/products`);
    return res.data;
  };

  const productList = useQuery("products", getProducts, {
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (productList.data) {
      setProducts(productList.data);
    }
  }, [productList.data]);

  if (productList.isLoading) {
    return <p>Loading...</p>;
  }

  return <ListProduct products={products} />;
}

export default ProductPage;
