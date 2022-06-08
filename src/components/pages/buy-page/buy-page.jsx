import React from "react";
import { StyledMain } from "./styled";
import ProductsList from "../../blocks/products-list/products-list";
import ProductOrder from "../../blocks/product-order/product-order";


const BuyPage = () => {
  return (
    <StyledMain as="main">
      <ProductOrder />
      <ProductsList />
    </StyledMain>
  );
}

export default BuyPage;
