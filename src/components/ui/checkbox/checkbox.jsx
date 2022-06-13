import React from "react";
import { Label, Input, } from "./styled";


const Checkbox = ({product, onChange, onClick }) => {

  const handleSelectId = (event) => {
    onChange(event.target.id);
  };

  const handleProductId = (event) => {
    if (event.target.checked) {
      onClick(product.price);
    } else {
      onClick(-product.price);
    }
  }

  return (
    <>
      <Label>
        <span>{product.name}</span>
       <Input type="checkbox" id={product.id} onChange={handleSelectId} onClick={handleProductId}/>

      </Label>
    </>
  );
}

export default Checkbox;
