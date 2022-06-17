import React from "react";
import About from "../../blocks/about/about";
import AdvantageList from "../../blocks/advantage-list/advantage-list";
import advantages from "../../../mocks/advantages";

const MainPage = () => {
  return (
    <main>
      <About />
      <AdvantageList advantages={advantages} />
    </main>
  );
};

export default MainPage;
