import React from "react";
import { LayoutWrapper } from "./styles";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { LandingHero } from "../LandingHero";

const Layout = ({ children }) => {
  const blueSpan = {
    fontFamily: "Prompt, 'sans-serif'",
    color: "#2ccbd1",
    fontWeight: "bold",
  };
  const purpleSpan = {
    fontFamily: "Prompt, 'sans-serif'",
    color: "#d4a6ed",
    fontWeight: "900",
  };
  const title = (
    <h1>
      The Jcodes <span style={purpleSpan}>Dev </span>Blog
    </h1>
  );
  const subtitle = (
    <h4>
      A nerd <span style={blueSpan}>blog</span>. A{" "}
      <span style={blueSpan}>journey</span>.
    </h4>
  );
  return (
    <>
      <Header />
      <LandingHero
        title={title}
        subtitle={subtitle}
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
