import React from "react";
import { LayoutWrapper } from "./styles";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { LandingHero } from "../LandingHero";

const Layout = ({ children, page, bg }) => {
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
  const detailsObject = {
    landing: {
      title: (
        <h1>
          The Jcodes <span style={purpleSpan}>Dev </span>Blog
        </h1>
      ),
      subtitle: (
        <h4>
          A nerd <span style={blueSpan}>blog</span>. A{" "}
          <span style={blueSpan}>journey</span>.
        </h4>
      ),
      button: true,
      buttonText: "About Jon",
      to: "/about",
    },
    about: {
      title: (
        <h1>
          All <span style={purpleSpan}>About </span>Jcodes
        </h1>
      ),
      subtitle: (
        <h4>
          The story of <span style={blueSpan}>Jon</span>. A{" "}
          <span style={blueSpan}>developer</span>.
        </h4>
      ),
      button: true,
      buttonText: "Back To Homepage",
      to: "/",
    },
    notFound: {
      title: (
        <h1>
          404 Page Not <span style={purpleSpan}>Found!</span>
        </h1>
      ),
      subtitle: (
        <h4>
          Here there be <span style={blueSpan}>dragons</span>. Best go{" "}
          <span style={blueSpan}>back</span>.
        </h4>
      ),
      button: true,
      buttonText: "Back to Safety",
      to: "/",
    },
  };
  return (
    <>
      <Header />
      <LandingHero
        title={detailsObject[page]["title"]}
        subtitle={detailsObject[page]["subtitle"]}
        button={detailsObject[page]["button"]}
        buttonText={detailsObject[page]["buttonText"]}
        to={detailsObject[page]["to"]}
      />
      <LayoutWrapper bg={bg}>
        <main>{children}</main>
      </LayoutWrapper>
      <Footer />
    </>
  );
};

export { Layout };
