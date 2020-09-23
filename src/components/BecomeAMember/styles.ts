import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import { BreakpointWrapper } from "../BreakpointWrapper";

export const Container = styled(BreakpointWrapper)`
  margin: 80px auto 0;
`;

export const Wrapper = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  background-image: url("/images/membership.png");
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 10px;

  h2,
  p {
    max-width: 500px;
  }
`;

export const Heading = styled.h2`
  font-size: 30px;
  color: white;
  margin: 20px 0;
  text-align: center;
`;

export const Text = styled.p`
  margin: 0;
  text-align: center;
  color: white;
  font-size: 15px;
  line-height: 1.5;
`;

export const JoinUsLink = styled(Link)`
  display: block;
  width: 150px;
  padding: 10px;
  background-color: white;
  color: ${colors.purple700};
  border-radius: 5px;
  text-align: center;
  margin: 20px;
  font-size: 15px;
`;
