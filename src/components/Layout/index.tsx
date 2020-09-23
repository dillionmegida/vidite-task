import React from "react";
import { Header } from "../Header";
import { Hero } from "../Hero";

type Props = {
  showHero?: boolean;
};

export const Layout: React.FC<Props> = ({ showHero = false }) => {
  return (
    <div>
      <Header />
      {showHero && <Hero />}
    </div>
  );
};
