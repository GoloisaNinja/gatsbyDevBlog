import { graphql } from "gatsby";

export const articleFields = graphql`
  fragment StrapiArticleFields on StrapiArticle {
    strapiId
    title
    content
    id
    author {
      username
    }
    created_at
    image {
      localFile {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`;
