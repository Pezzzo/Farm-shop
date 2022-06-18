import React, { useRef, useState, useEffect } from "react";
import "./scroll.css";
import CheckboxList from "../../ui/checkbox-list/checkbox-list";
import ProductCart from "../../ui/product-cart/product-cart";
import products from "../../../mocks/products";
import {
  SectionOrder,
  SectionCard,
  FieldsetOrder,
  FormButton,
  TextInput,
  PriceText,
  Price,
  Form,
  Title,
  ButtonUp,
  SelectedProductsDiv,
  TitleSelectedProducts,
  List,
  ListItem
} from "./styled";

const ProductOrder = () => {

  const cartRef = useRef();

  const [productId, setProductId] = useState("");
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleSelectId = (id) => {
    setProductId(id);
  };

  const handleProducts = (selectedProduct) => {

    const arr = [...selectedProducts];
    const index = arr.indexOf(selectedProduct);
    if (~index) {
      arr.splice(index, 1);
    } else {
      arr.push(selectedProduct);
    }

    setSelectedProducts([...arr]);
  };

  const fullPrice = selectedProducts.reduce(
    (previousValue, currentValue) => (previousValue + currentValue.price),
    0
  );

  useEffect(() => {
    if (cartRef.current) {
      cartRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [productId])

  // попап
  const [address, setAddress] = useState("");
  const handleBuyClick = () => {
    // eslint-disable-next-line no-alert
    alert(`Спасибо за заказ, вы купили:\n${selectedProducts.map(
      (product) => `${product.name} - ${product.price} руб.\n`
    )}
    Итого: ${fullPrice} руб.
    Доставка по адресу: ${address}.`);
  };

  // кнопка "наверх"
  const handlerScrollUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return products && products.length ? (
    <>
      <SectionOrder>
        <Form>
          <CheckboxList
            updateId={handleSelectId}
            updateProducts={handleProducts}
          />
          <FieldsetOrder>
            <Title>Сделать заказ</Title>
            <label>
              <TextInput
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                placeholder="Введите адрес доставки" />
            </label>
            <SelectedProductsDiv>
              <List>
                <TitleSelectedProducts>Выбранные продукты:</TitleSelectedProducts>
                {selectedProducts.map(
                  (product) =>
                    <ListItem>
                      {product.name} - {product.price} руб.
                    </ListItem>
                )}
              </List>
            </SelectedProductsDiv>
            <PriceText>Итоговая цена:</PriceText>
            <Price>{fullPrice} руб.</Price>
            <FormButton
              onClick={handleBuyClick}
              disabled={!selectedProducts.length || !address}>
              Купить
            </FormButton>
          </FieldsetOrder>
        </Form>
      </SectionOrder>
      <SectionCard>
        {products.map((product) => <ProductCart
          ref={cartRef}
          product={product}
          key={product.id}
          productId={productId}
          updateId={handleSelectId}
          updateProducts={handleProducts} />)}
      </SectionCard>

      <ButtonUp
        onClick={handlerScrollUp}
        className={scroll < 420 ? "hidden" : "show"}>
        к оплате
      </ButtonUp>

    </>
  ) : (
    "Продукты были слишком вкусные и их разобрали."
  );
}

export default ProductOrder;

