import React from "react";
import { StyledMain } from "./styled";
import ProductsList from "../../blocks/products-list/products-list";
import ProductOrder from "../../blocks/product-order/product-order";
import products from "../../../mocks/products";


const BuyPage = () => {
  return (
    <StyledMain as="main">
      <ProductOrder products={products}/>
      <ProductsList products={products}/>
    </StyledMain>
  );
}

export default BuyPage;
