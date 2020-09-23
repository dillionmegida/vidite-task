import styled from "styled-components";
import { colors } from "../../styles/colors";
import { BreakpointWrapper } from "../BreakpointWrapper";

export const Container = styled(BreakpointWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;

  h2 {
    margin: 0;
  }
`;

export const Label = styled.div`
  text-align: center;
  font-size: 15px;
  color: ${colors.blue700};
`;

export const Heading = styled.div`
  margin-top: 20px;
  font-size: 25px;
  text-align: center;
  max-width: 600px;
`;

export const ServicesGroup = styled.div`
  margin-top: 100px;
  max-width: 800px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  & > * {
    &:nth-child(2),
    &:nth-child(4) {
      margin-left: 50px;
    }
  }
`;

export const Service = styled.div<{}>`
  width: 45%;
  display: flex;
  margin-bottom: 60px;

  h3 {
    margin: 0;
  }
`;

export const ServiceIcon = styled.div<{
  lightColor: string;
  darkColor?: string;
  imageFull?: boolean; // if the image is already complete (icon and bg)
}>`
  width: 40px;
  height: 40px;
  border-radius: 5px;
  background-color: ${({ lightColor }) => lightColor};
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    width: ${({ imageFull }) => (imageFull ? "40px" : "30px")};
    height: ${({ imageFull }) => (imageFull ? "40px" : "30px")};
  }
`;

export const ServiceTextGroup = styled.div`
  flex: 1;
  margin-left: 25px;
`;

export const ServiceHeading = styled.h3`
  font-size: 20px;
`;

export const ServiceText = styled.p`
  margin-top: 15px;
  line-height: 1.5;
`;
