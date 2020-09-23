import styled from "styled-components";
import { colors } from "../../styles/colors";
import { BreakpointWrapper } from "../BreakpointWrapper";

export const Container = styled(BreakpointWrapper)`
  display: flex;
  flex-direction: column;
  margin: 100px auto;
`;

export const Text = styled.div`
  color: ${colors.grey400};
  text-align: center;
`;

export const Supporters = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  margin-top: 20px;

  & > * {
    &:not(:first-child) {
      margin-left: 100px;
    }
  }
`;

export const Supporter = styled.img`
  width: 200px;
  height: auto;
`;
