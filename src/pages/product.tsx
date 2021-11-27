import React from "react";
import { useParams } from "react-router-dom";

const Product: React.FC = () => {
  const { id } = useParams();
  return <h2>This is a page for product with ID: {id} </h2>;
};

export default Product;
