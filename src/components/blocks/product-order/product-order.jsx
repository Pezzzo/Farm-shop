import React, { useRef, useState, useEffect } from "react";
import CheckboxList from "../../ui/checkbox-list/checkbox-list";
import ProductCart from "../../ui/product-cart/product-cart";
import products from "../../../mocks/products";
import { SectionOrder, SectionCard, FieldsetOrder, FormButton, TextInput, PriceText, Price, Form, Title } from "./styled";

const ProductOrder = () => {

  const cartRef = useRef();

  const [productId, setProductId] = useState('');
  const [selectProductsPrice, setSelectProductsPrice] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectProduct, setSelectProduct] = useState('');


  const handleSelectId = (productId) => {
    setProductId(productId);
  };
  // console.log(productId);

  const handleProduct = (selectProduct) => {
    setSelectProduct(selectProduct);
    setSelectProductsPrice([...selectProductsPrice, selectProduct.price]);
    setSelectedProducts([...selectedProducts, selectProduct])
  };
  console.log(selectProductsPrice)
  console.log(selectProduct)
  console.log(selectedProducts)

  const getUniqueId = (value, index, self) => {
    return self.indexOf(value) === index;
  };

  const uniqueIds = selectProductsPrice.filter(getUniqueId);

  const fullPrice = selectProductsPrice.reduce(
    (previousValue, currentValue) => previousValue += currentValue,
    0
  );
  // console.log(fullPrice)



  const [address, setAddress] = useState("");
  const handleBuyClick = () => {
    // eslint-disable-next-line no-alert
    alert(`Спасибо за заказ, вы купили:\n${selectedProducts.map(
      (product) => `${product.name} - ${product.price} руб.\n`
    )}
    Итого: ${fullPrice} руб.
    Доставка по адресу: ${address}.`);
  };


  useEffect(() => {
    if (cartRef.current) {
      cartRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [productId])

  return (
    <>
      <SectionOrder>
        <Form>
          <CheckboxList
            updateChange={handleSelectId}
            updateProducts={handleProduct}
          />
          <FieldsetOrder>
            <Title>Сделать заказ</Title>
            <label>
              <TextInput
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                placeholder="Введите адрес доставки" />
              <PriceText>Цена</PriceText>
              <Price>{fullPrice} руб.</Price>
              <FormButton onClick={handleBuyClick}>Купить</FormButton>
            </label>
          </FieldsetOrder>
        </Form>
      </SectionOrder>
      <SectionCard>
        {products.map((product) => <ProductCart ref={cartRef} product={product} key={product.id} productId={productId} />)}
      </SectionCard>
    </>
  );
}

export default ProductOrder;

