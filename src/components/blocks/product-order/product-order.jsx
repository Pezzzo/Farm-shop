import React, { useRef, useState, useEffect } from "react";
import CheckboxList from "../../ui/checkbox-list/checkbox-list";
import ProductCart from "../../ui/product-cart/product-cart";
import products from "../../../mocks/products";
import { SectionOrder, SectionCard, FieldsetOrder, FormButton, TextInput, PriceText, Price, Form, Title } from "./styled";

const ProductOrder = () => {

  const cartRef = useRef();
  const [selectProductId, setSelectProductId] = useState('');
  const [ids, setIds] = useState([]);
  const [productPrice, setProductPrice] = useState([]);


  const handleSelectId = (selectProductId) => {
    setSelectProductId(selectProductId);
    console.log(selectProductId);
  };

  const handleProductId = (ids) => {
    setIds(ids);
    setProductPrice([...productPrice, ids]);
  };

  console.log(productPrice)


  const fullPrice = productPrice.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  0
);

console.log(fullPrice)



  useEffect(() => {
    if (cartRef.current) {
      cartRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  }, [selectProductId])



//   const selectProducts = ids.map((id) =>
//   products.find((product) => product.id === selectProductId)
// );



// const fullPrice = selectProducts.reduce(
//   (sum, product) => (sum += product.price),
//   0
// );
// {fullPrice}
  return (
    <>
      <SectionOrder>
        <Form>
          <CheckboxList updateChange={handleSelectId} updateProducts={handleProductId}/>
          <FieldsetOrder>
            <Title>Сделать заказ</Title>
            <label>
              <TextInput type="text" placeholder="Введите адрес доставки" />
              <PriceText>Цена</PriceText>
              <Price>{fullPrice} руб.</Price>
              <FormButton>Купить</FormButton>
            </label>
          </FieldsetOrder>
        </Form>
      </SectionOrder>
      <SectionCard>
        {products.map((product) => <ProductCart ref={cartRef} product={product} key={product.id} selectProductId={selectProductId} />)}
      </SectionCard>
    </>
  );
}

export default ProductOrder;

