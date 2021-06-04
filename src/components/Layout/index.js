import React from "react";
import { LayoutWrapper } from "./styles";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { LandingHero } from "../LandingHero";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <LandingHero
        title="The Jcodes Dev Blog"
        subtitle="A nerd blog. A journey."
        button={true}
        buttonText="About Jon"
        to="/about"
      />
      <LayoutWrapper>
        <main>{children}</main>
      </LayoutWrapper>
      <Footer />
    </>
  );
};

export { Layout };
