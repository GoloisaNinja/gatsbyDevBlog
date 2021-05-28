import React from "react";
import { graphql } from "gatsby";
import { ArticleLayout } from "components";
import ReactMarkdown from "react-markdown";
import {
  ArticleImageWrapper,
  ArticleTitleContentWrapper,
  ArticleContentWrapper,
  Title,
  AuthorWrapper,
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
        <AuthorWrapper>BY {data.strapiArticle.author.username}</AuthorWrapper>
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
