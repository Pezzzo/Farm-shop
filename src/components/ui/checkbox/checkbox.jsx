import React from "react";
import { Label, Input, } from "./styled";


const Checkbox = ({product, onChange }) => {

  const handleChange = (event) => {
    onChange(event.target.id);
  };

  return (
    <>
      <Label>
        <span>{product.name}</span>
       <Input type="checkbox" id={product.id} onChange={handleChange}/>

      </Label>
    </>
  );
}

export default Checkbox;
