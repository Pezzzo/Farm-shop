import React, { useRef, useState, useEffect } from "react";
import CheckboxList from "../../ui/checkbox-list/checkbox-list";
import ProductCart from "../../ui/product-cart/product-cart";
import products from "../../../mocks/products";
import { SectionOrder, SectionCard, FieldsetOrder, FormButton, TextInput, PriceText, Price, Form } from "./styled";

const ProductOrder = () => {

  const buttonRef = useRef();
  const [getId, setId] = useState('');

  const handleChange = (getId) => {
    setId(getId);
    console.log(getId);
  };

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  }, [getId])


  console.log(buttonRef.current);





  return (
    <>
      <SectionOrder>
        <Form>
          <CheckboxList updateChange={handleChange} />
          <FieldsetOrder>
            <h4>Сделать заказ</h4>
            <label>
              <TextInput type="text" placeholder="Введите адрес доставки" />
              <PriceText>Цена</PriceText>
              <Price>400 руб.</Price>
              <FormButton>Купить</FormButton>
            </label>
          </FieldsetOrder>
        </Form>
      </SectionOrder>
      <SectionCard>
        {products.map((product) => <ProductCart ref={buttonRef} product={product} key={product.id} getId={getId} />)}
      </SectionCard>
    </>
  );
}

export default ProductOrder;

