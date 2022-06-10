import React from "react";
import { P, Span } from "./styled";

const TabsContent = ({ data = [], colon = ": " }) => {
  return (
    <>
      {data.map((option, index) => (
        <P key={`tab${index * 10}`}>
          <Span>
            {option.property}
            {colon}
          </Span>
          {option.value}
        </P>
      ))}
    </>
  );
}

export default TabsContent;
