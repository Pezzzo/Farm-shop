import React from "react";
import { Section, Wrapper } from "./styled";
import ProductCart from "../../ui/product-cart/product-cart";
import products from "../../../mocks/products";

const ProductsList = () => {
  return (
    <Section>
      {products.map((product) => <ProductCart product={product} key={product.id}/>)}
    </Section>

  )
}

export default ProductsList;
