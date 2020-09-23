import React from "react";
import {
  ColumnsWrapper,
  HeroContainer,
  HeroImage,
  HeroImageWrapper,
  HeroPara,
  HeroTitle,
  LeftColumn,
  RightColumn,
  _Button,
} from "./styles";

export const Hero = () => {
  return (
    <HeroContainer>
      <ColumnsWrapper>
        <LeftColumn>
          <HeroTitle>
            <span>Unlocking Agribusiness Opportunities</span>
          </HeroTitle>
          <HeroPara>
            <p>
              We connect you with helpful resources, services and opportunities
              to start or grow your agribusiness
            </p>
          </HeroPara>
          <_Button>JOIN US</_Button>
        </LeftColumn>
        <RightColumn>
          <HeroImageWrapper >
            <HeroImage src='/images/hero-people.png' />
          </HeroImageWrapper>
        </RightColumn>
      </ColumnsWrapper>
    </HeroContainer>
  );
};
