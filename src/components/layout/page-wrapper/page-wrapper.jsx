import React from "react";
import Header from "../header/header";
import MainPage from "../../pages/main-page/main-page";
import Footer from "../footer/footer";
import advantages from "../../../mocks/advantages";
import BuyPage from "../../pages/buy-page/buy-page";


const PageWrapper = () => {
  return (
    <>
      <Header />
          <BuyPage />
      <Footer />
    </>
  );
};

export default PageWrapper;

//<MainPage advantages={advantages} />
