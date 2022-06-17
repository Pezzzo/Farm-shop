import React from "react";
import Logo from "../../ui/logo/logo";
import { StyledFooter, Span } from "./styled";

const Footer = () => {
  return (
    <StyledFooter>
      <Logo />
      <Span>Создано 2021</Span>
    </StyledFooter>
  );
};

export default Footer;
