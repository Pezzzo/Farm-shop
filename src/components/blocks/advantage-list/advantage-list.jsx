import React from "react";
import Title from "../../ui/title/title";
import Button from "../../ui/button/button";
import AdvantageCard from "../../ui/advantage-card/advantage-card";

const AdvantageList = ({advantages}) => {
  return advantages && advantages.length ? (
    <section>
      <Title>Почему фермерские продукты лучше?</Title>
      <ul>
        {advantages.map((advant) => (
          <li key={advant.id}>
            <AdvantageCard {...advant} />
          </li>
        ))}
      </ul>
      <Button>Купить</Button>
    </section>
  ) : null;
};

export default AdvantageList;
