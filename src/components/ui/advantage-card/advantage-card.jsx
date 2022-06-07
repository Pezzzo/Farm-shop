import React from "react";
import { DivWrapper, Div1, Div2, StyledTitle, Img, Span, P } from "./styled";

const AdvantageCard = ({ title, type, about, isNegative, image }) => {
  return (
    <DivWrapper isNegative={isNegative}>
      <Div1>
        <Div2>
          <Img
            width={56}
            height={56}
            src={image}
            alt={title} />
          <div>
            <Span isNegative={isNegative}>{type}</Span>
            <StyledTitle>{title}</StyledTitle>
          </div>
        </Div2>
        <P>{about}</P>
      </Div1>
    </DivWrapper>
  );
};

export default AdvantageCard;
