import React from "react";
import { links } from "../../constants/links";
import {
  Container,
  Links,
  LogoContainer,
  Logo,
  Wrapper,
  _Link as Link,
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
            <Link to={links.ABOUT}>About</Link>
            <Link to={links.NEWS}>News</Link>
            <Link to={links.EVENTS}>Events</Link>
            <Link to={links.INTERNATIONAL}>International</Link>
            <Link to={links.CONTACT}>Contact</Link>
          </Links>
          <Links>
            <Link to={links.TERMS}>Terms of use</Link>
            <Link to={links.COOKIE_POLICY}>Cookie policy</Link>
            <Link to={links.PRIVACY}>Privacy policy</Link>
            <Link to={links.WEATHER}>Weather</Link>
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
