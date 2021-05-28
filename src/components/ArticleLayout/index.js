import React from "react";
import { LayoutWrapper } from "./styles";
import { Header } from "../Header";
import { Footer } from "../Footer";

const ArticleLayout = ({ children }) => {
  return (
    <>
      <Header />
      <LayoutWrapper>
        <main>{children}</main>
      </LayoutWrapper>
      <Footer />
    </>
  );
};

export { ArticleLayout };
