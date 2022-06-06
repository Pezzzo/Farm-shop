import React from "react";
import Title from "../../ui/title/title";
import Button from "../../ui/button/button";
import AdvantageCard from "../../ui/advantage-card/advantage-card";
import { GridList, AdvantageSection } from "./styled";
import { StyledLi } from "../../styled/li/styled";

const AdvantageList = ({advantages}) => {
  return advantages && advantages.length ? (
    <AdvantageSection>
      <Title>Почему фермерские продукты лучше?</Title>
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
