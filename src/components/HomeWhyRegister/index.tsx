import React from "react";
import { colors } from "../../styles/colors";
import {
  Container,
  Heading,
  Label,
  Service,
  ServiceHeading,
  ServiceIcon,
  ServicesGroup,
  ServiceText,
  ServiceTextGroup,
} from "./styles";
import { Icons } from "../Icons";

const services: { icon: React.ReactNode; heading: string; text: string }[] = [
  {
    icon: <img src="/icons/briefcase.png" alt="" />,
    heading: "Business Advisory Services",
    text: "Access our business advisory and coaching services for agripreneurs",
  },
  {
    icon: <Icons name="book" color={colors.pink900} />,
    heading: "Essential Guides",
    text: "Learn about prospective export markets",
  },
  {
    icon: <Icons name="calendar" color={colors.blue600} />,
    heading: "Easy feedback sharing",
    text:
      "Attend our events tailored to build the capacity of our agreprenuers",
  },
  {
    icon: <Icons name="handshake" color={colors.purple700} />,
    heading: "Business Deal room",
    text:
      "Get matched and connect with potential agribusiness partners around the globe",
  },
];

export const HomeWhyRegister = () => {
  return (
    <Container>
      <Label>WHY REGISTER?</Label>
      <Heading>
        <h2>We equip you with all that you need to grow your agro-business</h2>
      </Heading>
      <ServicesGroup>
        {services.map(({ icon, heading, text }, id) => {
          const lightColors = [
            colors.teal200,
            colors.pink300,
            colors.blue300,
            colors.purple300,
          ];

          return (
            <Service>
              <ServiceIcon lightColor={lightColors[id]} imageFull={id === 0}>
                {icon}
              </ServiceIcon>
              <ServiceTextGroup>
                <ServiceHeading>{heading}</ServiceHeading>
                <ServiceText>{text}</ServiceText>
              </ServiceTextGroup>
            </Service>
          );
        })}
      </ServicesGroup>
    </Container>
  );
};
