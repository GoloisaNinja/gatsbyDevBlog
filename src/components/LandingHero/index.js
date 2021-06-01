import React from "react";
import { HeroWrapper, HeroTextWrapper, HeroButtonWrapper } from "./styles";
import { Button } from "../Button";

export function LandingHero() {
  return (
    <HeroWrapper>
      <HeroTextWrapper>
        <h1>The Jcodes Dev Blog</h1>
        <h4>A nerd blog. A journey.</h4>
      </HeroTextWrapper>
      <HeroButtonWrapper>
        <Button>About Jon</Button>
      </HeroButtonWrapper>
    </HeroWrapper>
  );
}
