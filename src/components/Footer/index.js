import React from "react";
import { SmallLogo } from "../SmallLogo";
import { FooterWrapper, IconsWrapper } from "./styles";
import {
  FaTwitter,
  FaGlobe,
  FaRedditAlien,
  FaLinkedin,
  FaMugHot,
  FaCopyright,
  FaGithub,
} from "react-icons/fa";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <FooterWrapper>
      <div>
        <SmallLogo />
        <IconsWrapper>
          <a href="https://twitter.com/goloisaninja">
            <FaTwitter />
          </a>
          <a href="https://www.reddit.com/user/GoloisaNinja">
            <FaRedditAlien />
          </a>
          <a href="https://jcodes.page">
            <FaLinkedin />
          </a>
          <a href="https://jcodes.page">
            <FaGlobe />
          </a>
          <a href="https://github.com/goloisaninja">
            <FaGithub />
          </a>
        </IconsWrapper>
      </div>
      <div>
        <p>
          Made with <FaMugHot /> Jon Collins Dev <FaCopyright /> {year}
        </p>
      </div>
    </FooterWrapper>
  );
}
