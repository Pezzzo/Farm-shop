import React, { useState } from "react";
import Checkbox from "../checkbox/checkbox";
import products from "../../../mocks/products";
import { FieldsetCheckbox, Title } from "./styled";

const CheckboxList = (props) => {

  return (
    <FieldsetCheckbox>
      <Title>
        Выберите продукты
      </Title>
      {products.map((product) => <Checkbox
        product={product}
        key={product.id}
        updateId={props.updateId}
        updateProducts={props.updateProducts}
      />)}
    </FieldsetCheckbox>
  );
}

export default CheckboxList;
