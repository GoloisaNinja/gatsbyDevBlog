import React from "react";
import { graphql } from "gatsby";
import { ArticleLayout } from "components";
import ReactMarkdown from "react-markdown";
import Img from "gatsby-image";
import { FaTwitter } from "react-icons/fa";
import {
  ArticleImageWrapper,
  ArticleTitleContentWrapper,
  ArticleContentWrapper,
  Title,
  AuthorWrapper,
  AuthorAvatarWrapper,
  ByLineTwitterWrapper,
} from "./styles";
import BackgroundImage from "gatsby-background-image";

export const query = graphql`
  query ArticleQuery($articleId: String) {
    strapiArticle(id: { eq: $articleId }) {
      ...StrapiArticleFields
    }
  }
`;

export default function ArticleTemplate({ data }) {
  console.log(data);
  return (
    <ArticleLayout>
      <ArticleTitleContentWrapper>
        <Title>{data.strapiArticle.title}</Title>
        <AuthorWrapper>
          <AuthorAvatarWrapper>
            <Img
              fluid={
                data.strapiArticle.author.avatar.localFile.childImageSharp.fluid
              }
            />
          </AuthorAvatarWrapper>
          <ByLineTwitterWrapper>
            BY {data.strapiArticle.author.username}
            <div>
              <a href="https://twitter.com/GoloisaNinja">
                <FaTwitter />
              </a>
            </div>
          </ByLineTwitterWrapper>
        </AuthorWrapper>
      </ArticleTitleContentWrapper>

      <ArticleImageWrapper>
        <BackgroundImage
          fluid={data.strapiArticle.image.localFile.childImageSharp.fluid}
        />
      </ArticleImageWrapper>
      <ArticleContentWrapper>
        <ReactMarkdown children={data.strapiArticle.content} />
      </ArticleContentWrapper>
    </ArticleLayout>
  );
}
