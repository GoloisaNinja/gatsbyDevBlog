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
        title="About Jcodes"
        subtitle="The story of Jon. A developer."
        homepage={false}
      />
      <LayoutWrapper>
        <main>{children}</main>
      </LayoutWrapper>
      <Footer />
    </>
  );
};

export { AboutLayout };
