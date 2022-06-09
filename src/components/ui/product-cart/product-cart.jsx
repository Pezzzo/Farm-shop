import React from "react";
import { StyledLi } from "../../styled/li/styled";
import { CartWrapper, Img, Description, Price, TabsList, Tab, Title } from "./styled";
import products from "../../../mocks/products";

const ProductCart = ({ product }) => {

  return (
    <CartWrapper>
      <div>
        <Img src={product.image} />
        <Title>{product.name}</Title>
        <TabsList>
          <StyledLi>
            <Tab>Oписание</Tab>
            <Description>{product.description}
            </Description>
          </StyledLi>
        </TabsList>
        <Price>{product.price} руб. / {product.weight} гр.</Price>
      </div>
    </CartWrapper>
  );
}

export default ProductCart;
