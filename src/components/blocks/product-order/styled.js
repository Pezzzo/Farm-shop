import styled from "styled-components";
import { StyledButtonOrder } from "../../ui/button/styled";

export const SectionOrder = styled.section`
grid-column: 1 / 2;

@media (max-width: 768px) {
  grid-column: 1 / -1;
  margin-bottom: 20px;
}
`;

export const SectionCard = styled.section`
grid-column: 2 / 3;
overflow-y: scroll;
min-width: 320px;

@media (max-width: 768px) {
  grid-column: 1 / -1;
  overflow-y: hidden;
}
`;

export const Form = styled.form`
@media (max-width: 768px) {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
`;

export const FieldsetOrder = styled.fieldset`
background-color: ${(props) => props.theme.colorWhite};
border: 1px solid rgba(0, 0, 0, 0.1);
padding: 24px 20px;
margin: 0;
`;

export const FormButton = styled(StyledButtonOrder)`
width: 100%;
text-align: center;
`;

export const TextInput = styled.input`
border: 1px solid rgba(0, 0, 0, 0.1);
background-color: ${(props) => props.theme.colorGrey};
width: 100%;
padding: 12px 14px;
margin: 0;
margin-bottom: 20px;

::placeholder {
color: ${(props) => props.theme.colorBlackText};
}
`;

export const PriceText = styled.p`
margin: 0;
font-size: 14px;
line-height: 21px;
padding-bottom: 8px;
`;

export const Price = styled.p`
margin: 0;
padding-bottom: 32px;
font-size: 24px;
line-height: 28px;
font-weight: bold;
`;

export const Title = styled.h4`
margin: 0;
padding-bottom: 24px;
`;

export const ButtonUp = styled.button`
position: fixed;
top: 20px;
right: 40px;
border: none;
border-radius: 10px;
padding: 10px 20px;
background-color: ${(props) => props.theme.colorOrange};
color: ${(props) => props.theme.colorWhite};
cursor: pointer;
box-shadow: 0px 4px 10px 0px grey;
background:linear-gradient(to bottom, ${(props) => props.theme.colorOrangeHover} 5%, ${(props) => props.theme.colorOrange} 100%);

@media (min-width: 768px) {
  display: none;
}
`;
