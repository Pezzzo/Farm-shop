import styled from "styled-components";
import vector from "../../../assets/Vector.svg";

export const Label = styled.label`
display: flex;
align-items: center;
justify-content: space-between;
padding: 13px 20px 13px 0;
`;

export const Input = styled.input`
width: 24px;
height: 24px;
appearance: none;
position: relative;
border: 1px solid rgba(0, 0, 0, 0.1);
cursor: pointer;
background-color: ${(props) => props.theme.colorGrey};

&:checked {
  background-color: ${(props) => props.theme.colorOrange};
}

&:checked::before {
  content: " ";
  position: absolute;
  width: 24px;
  height: 24px;
  top: -2px;
  left: -1px;
  background-image: url(${vector});
  background-repeat: no-repeat;
  background-position: center center;
}
`;
