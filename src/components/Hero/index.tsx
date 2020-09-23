import React from "react";
import { Header } from "../Header";
import { HeroContainer, HeroImage, HeroPara, HeroTitle, LeftColumn, RightColumn, _Button } from "./styles";

export const Hero = () => {
  return (
    <HeroContainer>
      <LeftColumn>
        <HeroTitle>
          <span>Unlocking Agribusiness Opportunitiesi</span>
        </HeroTitle>
        <HeroPara>
          <p>
            We connect you with helpful resources, services and opportunities to
            start or grow your agribusiness
          </p>
        </HeroPara>
        <_Button>
          JOIN US
        </_Button>
      </LeftColumn>
      <RightColumn>
        <HeroImage />
      </RightColumn>
    </HeroContainer>
  );
};
