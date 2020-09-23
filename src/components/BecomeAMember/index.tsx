import React from "react";
import { links } from "../../constants/links";
import { Container, Wrapper, Heading, Text, JoinUsLink } from "./styles";

export const BecomeAMember = () => {
  return (
    <Container>
      <Wrapper>
        <Heading>Become a member</Heading>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in
          odio congue, pellentesque urna quis, malesuada nibh. Donec feugiat
          consectetur convallis.
        </Text>
        <JoinUsLink to={links.REGISTER}>JOIN US</JoinUsLink>
      </Wrapper>
    </Container>
  );
};
