import styled from "styled-components";
import aboutFarmer from "../../../assets/Farmer.svg";

export const AboutSection = styled.section`
background-color: ${(props) => props.theme.colorLightBlue};
background-image: url(${aboutFarmer});
background-repeat: no-repeat;
background-position: 744px 100%;
padding-left: ${(props) => props.theme.pagePadding};
min-height: 600px;
display: flex;
align-items: center;
margin-bottom: 100px;

@media (max-width: 1200px) {
  background-position: 620px 100%;
  }

@media (max-width: 1080px) {
  background-position: 50% 100%;
  display: block;
  }

@media (max-width: 768px) {
  padding-left: 30px;
  padding-right: 30px;
}
`;

export const Div = styled.div`
max-width: 538px;

@media (max-width: 1080px) {
margin: 0 auto;
padding-top: 40px;
padding-bottom: 560px;
}
`;

export const StyledTitle = styled.h1`
@media (max-width: 768px) {
  font-size: 36px;
  line-height: 41px;
}

@media (max-width: 550px) {
  font-size: 24px;
  line-height: 31px;
}
`;

export const P = styled.p`
@media (max-width: 550px) {
  font-size: 14px;
  line-height: 18px;
}
`;
