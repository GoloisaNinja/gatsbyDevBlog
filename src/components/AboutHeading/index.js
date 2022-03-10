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
              I'm Jon, and I'm a Full Stack Developer. My path to becoming a
              developer wasn't exactly smooth, but then, I think that is true
              for so many developers and would-be developers! Keep reading and
              I'll tell you a little more about myself and my journey thus far!
            </p>
          </div>
          <Img fluid={data.file.childImageSharp.fluid} />
        </HeadingIntroWrapper>
      </AboutHeadingWrapper>
    </Theme>
  );
}

export default AboutHeading;
