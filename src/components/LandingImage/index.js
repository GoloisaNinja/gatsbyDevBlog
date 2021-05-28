import React from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

export function LandingImage() {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "blogLanding.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return <Img fluid={data.file.childImageSharp.fluid} />;
}
