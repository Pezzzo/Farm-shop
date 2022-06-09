import React from "react";
import { Section, FieldsetCheckbox, FieldsetOrder, FormButton, Title, TextInput, PriceText, Price, Form } from "./styled";

const ProductOrder = () => {
  return (
    <Section>
      <Form>
        <FieldsetCheckbox>
          <Title>Выберите продукты</Title>
          <label>
            <span>продукт (чекбокс)</span>
            <input type="checkbox" name="" />
          </label>
        </FieldsetCheckbox>
        <FieldsetOrder>
          <Title>Сделать заказ</Title>
          <label>
            <TextInput type="text" placeholder="Введите адрес доставки" />
            <PriceText>Цена</PriceText>
            <Price>400 руб.</Price>
            <FormButton>Купить</FormButton>
          </label>
        </FieldsetOrder>
      </Form>
    </Section>

  );
}

export default ProductOrder;
