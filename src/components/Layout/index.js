import React from "react";
import { LayoutWrapper } from "./styles";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { LandingImage } from "../LandingImage";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <LandingImage />
      <LayoutWrapper>
        <main>{children}</main>
      </LayoutWrapper>
      <Footer />
    </>
  );
};

export { Layout };
