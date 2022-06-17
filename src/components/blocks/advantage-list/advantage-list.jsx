import React from "react";
import AdvantageCard from "../../ui/advantage-card/advantage-card";
import { StyledLi } from "../../styled/li/styled";
import ButtonLink from "../../ui/button-link/button-link";
import {
  GridList,
  AdvantageSection,
  StyledTitle,
  ButtonAdvantage
} from "./styled";

const AdvantageList = ({ advantages }) => {
  return advantages && advantages.length ? (
    <AdvantageSection>
      <StyledTitle>Почему фермерские продукты лучше?</StyledTitle>
      <GridList>
        {advantages.map((item) => (
          <StyledLi key={item.id}>
            <AdvantageCard {...item} />
          </StyledLi>
        ))}
      </GridList>
      <ButtonAdvantage>
        <ButtonLink>Купить</ButtonLink>
      </ButtonAdvantage>
    </AdvantageSection>
  ) : null;
};

export default AdvantageList;
