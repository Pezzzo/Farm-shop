import React from "react";
import Button from "../../ui/button/button";
import { Section, FieldsetCheckbox, FieldsetOrder } from "./styled";

const ProductOrder = () => {
  return (
    <Section>
      <form>
        <FieldsetCheckbox>
          <h4>Выберите продукты</h4>
          <label>
            <span>продукт (чекбокс)</span>
            <input type="checkbox" name="" />
          </label>
        </FieldsetCheckbox>
        <FieldsetOrder>
          <h4>Сделать заказ</h4>
          <label>
            <input type="text" placeholder="Введите адрес доставки" />
            <p>Цена</p>
            <p>400 руб.</p>
            <Button>Купить</Button>
          </label>
        </FieldsetOrder>
      </form>
    </Section>

  );
}

export default ProductOrder;
