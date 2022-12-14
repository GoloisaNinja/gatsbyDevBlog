import React from "react";
import Theme from "../Theme";
import { FaMastodon, FaLinkedinIn, FaGithubAlt } from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import { HeadlineWrapper, HeadlineGridWrapper } from "./styles";

export function Headline() {
  return (
    <Theme>
      <HeadlineWrapper>
        <div>
          <HeadlineGridWrapper>
            <div>
              <h4>What to expect.</h4>
              <p>
                Welcome to my developer blog! I'll be working on a wide range of
                blog topics. Everything from opinion pieces to hardware tech
                reviews, to some of the project related tips and tricks that
                I've discovered along the way. Make sure to come and join me on
                Tech Twitter, and we should totally connect on LinkedIn also!
              </p>
              <a
                href="https://hachyderm.io/@joncollinsdev"
                alt="Jon's Mastodon Profile"
                aria-label="Mastodon"
              >
                <FaMastodon />
              </a>
              <a
                href="https://www.linkedin.com/in/jonmcollins/"
                alt="LinkedIn Page"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div>
            <div>
              <h4>Want to see more?</h4>
              <p>
                I can tell you are already intrigued. I have a sense about this
                kind of thing. It's okay, I get it. I have a magnetism. Don't
                fight it. I have a bunch of work posted over at my portfolio
                that you can check out if you'd like to dig deeper. Go check it
                out and let me know what you think! Let's connect on Github too!
              </p>
              <a
                href="https://joncollins.dev"
                alt="Portfolio Page"
                aria-label="Globe Icon Link to Jon's Portfolio Page"
              >
                <MdWeb />
              </a>
              <a
                href="https://github.com/goloisaninja"
                alt="Github Page"
                aria-label="Github"
              >
                <FaGithubAlt />
              </a>
            </div>
          </HeadlineGridWrapper>
        </div>
      </HeadlineWrapper>
    </Theme>
  );
}
