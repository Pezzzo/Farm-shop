import React from "react";
import Button from "../../ui/button/button";
import AdvantageCard from "../../ui/advantage-card/advantage-card";
import { GridList, AdvantageSection, StyledTitle } from "./styled";
import { StyledLi } from "../../styled/li/styled";

const AdvantageList = ({advantages}) => {
  return advantages && advantages.length ? (
    <AdvantageSection>
      <StyledTitle>Почему фермерские продукты лучше?</StyledTitle>
      <GridList>
        {advantages.map((advant) => (
          <StyledLi key={advant.id}>
            <AdvantageCard {...advant} />
          </StyledLi>
        ))}
      </GridList>
      <Button>Купить</Button>
    </AdvantageSection>
  ) : null;
};

export default AdvantageList;
