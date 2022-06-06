import React from "react";
import logo from "../../../assets/farmer 1.png";
import { Link, NameOfShop } from "./styled";

const Logo = () => {
  return <>
    <Link href="/">
      <img src={logo} alt="логотип" />
      <NameOfShop>Фермерские продукты</NameOfShop>
    </Link>
  </>;
};

export default Logo;
