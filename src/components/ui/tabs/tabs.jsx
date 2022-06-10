import React, { useState } from "react";
import { StyledLi } from "../../styled/li/styled";
import { TabButton, TabsList, Description } from "./styled";

const Tabs = ({ dataList = [] }) => {
  const [selectIndex, setSelectIndex] = useState(0);
  return (
    <>
      <TabsList>
        {dataList.map((tab, index) => (
          <StyledLi key={`tab${index * 10}`}>
            <TabButton
              $isSelect={selectIndex === index}
              {...(selectIndex === index
                ? { as: "button" }
                : {
                  onClick: () => {
                    setSelectIndex(index);
                  }
                })}
            >
              {tab.title}
            </TabButton>
          </StyledLi>
        ))}
      </TabsList>
      <Description>
        {dataList[selectIndex].content}
      </Description>
    </>
  );
}

export default Tabs;
