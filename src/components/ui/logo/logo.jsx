import React from "react";
import logo from "../../../assets/farmer 1.png";
import { Div, NameOfShop } from "./styled";
import { Link } from "react-router-dom";
import AppRoute from "../../../const";

const Logo = () => {
  return <>
    <Link
      to={AppRoute.MAIN}
      style={{ textDecoration: 'none' }}>
      <Div>
        <img src={logo} alt="логотип" />
        <NameOfShop>Фермерские продукты</NameOfShop>
      </Div>
    </Link>
  </>;
};

export default Logo;
