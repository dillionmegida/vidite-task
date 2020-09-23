import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";
import { colors } from "../../styles/colors";
import { fontSizes } from "../../styles/fonts";
import { BreakpointWrapper } from "../BreakpointWrapper";
import { Button } from "../Button";

export const HeroContainer = styled.div`
  width: 100%;
  background-image: url("/images/hero-bg-lines.png");
  background-size: cover;
  background-repeat: no-repeat;
`;

export const ColumnsWrapper = styled(BreakpointWrapper)`
  min-height: calc(100vh - 100px); // 100px is height of the header
  justify-content: space-between;
  display: flex;
  align-items: center;
  padding: 20px 80px;
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
  line-height: 1.5;
`;

export const _Button = styled(Button)`
  background-color: ${colors.teal500};
  color: white;
  width: 200px;
`;

export const RightColumn = styled.div`
  width: 500px;
`;

export const HeroImageWrapper = styled.div`
  width: 100%;
  height: 500px;
`;

export const HeroImage = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;
