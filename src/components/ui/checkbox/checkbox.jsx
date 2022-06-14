import React from "react";
import { Label, Input, } from "./styled";


const Checkbox = ({product, onChange, onClick }) => {


  const handleProductId = (event) => {
    if (event.target.checked) {
      onChange(event.target.id);
    }
  };

  const handleProduct = (event) => {
    if (event.target.checked) {
      onClick(product);
    }
  }

  return (
    <>
      <Label>
        <span>{product.name}</span>
       <Input type="checkbox" id={product.id} onChange={handleProductId} onClick={handleProduct}/>

      </Label>
    </>
  );
}

export default Checkbox;
