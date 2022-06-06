import React from "react";
import Title from "../title/title";
import { DivWrapper, Div1, Div2, Div3 } from "./styled";

const AdvantageCard = ({ title, type, about, isNegative, image }) => {
  return (
    <DivWrapper isNegative={isNegative}>
      <Div1>
      <Div2>
        <img
          width={56}
          height={56}
          src={image}
          alt={title} />
        <Div3>
          <span>{type}</span>
          <Title>{title}</Title>
        </Div3>
      </Div2>
      <p>{about}</p>
      </Div1>
    </DivWrapper>
  );
};

export default AdvantageCard;
