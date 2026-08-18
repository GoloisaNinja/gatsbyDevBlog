import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Theme from "../Theme";
import { AboutHeadingWrapper, HeadingIntroWrapper } from "./styles";

export function AboutHeading() {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "codingnobg.webp" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <Theme>
      <AboutHeadingWrapper>
        <HeadingIntroWrapper>
          <div>
            <h4>Hello there</h4>
            <p>
              {" "}
              I'm Jon, and I'm a Software Developer. My path to becoming a
              developer wasn't exactly smooth, but then, I think that is true
              for so many developers and would-be developers. The landscape of
              software, development, and IT have changed drastically in the last
              few years. As with anything, some of this change is good, and some
              of this change is bad.
            </p>
            <br />
            <p>
              I'll largely try and keep it pretty light around here. I enjoy
              writing articles about topics that I find useful or engaging.
              You're just as likely to find a video game review as you are an
              article about some new programming revelation I've come to. Oh,
              and keyboards...yeah we're going to talk about keyboards.
            </p>
          </div>
          <Img fluid={data.file.childImageSharp.fluid} />
        </HeadingIntroWrapper>
      </AboutHeadingWrapper>
    </Theme>
  );
}

export default AboutHeading;
