import React from "react";
import styled from "styled-components";
import { Footer } from "../Footer";
import { PageHeader as Header } from "../Header";
import { Hero } from "../Hero";

const LayoutContainer = styled.div``;

type Props = {
  showHero?: boolean;
};

export const Layout: React.FC<Props> = ({ showHero = false, children }) => {
  return (
    <LayoutContainer>
      <Header />
      {showHero && <Hero />}
      {children}
      <Footer />
    </LayoutContainer>
  );
};
