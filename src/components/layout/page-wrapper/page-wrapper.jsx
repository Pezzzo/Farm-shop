import React from "react";
import Header from "../header/header";
import MainPage from "../../pages/main-page/main-page";
import Footer from "../footer/footer";
import advantages from "../../../mocks/advantages";
// import { StyledMain } from "./styled";

const PageWrapper = () => {
  return (
    <>
      <Header />
        <MainPage advantages={advantages} />
      <Footer />
    </>
  );
};

export default PageWrapper;
