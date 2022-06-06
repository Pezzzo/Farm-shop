import React from "react";
import Title, { TitleSize } from "../../ui/title/title";
import { AboutSection, Div } from "./styled";

const About = ({ level }) => {
  return (
    <AboutSection>
      <Div>
        <Title level={level} size={TitleSize.BIG}>Магазин фермерских продуктов с доставкой</Title>
        <p>
          Все продукты изготавливаются под заказ.
          Фермеры начинают готовить продукты за день до отправки заказа клиентам.
          Именно поэтому мы принимаем заказы заранее и доставляем продукты максимально свежими.
        </p>
      </Div>
    </AboutSection>
  );
}

export default About;
