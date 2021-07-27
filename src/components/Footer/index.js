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
          <a
            href="https://twitter.com/goloisaninja"
            alt="Twitter Page"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.reddit.com/user/GoloisaNinja"
            alt="Reddit Profile"
            aria-label="Reddit"
          >
            <FaRedditAlien />
          </a>
          <a
            href="https://www.linkedin.com/in/jonmcollins/"
            alt="LinkedIn Page"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://jcodes.page"
            alt="Portfolio Page"
            aria-label="Globe Icon Link to Jon's Portfolio Page"
          >
            <FaGlobe />
          </a>
          <a
            href="https://github.com/goloisaninja"
            alt="Github Page"
            aria-label="Github"
          >
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
