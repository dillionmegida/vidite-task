import React from "react";
import { HomeBlogSection } from "../../components/HomeBlogSection";
import { HomeIntroVideo } from "../../components/HomeIntroVideo";
import { HomeWhyRegister } from "../../components/HomeWhyRegister";
import { Layout } from "../../components/Layout";
import { PartnersAndSupporters } from "../../components/PartnersAndSupporters";
import { UpcomingEvents } from "../../components/UpcomingEvents";

export const Home = () => (
  <Layout showHero={true}>
    <PartnersAndSupporters />
    <HomeIntroVideo />
    <HomeWhyRegister />
    <HomeBlogSection />
    <UpcomingEvents />
  </Layout>
);
