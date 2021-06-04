import React from "react";
import { navigate } from "gatsby";
import { HeroWrapper, HeroTextWrapper, HeroButtonWrapper } from "./styles";
import { Button } from "../Button";

export function LandingHero({ title, subtitle, button, buttonText, to }) {
  return (
    <HeroWrapper>
      <HeroTextWrapper>
        <h1>{title}</h1>
        <h4>{subtitle}</h4>
      </HeroTextWrapper>
      {button && (
        <HeroButtonWrapper>
          <Button onClick={() => navigate(to)}>{buttonText}</Button>
        </HeroButtonWrapper>
      )}
    </HeroWrapper>
  );
}
