import React from "react";
import { links } from "../../constants/links";
import {
  Container,
  Links,
  LogoContainer,
  Logo,
  Wrapper,
  _Link,
  LeftColumn,
  RightColumn,
  NewsletterContainer,
  NewsletterHeader,
  NewsletterText,
} from "./styles";

export const SubFooter = () => {
  return (
    <Container>
      <Wrapper>
        <LeftColumn>
          <LogoContainer>
            <Logo src="/images/logo.png" />
          </LogoContainer>
        </LeftColumn>

        <RightColumn>
          <Links>
            <_Link to={links.ABOUT}>About</_Link>
            <_Link to={links.NEWS}>News</_Link>
            <_Link to={links.EVENTS}>Events</_Link>
            <_Link to={links.INTERNATIONAL}>International</_Link>
            <_Link to={links.CONTACT}>Contact</_Link>
          </Links>
          <Links>
            <_Link to={links.TERMS}>Terms of use</_Link>
            <_Link to={links.COOKIE_POLICY}>Cookie policy</_Link>
            <_Link to={links.PRIVACY}>Privacy policy</_Link>
            <_Link to={links.WEATHER}>Weather</_Link>
          </Links>
          <NewsletterContainer>
            <NewsletterHeader>Subscribe to our newsletter</NewsletterHeader>
            <NewsletterText>
              Sign up to our monthly newsletter to stay up to date with iProduce
            </NewsletterText>
          </NewsletterContainer>
        </RightColumn>
      </Wrapper>
    </Container>
  );
};
