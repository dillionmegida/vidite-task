import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../constants/colors";

export const HeaderWrapper = styled.div`
  width: 100%;
  background-color: ${colors.teal200};
  padding: 10px 20px;
  height: 100px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const LogoContainer = styled.div`
  max-width: 200px;
  width: 100%;
`;

export const Logo = styled.img`
  width: 100%;
`;

export const MainLinks = styled.ul`
  display: flex;
  & > * {
    &:not(:first-child) {
      margin-left: 20px;
    }
  }
`;

export const AuthLinks = styled.ul`
  display: flex;
  & > *:first-child {
    margin-right: 20px;
  }
`;

export const _Link = styled(Link)`
  font-size: 17px;
  color: black;
  padding: 15px;

  &:hover {
    text-decoration: underline;
  }
`;

export const _AuthLink = styled(_Link)<{ invertColor?: boolean }>`
  background-color: ${({ invertColor }) =>
    invertColor ? colors.teal500 : "transparent"};
  color: ${({ invertColor }) => (invertColor ? "white" : colors.teal500)};
  border-width: 1px;
  border-style: solid;
  border-color: ${({ invertColor }) =>
    invertColor ? "transparent" : colors.teal500};
  border-radius: 5px;
  padding: 15px 25px;

  &:hover {
    text-decoration: none;
  }
`;
