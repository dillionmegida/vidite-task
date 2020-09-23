import React from "react";
import { links } from "../../constants/links";
import { addEllispis } from "../../utils/string";
import {
  Heading,
  Post,
  PostCover,
  PostGroups,
  PostText,
  PostTitle,
  ReadMoreLink,
} from "./styles";
import { Container, ShowMoreLink, TopSection, Wrapper } from "./styles";

const blogs: { img: string; title: string; text: string; path: string }[] = [
  {
    img: "/images/farm.png",
    title: "How Ag-Tech Ripened into a Growing Market",
    text:
      "Some people maybe still confusing to arrange budgeting for their business",
    path: "/",
  },
  {
    img: "/images/corn.png",
    title: "How Ag-Tech Ripened into a Growing Market",
    text:
      "Some people maybe still confusing to arrange budgeting for their business",
    path: "/",
  },
  {
    img: "/images/corn.png",
    title: "How Ag-Tech Ripened into a Growing Market",
    text:
      "Some people maybe still confusing to arrange budgeting for their business",
    path: "/",
  },
];

export const HomeBlogSection = () => {
  return (
    <Container>
      <Wrapper>
        <TopSection>
          <Heading>Check Our Blog</Heading>
          <ShowMoreLink to={links.BLOG}>Show more</ShowMoreLink>
        </TopSection>
        <PostGroups>
          {blogs.map(({ img, title, text, path }, id) => (
            <Post key={id}>
              <PostCover>
                <img src={img} />
              </PostCover>
              <PostTitle>{title}</PostTitle>
              <PostText>{addEllispis(text, 50)}</PostText>
              <ReadMoreLink to={path}>Read more</ReadMoreLink>
            </Post>
          ))}
        </PostGroups>
      </Wrapper>
    </Container>
  );
};
