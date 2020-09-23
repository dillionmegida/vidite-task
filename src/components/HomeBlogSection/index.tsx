import React from "react";
import { links } from "../../constants/links";
import { Heading } from "./styles";
import { Container, ShowMoreLink, TopSection, Wrapper } from "./styles";

const blogs = [
  {
    img: '/images/farm.png'
  }
]

export const HomeBlogSection = () => {
  return (
    <Container>
      <Wrapper>
        <TopSection>
          <Heading>Check Our Blog</Heading>
          <ShowMoreLink to={links.BLOG}>Show more</ShowMoreLink>
        </TopSection>
      </Wrapper>
    </Container>
  );
};
