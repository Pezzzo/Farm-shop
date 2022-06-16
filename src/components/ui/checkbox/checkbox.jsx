import React from "react";
import { Label, Input, } from "./styled";


const Checkbox = ({ product, updateProducts, updateId }) => {

  const handleProductId = (event) => {
    if (event.target.checked) {
      updateId(event.target.id);
    }
  };

  return (
    <>
      <Label>
        <span>{product.name}</span>
        <Input type="checkbox" id={product.id} onChange={handleProductId} onClick={() => updateProducts(product)} />

      </Label>
    </>
  );
}

export default Checkbox;
