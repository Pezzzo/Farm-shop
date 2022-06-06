import React from "react";
import { NavButton } from "./styled";

const Button = ({children}) => {
  return (
    <NavButton type="button">
      {children}
    </NavButton>
  );
};

export default Button;
