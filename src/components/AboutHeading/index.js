import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { AboutHeadingWrapper, HeadingIntroWrapper } from "./styles";

export function AboutHeading() {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "aboutImg.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <AboutHeadingWrapper>
      <HeadingIntroWrapper>
        <div>
          <h2>
            <span>Hello</span> there. I'm Jon, and this is my <span>blog</span>.
            I'll just tell you a little about <span>myself</span>.
          </h2>
        </div>
        <Img fluid={data.file.childImageSharp.fluid} />
      </HeadingIntroWrapper>
    </AboutHeadingWrapper>
  );
}

export default AboutHeading;
