import styled from "styled-components";
import { NavButton } from "../../ui/button/styled";

export const Section = styled.section`
grid-column: 1 / 2;
`;

export const Form = styled.form`
@media (max-width: 768px) {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
`;

export const FieldsetCheckbox = styled.fieldset`
background-color: ${(props) => props.theme.colorWhite};
margin-bottom: 18px;
border: 1px solid rgba(0, 0, 0, 0.1);
padding: 24px 20px;
`;

export const FieldsetOrder = styled.fieldset`
background-color: ${(props) => props.theme.colorWhite};
border: 1px solid rgba(0, 0, 0, 0.1);
padding: 24px 20px;

@media (max-width: 768px) {

}
`;

export const FormButton = styled(NavButton)`
width: 100%;
`;

export const Title = styled.h4`
margin: 0;
padding-bottom: 24px;
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
