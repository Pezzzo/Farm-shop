import React, {useState} from "react";
import { StyledMain } from "./styled";
import ProductOrder from "../../blocks/product-order/product-order";
import products from "../../../mocks/products";


const BuyPage = () => {

  return (
    <StyledMain as="main">
      <ProductOrder products={products} />
    </StyledMain>
  );
}

export default BuyPage;
