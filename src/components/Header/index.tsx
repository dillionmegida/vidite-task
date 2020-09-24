import React from "react";
import {
  HeaderContainer,
  LogoContainer,
  Logo,
  MainLinks,
  SLink,
  AuthLink,
  AuthLinks,
  Header,
} from "./styles";
import { Link } from "react-router-dom";
import { links } from "../../constants/links";
import { authLinks, mainLinks } from "./links";

export const PageHeader = () => {
  return (
    <HeaderContainer>
      <Header>
        <LogoContainer>
          <Link to={links.HOME}>
            <Logo src="/images/logo.png" />
          </Link>
        </LogoContainer>
        <nav>
          <MainLinks>
            {mainLinks.map(({ label, href }) => (
              <li>
                <SLink to={href}>{label}</SLink>
              </li>
            ))}
          </MainLinks>
        </nav>
        <div>
          <AuthLinks>
            {authLinks.map(({ label, href }, i) => (
              <li>
                <AuthLink invertColor={i === 1} to={href}>
                  {label}
                </AuthLink>
              </li>
            ))}
          </AuthLinks>
        </div>
      </Header>
    </HeaderContainer>
  );
};
