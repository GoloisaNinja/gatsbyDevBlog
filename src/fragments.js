import { graphql } from "gatsby";

export const articleFields = graphql`
  fragment StrapiArticleFields on StrapiArticle {
    strapiId
    title
    content
    readTime
    id
    author {
      username
      avatar {
        localFile {
          childImageSharp {
            fixed(width: 45) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
      }
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
