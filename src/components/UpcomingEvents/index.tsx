import React from "react";
import { links } from "../../constants/links";
import { Event } from "../../interfaces/Event";
import {
  Container,
  Wrapper,
  TopSection,
  Heading,
  ShowMoreLink,
  EventGroup,
  Event as _Event,
  EventCover,
  EventType,
  EventTitle,
  EventDate,
} from "./styles";

const events: Event[] = [
  {
    type: "Webinar",
    img: "/images/farm.png",
    title: "Prepare Your Agro-Business Plan",
    date: "25 Jun 2020, 6:00pm",
  },
  {
    type: "Webinar",
    img: "/images/corn.png",
    title: "Organic Farming",
    date: "25 Jun 2020, 6:00pm",
  },
  {
    type: "Webinar",
    img: "/images/savings.png",
    title: "Agribusiness Financing",
    date: "25 Jun 2020, 6:00pm",
  },
];

export const UpcomingEvents = () => {
  return (
    <Container>
      <Wrapper>
        <TopSection>
          <Heading>Upcoming Events</Heading>
          <ShowMoreLink to={links.EVENTS}>Show more</ShowMoreLink>
        </TopSection>
        <EventGroup>
          {events.map(({ type, title, date, img }, i) => (
            <_Event key={i}>
              <EventCover>
                <img src={img} alt="Event cover" />
              </EventCover>
              <EventType>{type}</EventType>
              <EventTitle>{title}</EventTitle>
              <EventDate>{date}</EventDate>
            </_Event>
          ))}
        </EventGroup>
      </Wrapper>
    </Container>
  );
};
