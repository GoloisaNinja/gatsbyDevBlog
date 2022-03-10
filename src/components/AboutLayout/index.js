import React from "react";
import { LayoutWrapper } from "./styles";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { LandingHero } from "../LandingHero";

const AboutLayout = ({ children }) => {
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
      All <span style={purpleSpan}>About </span>Jcodes
    </h1>
  );
  const subtitle = (
    <h4>
      The story of <span style={blueSpan}>Jon</span>. A{" "}
      <span style={blueSpan}>developer</span>.
    </h4>
  );
  return (
    <>
      <Header />
      <LandingHero
        title={title}
        subtitle={subtitle}
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
