import React from "react";
import Title from "../title/title";

const AdvantageCard = ({title, type, about, image}) => {
  return (
    <>
      <img
      width={56}
      height={56}
      src={image}
      alt={title} />
      <div>
        <span>{type}</span>
        <Title>{title}</Title>
      </div>
      <p>{about}</p>
    </>
  );
};

export default AdvantageCard;
