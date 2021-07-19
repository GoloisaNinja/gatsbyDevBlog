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
          <a href="https://twitter.com/goloisaninja" alt="Jon's Twitter Page">
            <FaTwitter />
          </a>
          <a
            href="https://www.reddit.com/user/GoloisaNinja"
            alt="Jon's Reddit Profile"
          >
            <FaRedditAlien />
          </a>
          <a href="https://jcodes.page" alt="Jon's LinkedIn Page">
            <FaLinkedin />
          </a>
          <a href="https://jcodes.page" alt="Jon's Portfolio Page">
            <FaGlobe />
          </a>
          <a href="https://github.com/goloisaninja" alt="Jon's Github Page">
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
