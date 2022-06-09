import React from "react";
import { StyledLi } from "../../styled/li/styled";
import { CartWrapper, Img, P } from "./styled";

const ProductCart = () => {
  return (
    <CartWrapper>
        <Img src="https://i.ibb.co/QHNkcKM/Rectangle-2.png" alt="" />
      <div>
        <h3>Филе бедра цыпленка</h3>
        <ul>
          <StyledLi>
            Описание
          </StyledLi>
        </ul>
        <P>Филе бедра без кожи и кости. Птица содержится в свободных птичниках,
          выращивается на натуральных зерновых кормах, что влияет положительно на вкус мяса.
          Филейная часть бедра обладает насыщенным вкусом и мясным ароматом.
        </P>
        <span>400 руб. / 700 гр.</span>
      </div>
    </CartWrapper>
  );
}

export default ProductCart;
