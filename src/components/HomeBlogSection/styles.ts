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
  font-size: 14px;
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

export const PostCover = styled.div`
  width: 100%;
  height: 250px;
  border-radius: 10px;
  overflow: hidden;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const PostTitle = styled.div`
  margin-top: 15px;
  font-size: 18px;
`;

export const PostText = styled.div`
  margin-top: 10px;
  font-size: 15px;
  color: ${colors.grey800};
`;

export const ReadMoreLink = styled(Link)`
  color: ${colors.teal500};
  display: block;
  margin-top: 15px;
  font-size: 14px;
`;
