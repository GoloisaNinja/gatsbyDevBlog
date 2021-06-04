import React from "react";
import { LayoutWrapper } from "./styles";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { LandingHero } from "../LandingHero";

const AboutLayout = ({ children }) => {
  return (
    <>
      <Header />
      <LandingHero
        title="All About Jcodes"
        subtitle="The story of Jon. A developer."
        button={true}
        buttonText="Back to Homepage"
        to={-1}
      />
      <LayoutWrapper>
        <main>{children}</main>
      </LayoutWrapper>
      <Footer />
    </>
  );
};

export { AboutLayout };
