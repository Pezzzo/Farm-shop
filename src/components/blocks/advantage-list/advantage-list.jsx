import React from "react";
import Title from "../../ui/title/title";
import Button from "../../ui/button/button";
import AdvantageCard from "../../ui/advantage-card/advantage-card";
import { GridList } from "./styled";

const AdvantageList = ({advantages}) => {
  return advantages && advantages.length ? (
    <section>
      <Title>Почему фермерские продукты лучше?</Title>
      <GridList>
        {advantages.map((advant) => (
          <li key={advant.id}>
            <AdvantageCard {...advant} />
          </li>
        ))}
      </GridList>
      <Button>Купить</Button>
    </section>
  ) : null;
};

export default AdvantageList;
