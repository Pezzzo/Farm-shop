import React from "react";
import {
  AboutSection,
  Div,
  StyledTitle,
  P
} from "./styled";

const About = () => {
  return (
    <AboutSection>
      <Div>
        <StyledTitle>Магазин фермерских продуктов с доставкой</StyledTitle>
        <P>
          Все продукты изготавливаются под заказ.
          Фермеры начинают готовить продукты за день до отправки заказа клиентам.
          Именно поэтому мы принимаем заказы заранее и доставляем продукты максимально свежими.
        </P>
      </Div>
    </AboutSection>
  );
}

export default About;
