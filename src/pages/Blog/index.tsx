import MainLayout from "../../components/Layout/Main/MainLayout";
import Background from "../../components/Backgound/Background";
import ListProduct from "../../components/ListProduct/ListProduct";
import { useQuery } from "react-query";
import axios from "../../utils/axios";
import React from "react";

function BlogPage(props) {
  // Fetcher function
  const getProducts = async () => {
    const res = await axios.get(`/products`);
    return res.data;
  };
  // Using the hook
  const { data, error, isLoading } = useQuery("randomFacts", getProducts);
  console.log(data);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  console.log(data);

  return <React.Fragment>Blog</React.Fragment>;
}

export default BlogPage;
