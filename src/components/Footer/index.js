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
          <a href="https://twitter.com/goloisaninja" alt="Twitter Page">
            <FaTwitter />
          </a>
          <a
            href="https://www.reddit.com/user/GoloisaNinja"
            alt="Reddit Profile"
          >
            <FaRedditAlien />
          </a>
          <a
            href="https://www.linkedin.com/in/jonmcollins/"
            alt="LinkedIn Page"
          >
            <FaLinkedin />
          </a>
          <a href="https://jcodes.page" alt="Portfolio Page">
            <FaGlobe />
          </a>
          <a href="https://github.com/goloisaninja" alt="Github Page">
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
