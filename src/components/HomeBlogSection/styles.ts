import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import { BreakpointWrapper } from "../BreakpointWrapper";

export const Container = styled(BreakpointWrapper)`
  padding: 20px 50px;
`;

export const Wrapper = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;

export const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

export const Heading = styled.h2`
  margin: 0;
  font-size: 30px;
`;

export const ShowMoreLink = styled(Link)`
  padding: 10px;
  border-radius: 30px;
  border: 1px solid ${colors.grey600};
  font-size: 15px;
  color: black;
`;

export const PostGroups = styled.div`
  display: flex;

  & > *:not(:first-child) {
    margin-left: 20px;
  }
`;

export const Post = styled.div`
  width: 100%;
`;
