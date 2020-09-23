import React from "react";
import {
  HeaderContainer,
  LogoContainer,
  Logo,
  MainLinks,
  _Link,
  _AuthLink,
  AuthLinks,
  Header as _Header,
} from "./styles";
import { Link } from "react-router-dom";
import { links } from "../../constants/links";
import { authLinks, mainLinks } from "./links";

export const Header = () => {
  return (
    <HeaderContainer>
      <_Header>
        <LogoContainer>
          <Link to={links.HOME}>
            <Logo src="/images/logo.png" />
          </Link>
        </LogoContainer>
        <nav>
          <MainLinks>
            {mainLinks.map(({ label, href }) => (
              <li>
                <_Link to={href}>{label}</_Link>
              </li>
            ))}
          </MainLinks>
        </nav>
        <div>
          <AuthLinks>
            {authLinks.map(({ label, href }, i) => (
              <li>
                <_AuthLink invertColor={i === 1} to={href}>
                  {label}
                </_AuthLink>
              </li>
            ))}
          </AuthLinks>
        </div>
      </_Header>
    </HeaderContainer>
  );
};
