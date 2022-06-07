import React from "react";
import { StyledTitle } from "./styled";

export const TitleSize = {
  BIG: "big",
  MEDIUM: "medium",
  SMALL: "small",
  EXTRA_SMALL: "extra_small"
};

const Title = ({children}) => {
  return (
    <StyledTitle>
      {children}
    </StyledTitle>
  );
};

export default Title;
