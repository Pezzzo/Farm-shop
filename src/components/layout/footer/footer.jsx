import React from "react";
import Logo from "../../ui/logo/logo";
import { StyledFooter } from "./styled";

const Footer = () => {
  return (
    <StyledFooter>
      <Logo />
      <span>Создано 2021</span>
    </StyledFooter>
  );
};

export default Footer;
