import React from "react";
import {
  StyledButton,
  StyledButtonBase
} from "../button/styled";
import AppRoute from "../../../const";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";




const ButtonLink = () => {

  const links = [
    {
      to: AppRoute.MAIN,
      item: <Link
        to={AppRoute.MAIN}
        style={{ textDecoration: 'none' }}
      >
        <StyledButtonBase>
          Главная
        </StyledButtonBase>
      </Link>
    },
    {
      to: AppRoute.BUY,
      item:
        <Link
          to={AppRoute.BUY}
          style={{ textDecoration: 'none' }}
        >
          <StyledButton>
            Купить
          </StyledButton>
        </Link>
    }
  ];

  const pageUrl = useLocation().pathname;

  return (
    <>
      {links
        .filter((link) => link.to !== pageUrl)
        .map((link) => (
          <div key={link.to}>{link.item}</div>
        ))}
    </>
  );
};

export default ButtonLink;
