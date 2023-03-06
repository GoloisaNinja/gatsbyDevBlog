import { graphql } from "gatsby";

export const articleFields = graphql`
  fragment StrapiArticleFields on StrapiArticle {
    strapiId
    title
    content
    readTime
    preview
    id
    hasGallery
    galleryURLS
    author {
      username
      avatar {
        localFile {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
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
            originalName
          }
        }
      }
    }
  }
`;
