import styled from "styled-components";
import { colors } from "../../styles/colors";
import { BreakpointWrapper } from "../BreakpointWrapper";
import { Link } from "react-router-dom";

export const Container = styled(BreakpointWrapper)`
  border-top: 1px solid ${colors.grey300};
  padding: 50px;
  margin-top: 80px;
  color: ${colors.grey900};
`;

export const Wrapper = styled.div`
  max-width: 800px;
  width: 100;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
`;

export const LeftColumn = styled.div``;

export const LogoContainer = styled.div`
  width: 200px;
`;

export const Logo = styled.img`
  width: 100%;
`;

export const RightColumn = styled.div`
  display: flex;
`;

export const Links = styled.div`
  margin-right: 40px;
`;

export const _Link = styled(Link)`
  color: ${colors.grey900};
  font-size: 15px;
  display: block;
  margin-bottom: 10px;
`;

export const NewsletterContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 15px;
  max-width: 200px;
`;

export const NewsletterHeader = styled.span`
  display: block;
  font-weight: 600;
`;

export const NewsletterText = styled.p`
  margin: 15px 0;
  line-height: 1.5;
`;
