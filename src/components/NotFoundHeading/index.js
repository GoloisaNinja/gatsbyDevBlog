import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { StyleWrapper, HeadingWrapper } from "./styles";

export const NotFoundHeading = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "404.webp" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);
  return (
    <StyleWrapper>
      <HeadingWrapper>
        <div>
          <h4>Are you lost?</h4>
          <p>
            {" "}
            It doesn't look like our talented team of weird monsters have
            completed the page you are looking for. It's either under
            construction or it's *gasp* nonexistent! We recommend sticking to
            the rivers and the lakes that you're used to.
          </p>
        </div>
        <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} />
      </HeadingWrapper>
    </StyleWrapper>
  );
};
