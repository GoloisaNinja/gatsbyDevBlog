import React from "react";
import { Link } from "gatsby";
import { SmallLogo } from "../SmallLogo";
import { FooterWrapper, IconsWrapper } from "./styles";
import {
  FaTwitter,
  FaGlobe,
  FaRedditAlien,
  FaLinkedin,
  FaMugHot,
  FaCopyright,
} from "react-icons/fa";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <FooterWrapper>
      <div>
        <SmallLogo />
        <IconsWrapper>
          <Link to="https://www.twitter.com/GoloisaNinja">
            <FaTwitter />
          </Link>
          <Link to="https://www.reddit.com/GoloisaNinja">
            <FaRedditAlien />
          </Link>
          <Link to="https://jcodes.page">
            <FaLinkedin />
          </Link>
          <Link to="https://jcodes.page">
            <FaGlobe />
          </Link>
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
