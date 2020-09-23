import React from "react";
import { Container, Supporter, Supporters, Text } from "./styles";

const supporters: { logo: string }[] = [
  {
    logo: "/images/careed-logo.png",
  },
  {
    logo: "/images/nepc-logo.png",
  },
  {
    logo: "/images/consulting-logo.png",
  },
];

export const PartnersAndSupporters = () => {
  return (
    <Container>
      <Text>Our Partners & Supporters</Text>
      <Supporters>
        {supporters.map(({ logo }, i) => (
          <Supporter src={logo} key={i} />
        ))}
      </Supporters>
    </Container>
  );
};
