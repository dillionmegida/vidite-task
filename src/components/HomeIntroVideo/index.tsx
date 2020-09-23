import React from "react";
import { Icons } from "../Icons";
import {
  Container,
  Heading,
  LeftColumn,
  Para,
  PlayButton,
  RightColumn,
  VideoContainer,
} from "./styles";

export const HomeIntroVideo = () => {
  return (
    <Container>
      <LeftColumn>
        <VideoContainer>
          <PlayButton>
            <Icons name="play" color="white" />
          </PlayButton>
        </VideoContainer>
      </LeftColumn>
      <RightColumn>
        <Heading>
          <h2>Integrating African Agripreneurs to the World Agro-ecosystem</h2>
        </Heading>
        <Para>
          <p>
            iProduce Africa Agri-business hub is an innitiative of Inara
            Foundation, a non-profit organization established to address
            development challenges in Nigeria with a focus on the following
            thematic areas: youth empowerment, economic development; women
            empowerment; and education.
          </p>
        </Para>
      </RightColumn>
    </Container>
  );
};
