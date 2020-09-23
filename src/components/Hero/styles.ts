import styled from "styled-components";
import { colors } from "../../constants/colors";
import { fontSizes } from "../../constants/fonts";
import { Button } from "../Button";

export const HeroContainer = styled.div`
  width: 100%;
  background-color: ${colors.teal200};
  min-height: calc(100vh - 100px); // 100px is height of the header
  display: flex;
  padding: 20px 80px;
  justify-content: space-between;
  align-items: center;
`;

export const LeftColumn = styled.div`
  width: 50%;
  min-width: 400px;
`;

export const HeroTitle = styled.div`
  font-size: ${fontSizes.xl};
`;

export const HeroPara = styled.div`
  font-size: ${fontSizes.lg};
`;

export const _Button = styled(Button)`
  background-color: ${colors.teal500};
  color: white;
  width: 200px;
`;

export const RightColumn = styled.div`
  width: 400px;
`;

export const HeroImage = styled.div`
  width: 100%;
  height: 400px;
  background-color: pink;
`;
