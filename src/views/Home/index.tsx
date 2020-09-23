import React from "react";
import { HomeIntroVideo } from "../../components/HomeIntroVideo";
import { Layout } from "../../components/Layout";
import { PartnersAndSupporters } from "../../components/PartnersAndSupporters";

export const Home = () => (
  <Layout showHero={true}>
    <PartnersAndSupporters />
    <HomeIntroVideo />
  </Layout>
);
