import React from "react";
import Logo from "../../ui/logo/logo";
import { StyledFooter, Span, Div } from "./styled";

const Footer = () => {
  return (
    <StyledFooter>
      <Div>

      <Logo />
      <Span>Создано 2021</Span>
      </Div>
    </StyledFooter>
  );
};

export default Footer;
