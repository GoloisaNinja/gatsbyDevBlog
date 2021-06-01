import React from "react";
import { LayoutWrapper } from "./styles";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { LandingHero } from "../LandingHero";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <LandingHero />
      <LayoutWrapper>
        <main>{children}</main>
      </LayoutWrapper>
      <Footer />
    </>
  );
};

export { Layout };
