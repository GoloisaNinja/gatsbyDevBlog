import React from "react";
import Theme from "../Theme";
import { Link } from "gatsby";
import {
  WavesWrapper,
  FooterWrapper,
  SiteLinkWrapper,
  IconsWrapper,
  Copyright,
} from "./styles";
import {
  FaMastodon,
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
    <Theme>
      <WavesWrapper>
        <div>
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
          </svg>
        </div>
      </WavesWrapper>
      <FooterWrapper>
        <SiteLinkWrapper>
          <Link to="/">Home</Link>
          <Link to="/all-articles">Articles</Link>
          <Link to="/about">About</Link>
        </SiteLinkWrapper>
        <IconsWrapper>
          <a
            href="https://hachyderm.io/@joncollinsdev"
            alt="Jon's Mastodon Profile"
            aria-label="Mastodon"
          >
            <FaMastodon />
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
            href="https://joncollins.dev"
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

        <Copyright>
          <p>
            Made with <FaMugHot /> & Gatsby
          </p>
          <p>
            Jon Collins Dev <FaCopyright /> {year}
          </p>
        </Copyright>
      </FooterWrapper>
    </Theme>
  );
}
