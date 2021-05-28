import React from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

export function SmallLogo() {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "smallLogo.png" }) {
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `);
  return <Img fixed={data.file.childImageSharp.fixed} />;
}
