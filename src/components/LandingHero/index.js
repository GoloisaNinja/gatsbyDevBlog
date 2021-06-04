import React from "react";
import { navigate } from "gatsby";
import { HeroWrapper, HeroTextWrapper, HeroButtonWrapper } from "./styles";
import { Button } from "../Button";

export function LandingHero({ title, subtitle, homepage }) {
  return (
    <HeroWrapper>
      <HeroTextWrapper>
        <h1>{title}</h1>
        <h4>{subtitle}</h4>
      </HeroTextWrapper>
      {homepage && (
        <HeroButtonWrapper>
          <Button onClick={() => navigate(`/about`)}>About Jon</Button>
        </HeroButtonWrapper>
      )}
    </HeroWrapper>
  );
}
