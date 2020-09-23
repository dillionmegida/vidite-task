import styled from "styled-components";
import { colors } from "../../styles/colors";
import { BreakpointWrapper } from "../BreakpointWrapper";

export const Container = styled(BreakpointWrapper)`
  padding: 50px;
  margin: 20px auto;
  display: flex;

  & > * {
    width: 50%;
    &:last-child {
      margin-left: 50px;
    }
  }
`;

export const LeftColumn = styled.div``;

export const VideoContainer = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.grey300};
`;

export const PlayButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${colors.teal500};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RightColumn = styled.div`
  h2,
  p {
    margin: 0;
  }
`;

export const Heading = styled.div`
  font-size: 25px;
  margin-top: 20px;
`;

export const Para = styled.div`
  line-height: 1.5;
  color: ${colors.grey800};
  font-size: 18px;
  margin-top: 20px;
`;
